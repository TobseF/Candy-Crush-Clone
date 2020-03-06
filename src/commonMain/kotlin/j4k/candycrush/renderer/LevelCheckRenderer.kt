package j4k.candycrush.renderer

import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import j4k.candycrush.LevelCheck
import j4k.candycrush.NewScoreEvent
import j4k.candycrush.lib.EventBus
import j4k.candycrush.lib.Loadable
import j4k.candycrush.lib.Ressources
import j4k.candycrush.lib.loadImage
import j4k.candycrush.model.Tile

class LevelCheckRenderer(override val stage: Stage,
        bus: EventBus,
        val levelCheck: LevelCheck,
        val candies: CandySprites,
        val res: Ressources) : Loadable {

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

    override suspend fun load() {
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