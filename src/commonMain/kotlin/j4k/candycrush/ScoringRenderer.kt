package j4k.candycrush

import Resolution
import com.soywiz.klock.milliseconds
import com.soywiz.klogger.Logger
import com.soywiz.korge.tween.hide
import com.soywiz.korge.view.Stage
import com.soywiz.korge.view.Text
import com.soywiz.korge.view.position
import com.soywiz.korge.view.text
import com.soywiz.korim.font.BitmapFont
import com.soywiz.korma.geom.Point
import com.soywiz.korma.interpolation.Easing
import j4k.candycrush.math.PositionGrid
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch

interface ScoreListener {
    fun onScore(score: Int, multiplicator: Int = 1, pos: PositionGrid.Position)
}

class ScoringRenderer(val view: Stage,
        val resolution: Resolution,
        val positionGrid: PositionGrid,
        val candyFont: BitmapFont) : ScoreListener {

    companion object {
        val log = Logger("ScoringRenderer")
    }

    private val scoreText: Text
    private val multiplicatorText: Text
    private var score = 0
    private var hideMultiplicator: Job? = null

    private val hideScore = AnimationSettings(1100.milliseconds, Easing.EASE_IN)
    private val hideMultiplcator = AnimationSettings(1600.milliseconds, Easing.EASE_IN)

    init {
        scoreText = view.text(score.toString(), textSize = 120.0, font = candyFont)
        multiplicatorText = view.text(score.toString(), textSize = 150.0, font = candyFont) {
            position(resolution.width - width - 550, 15)
            alpha = 0.0
        }
        multiplicatorText.text = "x2"
        updateScorePosition()
    }


    private fun score(score: Int) {
        log.debug { "New score: $score" }
        this.score += score
        scoreText.text = "" + this.score
        updateScorePosition()
    }

    private fun multiplicator(multiplicator: Int) {
        if (multiplicator > 1) {
            multiplicatorText.apply {
                text = "x$multiplicator"
                alpha = 1.0
            }
            hideMultiplicator?.cancel()
            hideMultiplicator = view.launch {
                multiplicatorText.hide(hideMultiplcator.time, hideMultiplcator.easing)
            }
        }
    }

    private fun updateScorePosition() {
        scoreText.apply {
            position(resolution.width - width - 160, 32)
        }
    }

    override fun onScore(score: Int, multiplicator: Int, pos: PositionGrid.Position) {
        score(score)
        multiplicator(multiplicator)
        val coordinates = positionGrid.getPosition(pos)
        val text = view.text(score.toString(), textSize = 120.0, font = candyFont) {
            position(coordinates)
        }
        view.launch {
            launch {
                text.hide(hideScore.time, hideScore.easing)
            }
            launch {
                text.move(coordinates.add(Point(0, -60)), hideScore)
            }
        }.invokeOnCompletion {
            view.removeChild(text)
        }
    }

    fun reset() {
        score = 0
        score(0)
    }

}