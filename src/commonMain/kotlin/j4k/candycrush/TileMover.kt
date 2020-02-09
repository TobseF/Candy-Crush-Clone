package j4k.candycrush

import com.soywiz.klock.TimeSpan
import com.soywiz.klock.milliseconds
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
        val positionGrid: PositionGrid,
        val gameMechanics: GameMechanics) : MoveTileObserver.MoveTileListener, UpdateComponent {


    override fun update(ms: Double) {}

    var movingTiles = false


    private suspend fun Image.moveAsync(point: IPoint,
            time: TimeSpan = 1.seconds,
            easing: Easing = Easing.EASE_IN_OUT_ELASTIC): Deferred<Unit> {
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
        val startPos: IPoint = positionGrid.getCenterPosition(start)
        val endPos: IPoint = positionGrid.getCenterPosition(end)

        val tileA: Image? = renderer.getTile(start)
        val tileB: Image? = renderer.getTile(end)
        if (tileA != null && tileB != null) {
            log.debug { "Swapping tiles: $start-$end: $startPos - $endPos" }
            view.async {
                swapTiles(tileA, endPos, tileB, startPos, start, end)
            }
        }
    }

    private suspend fun swapTiles(tileA: Image,
            endPos: IPoint,
            tileB: Image,
            startPos: IPoint,
            start: PositionGrid.Position,
            end: PositionGrid.Position,
            uncheckedMove: Boolean = true) {
        movingTiles = true
        renderer.swapTiles(start, end)
        gameMechanics.swapTiles(start, end)
        val easing = if (uncheckedMove) Easing.EASE_IN_OUT_ELASTIC else Easing.EASE_IN_OUT_BACK
        val timeSpan = if (uncheckedMove) 1.seconds else 300.milliseconds
        tileA.moveAsync(endPos, time = timeSpan, easing = easing)
        val moveTile = tileB.moveAsync(startPos, time = timeSpan, easing = easing)
        moveTile.invokeOnCompletion {
            movingTiles = false
            if (uncheckedMove) {
                if (gameMechanics.isSwapAllowed(start, end)) {
                    val connectedTiles = gameMechanics.getConnectedTiles(start, end)
                    renderer.removeTilesCells(connectedTiles)
                    gameMechanics.removeTileCells(connectedTiles)
                } else {
                    log.debug { "Moving tiles back, because its an illegal move" }
                    view.async {
                        swapTiles(tileB, endPos, tileA, startPos, start, end, false)
                    }
                }
            }
        }
    }


}