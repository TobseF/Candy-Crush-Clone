package j4k.candycrush.renderer

import com.soywiz.klock.milliseconds
import com.soywiz.klogger.Logger
import com.soywiz.korge.tween.hide
import com.soywiz.korge.view.Stage
import com.soywiz.korge.view.Text
import com.soywiz.korge.view.position
import com.soywiz.korge.view.text
import com.soywiz.korma.geom.Point
import com.soywiz.korma.interpolation.Easing
import j4k.candycrush.NewScoreEvent
import j4k.candycrush.lib.EventBus
import j4k.candycrush.lib.Resolution
import j4k.candycrush.lib.Ressources
import j4k.candycrush.math.PositionGrid
import j4k.candycrush.renderer.animation.AnimationSettings
import j4k.candycrush.renderer.animation.move
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch


/**
 * Counts and displays the current high score.
 */
class ScoringRenderer(val view: Stage,
        bus: EventBus,
        val resolution: Resolution,
        val positionGrid: PositionGrid,
        res: Ressources) {

    companion object {
        val log = Logger("ScoringRenderer")
    }

    private val scoreSize = 90
    private val multiplicatorSize = 120
    private val paddingTop = 65

    private val scoreText: Text
    private val multiplicatorText: Text
    private var score = 0
    private var hideMultiplicator: Job? = null

    private val hideScore = AnimationSettings(1100.milliseconds, Easing.EASE_IN)
    private val hideMultiplcator = AnimationSettings(1600.milliseconds, Easing.EASE_IN)

    private val font = res.fontCandy

    init {
        scoreText = view.text(score.toString(), textSize = scoreSize.toDouble(), font = font)
        multiplicatorText = view.text(score.toString(), textSize = multiplicatorSize.toDouble(), font = font) {
            position(resolution.width - width - 185, paddingTop + 70)
            alpha = 0.0
        }
        multiplicatorText.text = "x2"
        updateScorePosition()
        bus.register<NewScoreEvent> { onScore(it) }
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
            position(resolution.width - width - 130, paddingTop)
        }
    }

    private fun onScore(scoreEvent: NewScoreEvent) {
        score(scoreEvent.score)
        multiplicator(scoreEvent.multiplicator)
        val coordinates = positionGrid.getPosition(scoreEvent.pos)
        val scoreText = view.text(scoreEvent.score.toString(), textSize = scoreSize.toDouble(), font = font) {
            position(coordinates)
        }
        view.launch {
            launch {
                scoreText.hide(hideScore.time, hideScore.easing)
            }
            launch {
                scoreText.move(coordinates.add(Point(0, -60)), hideScore)
            }
        }.invokeOnCompletion {
            view.removeChild(scoreText)
        }
    }

    fun reset() {
        score = 0
        score(0)
    }

}