package j4k.candycrush

import com.soywiz.klogger.Logger
import j4k.candycrush.GameMechanics.InsertMove
import j4k.candycrush.GameMechanics.Move
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.GameField
import j4k.candycrush.model.Tile
import kotlinx.coroutines.Job


class GameFlow(val field: GameField, private val mechanics: GameMechanics, private val animator: TileAnimator) :
        DragTileListener {

    companion object {
        val log = Logger("GameFlow")
    }

    val removeTileListener = mutableListOf<RemoveTileListener>()

    override fun onDragTileEvent(posA: Position, posB: Position) {
        val job = Job()
        if (animator.isAnimationRunning()) {
            log.debug { "Skipping drag event because of moving tiles ($posA. $posB)" }
        } else if (field[posA].isNotTile() || field[posB].isNotTile()) {
            log.debug { "Skipping drag event because one tile wasn't a tile ($posA. $posB)" }
        } else if (mechanics.isSwapAllowed(posA, posB)) {
            mechanics.swapTiles(posA, posB)
            val connectedTiles = mechanics.getConnectedTiles(posA, posB)
            mechanics.removeTileCells(connectedTiles)
            val nextMoves: List<Move> = mechanics.getNextMoves()
            val newTileMoves: List<InsertMove> = mechanics.getNewTileMoves { Tile.randomTile() }
            animator.animateSwap(posA, posB).invokeOnCompletion {
                animator.animateRemoveTiles(connectedTiles)
                animator.animateMoves(nextMoves).invokeOnCompletion {}
                mechanics.insert(newTileMoves)
                animator.animateInsert(newTileMoves)
            }
        } else {
            animator.animateIllegalSwap(posA, posB).invokeOnCompletion {
            }
        }
    }


}
