import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.korge.Korge
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.tween
import com.soywiz.korge.tween.tweenAsync
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.degrees
import com.soywiz.korma.interpolation.Easing
import j4k.candycrush.GameFieldRenderer
import j4k.candycrush.MoveTileObserver
import j4k.candycrush.TileMover
import j4k.candycrush.model.GameField

suspend fun main() = Korge(width = 1280, height = 1424, bgcolor = Colors["#2b2b2b"]) {
    val minDegrees = (-16).degrees
    val maxDegrees = (+16).degrees

    val korgeBitmap = resourcesVfs["korge.png"].readBitmap()
    val gameField = GameField(8, 6)

    val testBitmap = resourcesVfs["test_stone.png"].readBitmap()
    val gameFieldRenderer = GameFieldRenderer(gameField, width.toInt(), height.toInt(), testBitmap)
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


    image.tweenAsync(image::globalX[20], time = 6.seconds, easing = Easing.EASE_IN_OUT)
    image.tweenAsync(image::globalY[20], time = 6.seconds, easing = Easing.EASE_IN_OUT)


    while (true) {
        image.tween(image::rotation[minDegrees], time = 50.milliseconds, easing = Easing.EASE_IN_OUT)
        image.tween(image::rotation[maxDegrees], time = 50.milliseconds, easing = Easing.EASE_IN_OUT)
        tileMover.updateAsync()
    }

}

