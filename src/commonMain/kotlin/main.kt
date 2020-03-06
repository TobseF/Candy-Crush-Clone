import com.soywiz.klogger.Logger
import com.soywiz.korev.Key
import com.soywiz.korge.Korge
import com.soywiz.korge.input.onClick
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korim.color.Colors
import j4k.candycrush.*
import j4k.candycrush.audio.JukeBox
import j4k.candycrush.audio.SoundMachine
import j4k.candycrush.config.donuts
import j4k.candycrush.config.testTiles
import j4k.candycrush.input.MoveTileObserver
import j4k.candycrush.level.LevelFactory
import j4k.candycrush.lib.EventBus
import j4k.candycrush.lib.Resolution
import j4k.candycrush.lib.Ressources
import j4k.candycrush.renderer.GameFieldRenderer
import j4k.candycrush.renderer.LevelCheckRenderer
import j4k.candycrush.renderer.ScoringRenderer
import j4k.candycrush.renderer.animation.TileAnimator


/**
 *  Main entry point for the game. To start it, run the gradle tasks:
 * `runJVM` - to run it with JAVA.
 * `runJS` - to run it as HTML Web App.
 * `runAndroidDebug` - to install and start it on an Android device.
 */

const val debug = false
const val playBackgroundMusic = false

/**
 * Virtual size which gets projected onto the [windowResolution]
 */
val virtualResolution = Resolution(width = 810, height = 1440)

/**
 * Actual window size
 */
val windowResolution = Resolution(width = 540, height = 960)

val backgroundColor = Colors["#2b2b2b"]

val level = LevelFactory().createLevel(1)

suspend fun main() = Korge(
        virtualHeight = virtualResolution.height, virtualWidth = virtualResolution.width,
        width = windowResolution.width, height = windowResolution.height, bgcolor = backgroundColor, debug = debug) {

    Logger.defaultLevel = Logger.Level.DEBUG

    val log = Logger("main")
    val candies = donuts()
    val bus = EventBus(this)

    val res = Ressources().load()

    val gameMechanics = GameMechanics(level.field)

    JukeBox(this).apply {
        activated = playBackgroundMusic
        load()
        play()
    }
    val soundMachine = SoundMachine(this).apply { load() }

    val fieldRenderer = GameFieldRenderer(level.field, virtualResolution, candies, testTiles())
    addChild(fieldRenderer)

    val levelCheck = LevelCheck(level, bus)
    val checkRenderer = LevelCheckRenderer(this, bus, levelCheck, candies, res).apply { load() }
    Scoring(bus)

    val scoringRenderer = ScoringRenderer(this, bus, virtualResolution, fieldRenderer.positionGrid, res)

    val animator = TileAnimator(this, fieldRenderer)

    val gameFlow = GameFlow(level, bus, gameMechanics, animator, soundMachine)
    addComponent(MoveTileObserver(this, bus, fieldRenderer.positionGrid))
    addChild(GameOverComponent(bus, res, virtualResolution))

    onClick { } // Needed to activate debugging with F7

    fun resetState() {
        animator.reset()
        scoringRenderer.reset()
        gameFlow.reset()
        levelCheck.reset()
        gameFlow.checkNewField()
        checkRenderer.update()
    }

    fun shuffe() {
        log.debug { "Shuffle & Reset" }
        resetState()
        level.field.shuffle()
        fieldRenderer.updateImagesFromField()
    }

    fun reloadLevel() {
        log.debug { "Reload level" }
        resetState()
        level.reset()
        fieldRenderer.updateImagesFromField()
    }

    bus.register<ResetGameEvent> { reloadLevel() }
    bus.register<NextLevelEvent> { shuffe() }

    onKeyDown {
        if (it.key == Key.P) {
            log.debug { "Print Field Data" }
            println(level.field)
        }
        if (it.key == Key.D) {
            log.debug { "Show Debug Letters" }
            fieldRenderer.toggleDebug()
        }
        if (it.key == Key.S) {
            shuffe()
        }
        if (it.key == Key.R) {
            reloadLevel()
        }
        if (it.key == Key.I) {
            log.debug { "Print Image Data" }
            println(fieldRenderer)
            println("Renderer data is equal to field data: " + (fieldRenderer.toString() == level.field.toString()))
        }
    }
}
