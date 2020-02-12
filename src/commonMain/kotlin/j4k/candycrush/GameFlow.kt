package j4k.candycrush

import com.soywiz.klogger.Logger
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.GameField


class GameFlow(val field: GameField, private val mechanics: GameMechanics, private val animator: TileAnimator) :
        DragTileListener {

    companion object {
        val log = Logger("GameFlow")
    }

    val removeTileListener = mutableListOf<RemoveTileListener>()
    var movingTiles = false

    override fun onDragTileEvent(posA: Position, posB: Position) {
        if (movingTiles) {
            log.debug { "Skipping drag event because of moving tiles ($posA. $posB)" }
        } else if (field[posA].isNotTile() || field[posB].isNotTile()) {
            log.debug { "Skipping drag event because one tile wasn't a tile ($posA. $posB)" }
        } else if (mechanics.isSwapAllowed(posA, posB)) {
            movingTiles = true
            mechanics.swapTiles(posA, posB)
            val connectedTiles = mechanics.getConnectedTiles(posA, posB)
            mechanics.removeTileCells(connectedTiles)
            val nextMoves = mechanics.getNextMoves()
            animator.animateSwap(posA, posB).invokeOnCompletion {
                animator.animateRemoveTiles(connectedTiles)
                animator.animateMoves(nextMoves).invokeOnCompletion {
                    movingTiles = false
                }
            }
        } else {
            movingTiles = true
            animator.animateIllegalSwap(posA, posB).invokeOnCompletion {
                movingTiles = false
            }
        }
    }


}
