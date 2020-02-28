import com.soywiz.klogger.Logger
import com.soywiz.korev.Key
import com.soywiz.korge.Korge
import com.soywiz.korge.input.onClick
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korim.color.Colors
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korio.file.std.resourcesVfs
import j4k.candycrush.GameFlow
import j4k.candycrush.GameMechanics
import j4k.candycrush.Scoring
import j4k.candycrush.audio.JukeBox
import j4k.candycrush.audio.SoundMachine
import j4k.candycrush.config.fruits
import j4k.candycrush.config.testTiles
import j4k.candycrush.input.MoveTileObserver
import j4k.candycrush.level.LevelFactory
import j4k.candycrush.lib.Resolution
import j4k.candycrush.renderer.GameFieldRenderer
import j4k.candycrush.renderer.ScoringRenderer
import j4k.candycrush.renderer.animation.TileAnimator


/**
 *  Main entry point for the game. To start it, run the gradle tasks:
 * `runJVM` - to run it with JAVA.
 * `runJS` - to run it as HTML Web App.
 * `runAndroidDebug` - to install and start it on an Android device.
 */

const val debug = false

val resolution = Resolution(width = 1280, height = 1024)

val playBackgroundMusic = false

val level = LevelFactory().createLevel(1)

suspend fun main() = Korge(width = resolution.width,
        height = resolution.height,
        bgcolor = Colors["#2b2b2b"],
        debug = debug) {

    Logger.defaultLevel = Logger.Level.DEBUG

    val log = Logger("main")

    val gameMechanics = GameMechanics(level.field)

    JukeBox(this).apply {
        activated = playBackgroundMusic
        load()
        play()
    }
    val soundMachine = SoundMachine(this).apply { load() }

    val fieldRenderer = GameFieldRenderer(level.field, resolution, fruits(), testTiles())
    addChild(fieldRenderer)

    val candyFont = resourcesVfs["fonts/candy.fnt"].readBitmapFont()

    val scoringRenderer = ScoringRenderer(this, resolution, fieldRenderer.positionGrid, candyFont)
    val scoring = Scoring(scoringRenderer)
    val animator = TileAnimator(this, fieldRenderer)

    val gameFlow = GameFlow(level, gameMechanics, animator, soundMachine, scoring)
    addComponent(MoveTileObserver(this, fieldRenderer.positionGrid, gameFlow))

    onClick { } // Needed to activate debugging with F7

    onKeyDown {
        if (it.key == Key.P) {
            log.debug { "Print Field Data" }
            println(level.field)
        }
        if (it.key == Key.D) {
            log.debug { "Show Debug Letters" }
            fieldRenderer.toggleDebug()
        }
        if (it.key == Key.I) {
            log.debug { "Print Image Data" }
            println(fieldRenderer)
            println("Renderer data is equal to field data: " + (fieldRenderer.toString() == level.field.toString()))
        }
        if (it.key == Key.S) {
            log.debug { "Shuffle & Reset" }
            scoringRenderer.reset()
            gameFlow.reset()
            level.field.shuffle()
            fieldRenderer.updateImagesFromField()
            gameFlow.checkNewField()
        }
    }
}
