package j4k.candycrush

import com.soywiz.klock.TimeSpan
import com.soywiz.klock.seconds
import com.soywiz.klogger.Logger
import com.soywiz.korge.component.UpdateComponent
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.tweenAsync
import com.soywiz.korge.view.Image
import com.soywiz.korge.view.Stage
import com.soywiz.korma.geom.IPoint
import com.soywiz.korma.interpolation.Easing
import j4k.candycrush.MoveTileObserver.MoveTileEvent
import j4k.candycrush.math.PositionGrid
import j4k.candycrush.model.GameField
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.async

val log = Logger("TileMover")

class TileMover(override val view: Stage,
        val renderer: GameFieldRenderer,
        val gameField: GameField,
        val positionGrid: PositionGrid) : MoveTileObserver.MoveTileListener, UpdateComponent {


    override fun update(ms: Double) {}

    var movingTiles = false


    private suspend fun Image.moveAsync(point: IPoint, time: TimeSpan = 1.seconds): Deferred<Unit> {
        val easing = Easing.EASE_IN_OUT_ELASTIC
        return this.tweenAsync(this::globalX[point.x], this::globalY[point.y], time = time, easing = easing)
    }

    override fun onMoveTileEvent(moveTileEvent: MoveTileEvent) {
        if (movingTiles) {
            log.debug { "Omitted because of moving tiles: $moveTileEvent" }
        } else {
            swapTiles(moveTileEvent.start, moveTileEvent.end)
        }
    }

    fun swapTiles(start: PositionGrid.Position, end: PositionGrid.Position) {
        val startPos: IPoint = positionGrid.getPosition(start)
        val endPos: IPoint = positionGrid.getPosition(end)

        val tileA: Image? = renderer.getTile(start)
        val tileB: Image? = renderer.getTile(end)
        if (tileA != null && tileB != null) {
            log.debug { "$startPos - $endPos: $start-$end" }
            swapTiles(tileA, endPos, tileB, startPos, start, end)
        }
    }

    private fun swapTiles(tileA: Image,
            endPos: IPoint,
            tileB: Image,
            startPos: IPoint,
            start: PositionGrid.Position,
            end: PositionGrid.Position) {
        movingTiles = true
        view.async {
            tileA.moveAsync(endPos)
            tileB.moveAsync(startPos).invokeOnCompletion {
                renderer.swapTiles(start, end)
                movingTiles = false
            }
        }
    }


}