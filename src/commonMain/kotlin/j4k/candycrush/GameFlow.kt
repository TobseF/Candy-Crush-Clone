package j4k.candycrush

import com.soywiz.klogger.Logger
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.GameField


class GameFlow(val field: GameField,
        private val mechanics: GameMechanics,
        private val animator: TileAnimator,
        val renderer: GameFieldRenderer) : DragTileListener {

    companion object {
        val log = Logger("GameFlow")
    }

    val removeTileListener = mutableListOf<RemoveTileListener>()


    override fun onDragTileEvent(posA: Position, posB: Position) {
        if (animator.movingTiles) {
            log.debug { "Skipping drag event because of moving tiles ($posA. $posB)" }
        } else if (mechanics.isSwapAllowed(posA, posB)) {
            mechanics.swapTiles(posA, posB)
            val connectedTiles = mechanics.getConnectedTiles(posA, posB)
            mechanics.removeTileCells(connectedTiles)
            val nextMoves = mechanics.getNextMoves()
            animator.animateSwap(posA, posB).invokeOnCompletion {
                animator.animateRemoveTilesCells(connectedTiles)
                animator.animateMoves(nextMoves)
            }
        } else {
            animator.animateIllegalSwap(posA, posB)
        }
    }


}
