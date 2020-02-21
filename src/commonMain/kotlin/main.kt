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
import j4k.candycrush.model.GameField

val log = Logger("main")

const val debug = false

const val useTestTiles = false

val resolution = Resolution(width = 1280, height = 1024)

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

    val gameField = GameField.fromString(levelData)
    val gameMechanics = GameMechanics(gameField)

    val fieldRenderer = GameFieldRenderer(gameField, resolution.width, resolution.height, getTilesSheet())
    addChild(fieldRenderer)

    val candyFont = resourcesVfs["fonts/candy.fnt"].readBitmapFont()

    val scoringRenderer = ScoringRenderer(this, resolution, fieldRenderer.positionGrid, candyFont)
    val scoring = Scoring(scoringRenderer)
    val animator = TileAnimator(this, fieldRenderer)

    val gameFlow = GameFlow(gameField, gameMechanics, animator, scoring)
    addComponent(MoveTileObserver(this, fieldRenderer.positionGrid, gameFlow))

    onClick { } // Needed to activate debugging

    onKeyDown {
        if (it.key == Key.P) {
            log.debug { "Print Field Data" }
            println(gameField)
        }
        if (it.key == Key.I) {
            log.debug { "Print Image Data" }
            println(fieldRenderer)
            println("Renderer data is equal to field data: " + (fieldRenderer.toString() == gameField.toString()))
        }
        if (it.key == Key.S) {
            log.debug { "Shuffle & Reset" }
            scoring.reset()
            scoringRenderer.reset()
            gameFlow.reset()
            gameField.shuffle()
            fieldRenderer.updateImagesFromField()
            gameFlow.checkNewField()
        }
    }
}

suspend fun getTilesSheet() = if (useTestTiles) testTiles() else fruits()

class Resolution(val width: Int, val height: Int)
