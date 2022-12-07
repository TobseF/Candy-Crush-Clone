package j4k.candycrush.renderer.animation

import com.soywiz.klock.*
import com.soywiz.klogger.*
import com.soywiz.korge.animate.*
import com.soywiz.korge.tween.*
import com.soywiz.korge.view.*
import com.soywiz.korinject.*
import com.soywiz.korma.geom.*
import com.soywiz.korma.interpolation.*
import j4k.candycrush.GameMechanics.InsertMove
import j4k.candycrush.GameMechanics.Move
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.*
import j4k.candycrush.renderer.*
import kotlinx.coroutines.*

/**
 * Provides animation for tiles in a [GameFieldRenderer].
 */
class TileAnimator(val view: Stage, private val renderer: GameFieldRenderer) {

    companion object {
        val log = Logger<TileAnimator>()

        suspend operator fun invoke(injector: AsyncInjector) {
            injector.mapSingleton { TileAnimator(get(), get()) }
        }
    }

    data class ImagePosition(val image: BaseImage, val point: IPoint) {
        override fun toString() = point.toString()
    }

    private val jobs = mutableListOf<Job>()
    private val positionGrid = renderer.positionGrid

    private val moveForward = AnimationSettings(1.seconds, Easing.EASE_IN_OUT_ELASTIC)
    private val moveBackward = AnimationSettings(550.milliseconds, Easing.EASE_IN_OUT_ELASTIC)
    private val hide = AnimationSettings(200.milliseconds, Easing.EASE_IN)

    private fun fallingAnimation(rows: Int) = AnimationSettings((500 * rows).milliseconds, easing = Easing.EASE_IN)

    private fun animateRemoveTiles(tile: TileCell) = animateRemoveTiles(tile.position)

    private fun animateRemoveTiles(tile: Position) {
        if (tile.hasImage()) {
            val image = tile.getImage()
            renderer.removeTileFromGrid(tile)
            image?.let(::animateRemoveTile)
        } else {
            log.debug { "Skipping remove image, because it was already removed: $tile" }
        }
    }

    private fun animateRemoveTile(image: BaseImage) {

        launch {
            view.animate(parallel = true, defaultTime = hide.time, defaultEasing = hide.easing) {
                hide(image)
                scaleTo(image, 1.4, 1.4)
                rotateTo(image, 180.degrees)
            }
        }
    }

    fun animateRemoveTiles(positions: List<TileCell>) {
        positions.forEach { animateRemoveTiles(it) }
    }

    fun animateMoves(moves: List<Move>): Job {
        val imageMoves = moves.map { it.prepare() }.filterNotNull()
        imageMoves.forEach { renderer.move(it.move) }
        return launch {
            imageMoves.forEach {
                launch {
                    animateMove(it)
                }
            }
        }
    }

    private fun Move.prepare(): ImageMove? {
        return this.tile.getImagePosition()?.let { imagePosition ->
            ImageMove(this, imagePosition, positionGrid.getCenterPosition(this.target))
        }
    }

    private suspend fun animateMove(move: ImageMove) {
        move.tile.image.move(move.target, fallingAnimation(move.distance().toInt()))
    }

    class ImageMove(val move: Move, val tile: ImagePosition, val target: Point) {
        fun distance() = move.distance()
    }

    fun animateSwap(start: Position, end: Position): Job? {
        val startPos: ImagePosition? = start.getImagePosition()
        val endPos: ImagePosition? = end.getImagePosition()
        if (startPos != null && endPos != null) {
            log.debug { "Animate tile swap: $start-$end: $startPos - $endPos" }
            renderer.swapTiles(start, end)
            launch {
                startPos.image.move(endPos.point, moveForward)
            }
            return async {
                endPos.image.move(startPos.point, moveForward)
            }
        }
        return null
    }

    fun animateIllegalSwap(start: Position, end: Position): Job? {
        val startPos: ImagePosition? = start.getImagePosition()
        val endPos: ImagePosition? = end.getImagePosition()
        if (startPos != null && endPos != null) {
            log.debug { "Animate illegal swap: $start-$end: $startPos - $endPos" }
            return async {
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
        return null
    }


    fun animateInsert(moves: List<InsertMove>): Job {
        val moveByColumn: Map<Int, List<InsertMove>> = moves.groupBy { it.target.column }
        return launch {
            moveByColumn.keys.forEach { column ->
                val columnMoves = moveByColumn[column]?.sorted()
                columnMoves?.forEachIndexed { row, move ->
                    launch {
                        animateInsert(move, ((1 + row) * 500).toLong(), this)
                    }
                }
            }
        }
    }

    fun isAnimationRunning(): Boolean {
        val active = jobs.any { !it.isCompleted }
        if (!active) {
            jobs.clear()
        }
        return active
    }

    private suspend fun animateInsert(move: InsertMove, delay: Long, scope: CoroutineScope) {
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

    fun reset() {
        jobs.forEach {
            it.cancel()
        }
        jobs.clear()
    }

    private fun launch(block: suspend CoroutineScope.() -> Unit): Job {
        return addJob(view.launch(block = block))
    }

    private fun async(block: suspend CoroutineScope.() -> Unit): Job {
        return addJob(view.async(block = block))
    }

    private fun addJob(job: Job) = job.also { jobs.add(it) }

    private fun Position.getImage(): CandyImage? = renderer.getTile(this)
    private fun Position.hasImage(): Boolean = renderer.hasTile(this)

    private fun Position.getImagePosition(): ImagePosition? {
        return getImage()?.let { image -> ImagePosition(image, this.getImagePoint()) }
    }

    private fun Position.getImagePoint(): Point {
        return positionGrid.getCenterPosition(this)
    }

}
