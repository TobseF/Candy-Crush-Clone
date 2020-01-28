import com.soywiz.klock.seconds
import com.soywiz.korge.Korge
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.degrees
import com.soywiz.korma.interpolation.Easing
import j4k.candycrush.DragListener
import j4k.candycrush.GameFieldRenderer
import j4k.candycrush.model.GameField

suspend fun main() = Korge(width = 1280, height = 1024, bgcolor = Colors["#2b2b2b"]) {
    val minDegrees = (-16).degrees
    val maxDegrees = (+16).degrees

    val korgeBitmap = resourcesVfs["korge.png"].readBitmap()
    val gameField = GameField(8, 6)

    val testBitmap = resourcesVfs["test_stone.png"].readBitmap()
    addChild(GameFieldRenderer(gameField, width.toInt(), height.toInt(), testBitmap))


    addComponent(DragListener(this))

    val image = image(korgeBitmap) {
        rotation = maxDegrees
        anchor(.5, .5)
        scale(.2)
        position(1180, 80)
    }
    image.rotation(maxDegrees)

    while (true) {
        image.tween(image::rotation[minDegrees], time = 1.seconds, easing = Easing.EASE_IN_OUT)
        image.tween(image::rotation[maxDegrees], time = 1.seconds, easing = Easing.EASE_IN_OUT)
    }

}