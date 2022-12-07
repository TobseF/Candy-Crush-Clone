import com.soywiz.klogger.*
import com.soywiz.korge.*
import com.soywiz.korge.component.*
import com.soywiz.korge.input.*
import com.soywiz.korge.view.*
import com.soywiz.korgw.*
import com.soywiz.korim.color.*
import com.soywiz.korinject.*
import j4k.candycrush.*
import j4k.candycrush.audio.*
import j4k.candycrush.compontens.*
import j4k.candycrush.config.*
import j4k.candycrush.input.*
import j4k.candycrush.level.*
import j4k.candycrush.lib.*
import j4k.candycrush.renderer.*
import j4k.candycrush.renderer.animation.*


/**
 *  Main entry point for the game. To start it, run the gradle tasks:
 * `runJVM` - to run it with JAVA.
 * `runJS` - to run it as HTML Web App.
 * `runAndroidDebug` - to install and start it on an Android device.
 */

const val debug = false
const val useTestSprites = false

const val playSounds = true

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

val logLevel = Logger.Level.DEBUG

suspend fun main() = Korge(
    title = "Candy Crush",
    virtualHeight = virtualResolution.height, virtualWidth = virtualResolution.width,
    width = windowResolution.width, height = windowResolution.height, bgcolor = backgroundColor, debug = debug,
    quality = GameWindow.Quality.QUALITY
) {
    Logger.defaultLevel = logLevel

    val candies: CandySprites = donuts() // try: fruits()

    val injector = AsyncInjector().also {
        it.mapInstance(this)
        it.mapInstance(this as View)
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

    JukeBox(injector)

    addChild(Background(injector))
    SoundMachine(injector) {
        enabled = playSounds
    }
    addChild(Settings(injector))

    addChild(GameFieldRenderer(injector).apply {
        if (useTestSprites) toggleDebug()
    })

    LevelCheck(injector)
    LevelCheckRenderer(injector)
    Scoring(injector)

    ScoringRenderer(injector)

    TileAnimator(injector)

    GameFlow(injector)
    addComponent(MoveTileObserver(injector) as Component)
    addChild(GameOverComponent(injector))

    onClick { } // Needed to activate debugging with F7

    GameActions(injector)
    KeyBindings(injector)
}
