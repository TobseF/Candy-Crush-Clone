package j4k.candycrush

import com.soywiz.klock.TimeSpan
import com.soywiz.klock.seconds
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

class TileMover(override val view: Stage,
        val renderer: GameFieldRenderer,
        val gameField: GameField,
        val positionGrid: PositionGrid) : MoveTileObserver.MoveTileListener, UpdateComponent {

    private var moveTileEvent: MoveTileEvent? = null

    override fun update(ms: Double) {}

    suspend fun updateAsync() {
        val event = moveTileEvent
        if (event != null) {
            val start: Image? = renderer.getTile(event.start)
            val startPos: IPoint = positionGrid.getPosition(event.start)
            val end: Image? = renderer.getTile(event.end)
            val endPos: IPoint = positionGrid.getPosition(event.end)
            if (start != null && end != null) {
                start.moveAsync(endPos)
                end.moveAsync(startPos).invokeOnCompletion {
                    renderer.swapTiles(event.start, event.end)
                }
            }
            moveTileEvent = null
        }
    }

    private suspend fun Image.moveAsync(point: IPoint, time: TimeSpan = 1.seconds): Deferred<Unit> {
        val easing = Easing.EASE_IN_OUT_ELASTIC
        return this.tweenAsync(this::globalX[point.x], this::globalY[point.y], time = time, easing = easing)
    }

    override fun onMoveTileEvent(moveTileEvent: MoveTileEvent) {
        this.moveTileEvent = moveTileEvent
        println(moveTileEvent)
    }

}