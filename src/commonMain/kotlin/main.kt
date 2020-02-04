import com.soywiz.klock.seconds
import com.soywiz.klogger.Logger
import com.soywiz.korge.Korge
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.degrees
import com.soywiz.korma.interpolation.Easing
import j4k.candycrush.GameFieldRenderer
import j4k.candycrush.MoveTileObserver
import j4k.candycrush.TileMover
import j4k.candycrush.lib.SpriteBatch
import j4k.candycrush.model.GameField

val log = Logger("main")

suspend fun main() = Korge(width = 1280, height = 1024, bgcolor = Colors["#2b2b2b"], debug = true) {
    val minDegrees = (-16).degrees
    val maxDegrees = (+16).degrees

    val korgeBitmap = resourcesVfs["korge.png"].readBitmap()

    Logger.defaultLevel = Logger.Level.DEBUG

    val fieldData = """
                        |[A,B,C,D,E,B,D,A]
                        |[B,B,C,A,D,D,B,C]
                        |[A,C,B,E,E,B,D,C]
                        |[D,E,E,B,A,E,C,A]
                        |[E,D,A,E,E,C,D,B]
                        |[E,A,D,C,B,A,A,E]
                        """.trimMargin()

    val gameField = GameField.fromString(fieldData)

    val candies = SpriteBatch(spriteSize = 212,
            columns = 5,
            rows = 4,
            bitmap = resourcesVfs["candy_fruits.png"].readBitmap())

    val gameFieldRenderer = GameFieldRenderer(gameField, width.toInt(), height.toInt(), candies)
    addChild(gameFieldRenderer)
    val tileMover = TileMover(this, gameFieldRenderer, gameField, gameFieldRenderer.positionGrid)
    addComponent(MoveTileObserver(this, gameFieldRenderer.positionGrid, tileMover))

    val image = image(korgeBitmap) {
        rotation = maxDegrees
        anchor(.5, .5)
        scale(.2)
        position(1180, 80)
    }

    image.rotation(maxDegrees)

    while (true) {
        image.tween(image::rotation[minDegrees], time = 2.seconds, easing = Easing.EASE_IN_OUT)
        image.tween(image::rotation[maxDegrees], time = 2.seconds, easing = Easing.EASE_IN_OUT)
    }

}

