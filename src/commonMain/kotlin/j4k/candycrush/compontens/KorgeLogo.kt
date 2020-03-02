package j4k.candycrush.compontens

import com.soywiz.klock.seconds
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korma.geom.degrees
import com.soywiz.korma.interpolation.Easing
import j4k.candycrush.lib.loadImage

/**
 * Displays a wiggling korge engine logo on the screen.
 */
class KorgeLogo(private val view: Stage) {

    private val minDegrees = (-16).degrees
    private val maxDegrees = (+16).degrees

    suspend fun addLogo() {
        val korgeBitmap = loadImage("korge.png")

        val image = view.image(korgeBitmap) {
            rotation = maxDegrees
            anchor(.5, .5)
            scale(.2)
            position(1180, 80)
        }

        while (true) {
            image.tween(image::rotation[minDegrees], time = 2.seconds, easing = Easing.EASE_IN_OUT)
            image.tween(image::rotation[maxDegrees], time = 2.seconds, easing = Easing.EASE_IN_OUT)
        }
    }


}