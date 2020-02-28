package j4k.candycrush.renderer

import com.soywiz.korge.view.*
import com.soywiz.korim.font.BitmapFont
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korio.file.std.resourcesVfs
import j4k.candycrush.LevelCheck
import j4k.candycrush.ScoreListener
import j4k.candycrush.lib.Loadable
import j4k.candycrush.math.PositionGrid

class LevelCheckRenderer(override val stage: Stage, val levelCheck: LevelCheck, val candies: CandySprites) : Loadable,
        ScoreListener {

    private val level = levelCheck.level
    private var moves: Text? = null
    private lateinit var font: BitmapFont

    override suspend fun load() {
        font = resourcesVfs["fonts/candy-small.fnt"].readBitmapFont()
        level.tileObjectives.forEachIndexed { index, objective ->
            val x = 480 + (180 * index)
            val y = 35
            stage.image(candies.getTile(objective.tile)) {
                position(x, y)
                height = 64.0
                width = 64.0
            }
            stage.text(text = "12", textSize = 64.0, font = font) {
                position(x + 75, y)

            }
        }
        updateMoves()
    }

    private fun updateMoves() {
        if (level.maxMoves != null) {
            val newText = "Moves ${levelCheck.moves}/${level.maxMoves}"
            val moves = this.moves
            if (moves == null) {
                this.moves = stage.text(text = newText, textSize = 64.0, font = font) {
                    position(60, 35)
                }
            } else {
                moves.text = newText
            }
        }
    }

    override fun onScore(score: Int, multiplicator: Int, pos: PositionGrid.Position) {
        updateMoves()
    }
}