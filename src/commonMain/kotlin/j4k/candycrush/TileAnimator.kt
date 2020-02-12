package j4k.candycrush

import com.soywiz.klock.TimeSpan
import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.klogger.Logger
import com.soywiz.korge.component.UpdateComponent
import com.soywiz.korge.tween.*
import com.soywiz.korge.view.Image
import com.soywiz.korge.view.Stage
import com.soywiz.korma.geom.IPoint
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.degrees
import com.soywiz.korma.interpolation.Easing
import j4k.candycrush.GameMechanics.Move
import j4k.candycrush.math.PositionGrid
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.TileCell
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.Job
import kotlinx.coroutines.async
import kotlinx.coroutines.launch


class TileAnimator(override val view: Stage, val renderer: GameFieldRenderer, val positionGrid: PositionGrid) :
        UpdateComponent {

    companion object {
        val log = Logger("TileAnimator")
    }

    private val moveForward = AnimationSettings(1.seconds, Easing.EASE_IN_OUT_ELASTIC)
    private val moveBackward = AnimationSettings(550.milliseconds, Easing.EASE_IN_OUT_ELASTIC)
    private val hide = AnimationSettings(200.milliseconds, Easing.EASE_IN)

    override fun update(ms: Double) {}


    private suspend fun Image.move(point: IPoint, settings: AnimationSettings) {
        return move(point, settings.time, settings.easing)
    }


    private suspend fun Image.move(point: IPoint, time: TimeSpan, easing: Easing) {
        return this.tween(this::globalX[point.x], this::globalY[point.y], time = time, easing = easing)
    }

    fun animateRemoveTiles(tile: TileCell) = animateRemoveTiles(tile.position)


    fun animateRemoveTiles(tile: Position) {
        val image = tile.getImage()
        renderer.removeTileFromGrid(tile)
        animateRemoveTile(image)
    }

    fun animateRemoveTile(image: Image) {
        view.launch {
            image.hide(hide.time, hide.easing)
        }
        view.launch {
            val scale = 1.4
            image.scaleTo(scale, scale, hide.time, hide.easing)
        }
        view.launch {
            image.rotateTo(180.degrees, hide.time, hide.easing)
        }
    }

    fun animateRemoveTiles(positions: List<TileCell>) {
        positions.forEach { animateRemoveTiles(it) }
    }

    fun animateMoves(moves: List<Move>): Deferred<Unit> {
        return view.async {
            moves.forEach {
                launch {
                    animateMove(it)
                }
            }
        }
    }

    suspend fun animateMove(move: Move) {
        val tile: ImagePosition = move.tile.getImagePosition()
        val target: Point = positionGrid.getCenterPosition(move.target)
        renderer.move(move)
        tile.image.move(target, time = (300 * move.distance()).milliseconds, easing = Easing.EASE_IN)
    }

    fun animateSwap(start: Position, end: Position): Deferred<Unit> {
        val startPos: ImagePosition = start.getImagePosition()
        val endPos: ImagePosition = end.getImagePosition()
        log.debug { "Animate tile swap: $start-$end: $startPos - $endPos" }
        renderer.swapTiles(start, end)
        view.launch {
            startPos.image.move(endPos.point, moveForward)
        }
        return view.async {
            endPos.image.move(startPos.point, moveForward)
        }
    }

    fun animateIllegalSwap(start: Position, end: Position): Job {
        val startPos: ImagePosition = start.getImagePosition()
        val endPos: ImagePosition = end.getImagePosition()
        log.debug { "Animate illegal swap: $start-$end: $startPos - $endPos" }
        return view.async {
            launch {
                startPos.image.move(endPos.point, moveForward)
                startPos.image.move(startPos.point, moveBackward)
            }
            launch {
                endPos.image.move(startPos.point, moveForward)
                endPos.image.move(endPos.point, moveBackward)
            }
        }
    }

    class AnimationSettings(val time: TimeSpan, val easing: Easing)

    private fun Position.getImagePosition(): ImagePosition {
        return ImagePosition(getImage(), positionGrid.getCenterPosition(this))
    }

    fun Position.getImage() = renderer.getTile(this)

    class ImagePosition(val image: Image, val point: IPoint)

}