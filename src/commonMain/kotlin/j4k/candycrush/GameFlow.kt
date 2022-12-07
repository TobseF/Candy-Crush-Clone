package j4k.candycrush

import com.soywiz.klogger.*
import com.soywiz.korinject.*
import j4k.candycrush.GameMechanics.InsertMove
import j4k.candycrush.GameMechanics.Move
import j4k.candycrush.audio.*
import j4k.candycrush.lib.*
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.*
import j4k.candycrush.renderer.animation.*

/**
 * Global game cycle which reacts on swapped tiles [onDragTileEvent].
 */
class GameFlow(
    private val level: Level,
    private val bus: EventBus,
    private val mechanics: GameMechanics,
    private val animator: TileAnimator,
    private val soundMachine: SoundMachine
) {

    private val field = level.field

    init {
        bus.register<DragTileEvent> { it.onDragTileEvent() }
    }

    companion object {
        val log = Logger<GameFlow>()

        suspend operator fun invoke(injector: AsyncInjector): GameFlow {
            injector.mapSingleton {
                GameFlow(get(), get(), get(), get(), get())
            }
            return injector.get()
        }
    }

    /**
     * A rush is the phase from deleting tiles -> let tiles fall to ground -> refill empty files.
     * The rush counts the refills after an initial tile swap. This is useful to give a score bonus for multiple rushed.
     */
    private var rush = 1

    private fun DragTileEvent.onDragTileEvent() {
        if (animator.isAnimationRunning()) {
            log.debug { "Skipping drag event because of moving tiles ($posA. $posB)" }
        } else if (field[posA].isNotTile() || field[posB].isNotTile()) {
            log.debug { "Skipping drag event because one tile wasn't a tile ($posA. $posB)" }
        } else if (mechanics.isSwapAllowed(posA, posB)) {
            swapTiles(posA, posB)
        } else {
            animator.animateIllegalSwap(posA, posB)
            soundMachine.playWrongMove()
        }
    }

    /**
     * Swaps two tiles and triggers the removal of and refill of connected tiles. An illegal swap, will be swapped back.
     */
    private fun swapTiles(posA: Position, posB: Position) {
        bus.send(SwapTileEvent(posA, posB))
        rush = 1
        mechanics.swapTiles(posA, posB)
        val tilesToRemove: List<TileCell> = getConnectedTiles(posA, posB)
        mechanics.removeTileCells(tilesToRemove)
        val nextMoves: List<Move> = mechanics.dropAllToGround()
        val newTileMoves: List<InsertMove> = getNewTileMoves()
        animator.animateSwap(posA, posB)?.invokeOnCompletion {
            soundMachine.playClear()
            animator.animateRemoveTiles(tilesToRemove)
            bus.send(TileDeletionEvent(rush, (tilesToRemove)))
            animator.animateMoves(nextMoves)
            mechanics.insert(newTileMoves)
            animator.animateInsert(newTileMoves).invokeOnCompletion {
                checkNewField()
            }
        }
    }

    /**
     * @return all [TileCell]s which are least with 3 equal [Tile]s in a horizontal or vertical connected line.
     */
    private fun getConnectedTiles(posA: Position, posB: Position): List<TileCell> {
        val lines = mechanics.getConnectedLines(posA, posB)
        if (lines.size > 1) {
            rush += 1
        }
        return lines.flatten()
    }


    /**
     * Check the whole field for connected rows, deletes them and refill with new tiles. This will be repeated until no
     * more connected tiles are left.
     */
    fun checkNewField() {
        val horizontal: List<List<TileCell>> = GameMechanics(field.clone()).getAndRemoveAllHorizontalRows()
        val vertical: List<List<TileCell>> = GameMechanics(field.clone()).getAndRemoveAllVerticalRows()
        val tilesToRemove: List<TileCell> = horizontal.flatten() + vertical.flatten()

        if (tilesToRemove.isNotEmpty()) {
            log.debug { "Removing tiles after rush $rush: ${tilesToRemove.size}" }
            rush++
            soundMachine.playMulti(rush)
            mechanics.removeTileCells(tilesToRemove)
            animator.animateRemoveTiles(tilesToRemove)
            bus.send(TileDeletionEvent(rush, tilesToRemove))
            val nextMoves: List<Move> = mechanics.dropAllToGround()
            val newTileMoves: List<InsertMove> = getNewTileMoves()
            animator.animateMoves(nextMoves)
            mechanics.insert(newTileMoves)
            animator.animateInsert(newTileMoves).invokeOnCompletion {
                checkNewField()
            }
        } else {
            log.debug { "Field was clean on rush: $rush" }
        }
    }

    /**
     * @return new random tiles for each empty cell
     */
    private fun getNewTileMoves(): List<InsertMove> = mechanics.getNewTileMoves(level::getNextTile)

    fun reset() {
        rush = 1
    }

}
