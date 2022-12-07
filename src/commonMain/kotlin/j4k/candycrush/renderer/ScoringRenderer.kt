package j4k.candycrush.renderer

import com.soywiz.klock.*
import com.soywiz.klogger.*
import com.soywiz.korge.animate.*
import com.soywiz.korge.view.*
import com.soywiz.korinject.*
import com.soywiz.korma.interpolation.*
import j4k.candycrush.*
import j4k.candycrush.lib.*
import j4k.candycrush.math.*
import j4k.candycrush.renderer.animation.*
import kotlinx.coroutines.*


/**
 * Counts and displays the current high score.
 */
class ScoringRenderer(
    private val view: Stage,
    bus: EventBus,
    private val resolution: Resolution,
    private val positionGrid: PositionGrid,
    res: Ressources
) {
    private val log = Logger<ScoringRenderer>()

    companion object {
        suspend operator fun invoke(injector: AsyncInjector) {
            injector.mapSingleton {
                ScoringRenderer(get(), get(), get(), get(), get())
            }
        }
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
            position(resolution.width - width - 185, paddingTop + 70.0)
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
                view.animate {
                    hide(multiplicatorText, hideMultiplcator.time, hideMultiplcator.easing)
                }
            }
        }
    }

    private fun updateScorePosition() {
        scoreText.apply {
            position(resolution.width - width - 130, paddingTop.toDouble())
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
            view.animate(parallel = true, defaultTime = hideScore.time, defaultEasing = hideScore.easing) {
                hide(scoreText)
                moveBy(scoreText, y = -60)
            }.onComplete {
                view.removeChild(scoreText)
            }
        }
    }

    fun reset() {
        score = 0
        score(0)
    }

}
