package j4k.candycrush

import com.soywiz.klogger.Logger
import j4k.candycrush.GameMechanics.InsertMove
import j4k.candycrush.GameMechanics.Move
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.GameField
import j4k.candycrush.model.Tile
import j4k.candycrush.model.TileCell

/**
 * Game cycle which reacts on swapped tiles [onDragTileEvent].
 */
class GameFlow(val field: GameField, private val mechanics: GameMechanics, private val animator: TileAnimator) :
        DragTileListener {

    companion object {
        val log = Logger("GameFlow")
    }

    override fun onDragTileEvent(posA: Position, posB: Position) {
        if (animator.isAnimationRunning()) {
            log.debug { "Skipping drag event because of moving tiles ($posA. $posB)" }
        } else if (field[posA].isNotTile() || field[posB].isNotTile()) {
            log.debug { "Skipping drag event because one tile wasn't a tile ($posA. $posB)" }
        } else if (mechanics.isSwapAllowed(posA, posB)) {
            swapTiles(posA, posB)
        } else {
            animator.animateIllegalSwap(posA, posB)
        }
    }

    /**
     * Swaps two tiles and triggers the removal of and refill of connected tiles. A illegal swap, will be swapped back.
     */
    private fun swapTiles(posA: Position, posB: Position) {
        mechanics.swapTiles(posA, posB)
        val connectedTiles: List<TileCell> = mechanics.getConnectedTiles(posA, posB)
        mechanics.removeTileCells(connectedTiles)
        val nextMoves: List<Move> = mechanics.getNextMoves()
        val newTileMoves: List<InsertMove> = getNewTileMoves()
        animator.animateSwap(posA, posB).invokeOnCompletion {
            animator.animateRemoveTiles(connectedTiles)
            animator.animateMoves(nextMoves)
            mechanics.insert(newTileMoves)
            animator.animateInsert(newTileMoves).invokeOnCompletion {
                checkNewField()
            }
        }
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
            mechanics.removeTileCells(tilesToRemove)
            animator.animateRemoveTiles(tilesToRemove)
            val nextMoves: List<Move> = mechanics.getNextMoves()
            val newTileMoves: List<InsertMove> = getNewTileMoves()
            animator.animateMoves(nextMoves)
            mechanics.insert(newTileMoves)
            animator.animateInsert(newTileMoves).invokeOnCompletion {
                checkNewField()
            }
        }
    }


    /**
     * @return new random tiles for each empty cell
     */
    private fun getNewTileMoves(): List<InsertMove> = mechanics.getNewTileMoves { Tile.randomTile() }

}
