import com.soywiz.klogger.Logger
import com.soywiz.korge.Korge
import com.soywiz.korge.component.Component
import com.soywiz.korge.input.onClick
import com.soywiz.korgw.GameWindow
import com.soywiz.korim.color.Colors
import com.soywiz.korinject.AsyncInjector
import j4k.candycrush.*
import j4k.candycrush.audio.JukeBox
import j4k.candycrush.audio.SoundMachine
import j4k.candycrush.compontens.Background
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

val backgroundColor = Colors.DIMGRAY

val level = LevelFactory().createLevel()

suspend fun main() = Korge(
        virtualHeight = virtualResolution.height, virtualWidth = virtualResolution.width,
        width = windowResolution.width, height = windowResolution.height, bgcolor = backgroundColor, debug = debug,
        quality = GameWindow.Quality.QUALITY) {

    Logger.defaultLevel = Logger.Level.DEBUG
    val candies = donuts()

    val injector = AsyncInjector().also {
        it.mapInstance(this)
        it.mapInstance(EventBus(this))
        it.mapInstance(candies)
        it.mapInstance(testTiles())
        it.mapInstance(level)
        it.mapInstance(views)
        it.mapInstance(level.field)
        it.mapInstance(virtualResolution)
    }

    GameMechanics(injector)
    Ressources(injector)

    JukeBox(injector) { activated = playBackgroundMusic }.play()

    addComponent(Background(injector))
    SoundMachine(injector)

    addChild(GameFieldRenderer(injector))

    LevelCheck(injector)
    LevelCheckRenderer(injector)
    Scoring(injector)

    ScoringRenderer(injector)

    TileAnimator(injector)

    GameFlow(injector)
    addComponent(MoveTileObserver(injector) as Component)
    addChild(GameOverComponent(injector))

    onClick { } // Needed to activate debugging with F7

    KeyBindings(injector)
}
