package j4k.candycrush

import com.soywiz.klock.TimeSpan
import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.klogger.Logger
import com.soywiz.korge.component.UpdateComponent
import com.soywiz.korge.tween.*
import com.soywiz.korge.view.Image
import com.soywiz.korge.view.Stage
import com.soywiz.korge.view.position
import com.soywiz.korma.geom.IPoint
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.degrees
import com.soywiz.korma.interpolation.Easing
import j4k.candycrush.GameFieldRenderer.CandyImage
import j4k.candycrush.GameMechanics.InsertMove
import j4k.candycrush.GameMechanics.Move
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.TileCell
import kotlinx.coroutines.*


class TileAnimator(override val view: Stage, private val renderer: GameFieldRenderer) : UpdateComponent {

    companion object {
        val log = Logger("TileAnimator")
    }

    private val jobs = mutableListOf<Job>()
    private val positionGrid = renderer.positionGrid

    private val moveForward = AnimationSettings(1.seconds, Easing.EASE_IN_OUT_ELASTIC)
    private val moveBackward = AnimationSettings(550.milliseconds, Easing.EASE_IN_OUT_ELASTIC)
    private val hide = AnimationSettings(200.milliseconds, Easing.EASE_IN)

    override fun update(ms: Double) {}

    private fun fallingAnimation(rows: Int) = AnimationSettings((500 * rows).milliseconds, easing = Easing.EASE_IN)

    private suspend fun Image.move(point: IPoint, settings: AnimationSettings) {
        return move(point, settings.time, settings.easing)
    }

    private suspend fun Image.move(point: IPoint, time: TimeSpan, easing: Easing) {
        return this.tween(this::x[point.x], this::y[point.y], time = time, easing = easing)
    }

    private fun animateRemoveTiles(tile: TileCell) = animateRemoveTiles(tile.position)

    private fun animateRemoveTiles(tile: Position) {
        if (tile.hasImage()) {
            val image = tile.getImage()
            renderer.removeTileFromGrid(tile)
            animateRemoveTile(image)
        } else {
            log.debug { "Skipping remove image, because it was already removed: $tile" }
        }
    }

    private fun animateRemoveTile(image: Image) {

        addJob(view.launch {
            image.hide(hide.time, hide.easing)
        })
        addJob(view.launch {
            val scale = 1.4
            image.scaleTo(scale, scale, hide.time, hide.easing)
        })
        addJob(view.launch {
            image.rotateTo(180.degrees, hide.time, hide.easing)
        })
    }

    fun animateRemoveTiles(positions: List<TileCell>) {
        positions.forEach { animateRemoveTiles(it) }
    }

    fun animateMoves(moves: List<Move>): Job {
        val imageMoves = moves.map { it.prepare() }
        imageMoves.forEach { renderer.move(it.move) }
        return addJob(view.launch {
            imageMoves.forEach {
                launch {
                    animateMove(it)
                }
            }
        })
    }

    fun addJob(job: Job): Job {
        jobs.add(job)
        return job
    }

    private fun Move.prepare(): ImageMove {
        return ImageMove(this, this.tile.getImagePosition(), positionGrid.getCenterPosition(this.target))
    }

    suspend fun animateMove(move: ImageMove) {
        move.tile.image.move(move.target, fallingAnimation(move.distance().toInt()))
    }

    class ImageMove(val move: Move, val tile: ImagePosition, val target: Point) {
        fun distance() = move.distance()
    }

    fun animateSwap(start: Position, end: Position): Job {
        val startPos: ImagePosition = start.getImagePosition()
        val endPos: ImagePosition = end.getImagePosition()
        log.debug { "Animate tile swap: $start-$end: $startPos - $endPos" }
        renderer.swapTiles(start, end)
        addJob(view.launch {
            startPos.image.move(endPos.point, moveForward)
        })
        return addJob(view.async {
            endPos.image.move(startPos.point, moveForward)
        })
    }

    fun animateIllegalSwap(start: Position, end: Position): Job {
        val startPos: ImagePosition = start.getImagePosition()
        val endPos: ImagePosition = end.getImagePosition()
        log.debug { "Animate illegal swap: $start-$end: $startPos - $endPos" }
        return addJob(view.async {
            launch {
                startPos.image.move(endPos.point, moveForward)
                startPos.image.move(startPos.point, moveBackward)
            }
            launch {
                endPos.image.move(startPos.point, moveForward)
                endPos.image.move(endPos.point, moveBackward)
            }
        })
    }

    class AnimationSettings(val time: TimeSpan, val easing: Easing)

    fun Position.getImagePosition(): ImagePosition {
        return ImagePosition(getImage(), this.getImagePoint())
    }

    fun Position.getImagePoint(): Point {
        return positionGrid.getCenterPosition(this)
    }

    private fun Position.getImage(): CandyImage = renderer.getTile(this)
    private fun Position.hasImage(): Boolean = renderer.hasTile(this)

    data class ImagePosition(val image: Image, val point: IPoint) {
        override fun toString() = point.toString()
    }

    fun animateInsert(moves: List<InsertMove>): Job {
        val moveByColumn: Map<Int, List<InsertMove>> = moves.groupBy { it.target.column }
        return addJob(view.launch {
            moveByColumn.keys.forEach { column ->
                val columnMoves = moveByColumn[column]?.sorted()
                columnMoves?.forEachIndexed { row, move ->
                    launch {
                        animateInsert(move, ((1 + row) * 500).toLong(), this)
                    }
                }
            }
        })
    }

    fun isAnimationRunning(): Boolean {
        val active = jobs.any { !it.isCompleted }
        if (!active) {
            jobs.clear()
        }
        return active
    }

    suspend fun animateInsert(move: InsertMove, delay: Long, scope: CoroutineScope) {
        val image = renderer.addTile(move.target, move.tile)
        image.alpha = 0.0
        val target = move.target.getImagePoint()
        val start = move.target.moveToStart().getImagePoint()
        image.position(start)
        delay(delay)
        scope.launch {
            image.tween(image::alpha[1.0], time = 150.milliseconds, easing = Easing.EASE_IN)
        }
        image.move(target, fallingAnimation(move.target.row))
    }

}