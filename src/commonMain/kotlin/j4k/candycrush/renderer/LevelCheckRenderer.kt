package j4k.candycrush.renderer

import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korinject.AsyncDependency
import com.soywiz.korinject.AsyncInjector
import j4k.candycrush.LevelCheck
import j4k.candycrush.NewScoreEvent
import j4k.candycrush.lib.EventBus
import j4k.candycrush.lib.Ressources
import j4k.candycrush.lib.loadImage
import j4k.candycrush.model.Tile

class LevelCheckRenderer(private val stage: Stage,
        bus: EventBus,
        private val levelCheck: LevelCheck,
        private val candies: CandySprites,
        private val res: Ressources) : AsyncDependency {

    companion object {
        suspend operator fun invoke(injector: AsyncInjector) {
            injector.mapSingleton { LevelCheckRenderer(get(), get(), get(), get(), get()) }
        }
    }

    private val paddingLeft = 120
    private val paddingTop = 80
    private val paddingText = paddingTop + 55

    private val level = levelCheck.level
    private var moves: Text? = null
    private lateinit var moveArrow: Bitmap
    private var tileCounter = mutableListOf<TileCounter>()

    private class TileCounter(val tile: Tile, val count: Text)

    init {
        bus.register<NewScoreEvent> { onScore() }
    }

    override suspend fun init() {
        moveArrow = loadImage("text_arrows_move.png")

        stage.image(moveArrow) {
            position(paddingLeft, paddingTop)
        }

        level.tileObjectives.forEachIndexed { index, objective ->
            val x = paddingLeft + 100 + (100 * index)
            val y = paddingTop
            stage.image(candies.getTile(objective.tile)) {
                position(x + 8, y)
                height = 64.0
                width = 64.0
            }
            val counter = stage.text(text = "88", textSize = 64.0, font = res.fontSmall) {
                position(x, paddingText)
            }
            tileCounter.add(TileCounter(objective.tile, counter))
        }
        update()
    }


    private fun updateCounters() {
        tileCounter.forEach { tileCounter ->
            val toString = levelCheck.getRemainingCount(tileCounter.tile).toString()
            tileCounter.count.text = toString
        }
    }

    private fun updateMoves() {
        val remainingMoves = levelCheck.remaining.toString()
        if (level.maxMoves != null) {
            val moves = this.moves
            if (moves == null) {
                this.moves = stage.text(text = remainingMoves, textSize = 64.0, font = res.fontSmall) {
                    position(paddingLeft, paddingText)
                }
            } else {
                moves.text = remainingMoves
            }
        }
    }

    private fun onScore() {
        update()
    }

    fun update() {
        updateMoves()
        updateCounters()
    }
}
