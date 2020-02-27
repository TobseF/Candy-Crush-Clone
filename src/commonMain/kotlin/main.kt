import com.soywiz.klogger.Logger
import com.soywiz.korev.Key
import com.soywiz.korge.Korge
import com.soywiz.korge.input.onClick
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korim.color.Colors
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korio.file.std.resourcesVfs
import j4k.candycrush.*
import j4k.candycrush.config.fruits
import j4k.candycrush.config.testTiles
import j4k.candycrush.model.Level

val log = Logger("main")

const val debug = false

const val useTestTiles = false

val resolution = Resolution(width = 1280, height = 1024)

val playBackgroundMusic = false


val reserveData = """
            |[E,C,B,A,D,D,C,C]
            |[D,A,E,C,B,E,D,B]
            """.trimMargin()

val levelData = """
            |[A,B,C,D,E,B,D,A]
            |[B,B,C,A,D,D,B,C]
            |[A,C,B,E,E,B,D,C]
            |[D,E,E,B,A,E,C,A]
            |[E,D,A,E,C,C,D,B]
            |[E,A,D,C,B,A,A,E]
            """.trimMargin()


suspend fun main() = Korge(width = resolution.width,
        height = resolution.height,
        bgcolor = Colors["#2b2b2b"],
        debug = debug) {

    Logger.defaultLevel = Logger.Level.DEBUG

    val log = Logger("main")

    val level1 = Level(levelData, reserveData)
    val gameMechanics = GameMechanics(level1.field)

    JukeBox(this).apply {
        activated = playBackgroundMusic
        load()
        play()
    }
    val soundMachine = SoundMachine(this).apply { load() }

    val fieldRenderer = GameFieldRenderer(level1.field, resolution.width, resolution.height, fruits(), testTiles())
    addChild(fieldRenderer)

    val candyFont = resourcesVfs["fonts/candy.fnt"].readBitmapFont()

    val scoringRenderer = ScoringRenderer(this, resolution, fieldRenderer.positionGrid, candyFont)
    val scoring = Scoring(scoringRenderer)
    val animator = TileAnimator(this, fieldRenderer)

    val gameFlow = GameFlow(level1, gameMechanics, animator, soundMachine, scoring)
    addComponent(MoveTileObserver(this, fieldRenderer.positionGrid, gameFlow))

    onClick { } // Needed to activate debugging

    onKeyDown {
        if (it.key == Key.P) {
            log.debug { "Print Field Data" }
            println(level1.field)
        }
        if (it.key == Key.D) {
            log.debug { "Show Debug Letters" }
            fieldRenderer.toggleDebug()
        }
        if (it.key == Key.I) {
            log.debug { "Print Image Data" }
            println(fieldRenderer)
            println("Renderer data is equal to field data: " + (fieldRenderer.toString() == level1.field.toString()))
        }
        if (it.key == Key.S) {
            log.debug { "Shuffle & Reset" }
            scoring.reset()
            scoringRenderer.reset()
            gameFlow.reset()
            level1.field.shuffle()
            fieldRenderer.updateImagesFromField()
            gameFlow.checkNewField()
        }
    }
}


class Resolution(val width: Int, val height: Int)
