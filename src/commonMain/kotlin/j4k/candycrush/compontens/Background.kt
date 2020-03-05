package j4k.candycrush.compontens

import com.soywiz.korge.component.Component
import com.soywiz.korge.view.Stage
import com.soywiz.korge.view.image
import com.soywiz.korge.view.ninePatch
import com.soywiz.korge.view.position
import j4k.candycrush.lib.loadImage
import j4k.candycrush.lib.loadNinePatch

class Background(override val view: Stage) : Component {

    suspend fun load(): Background {
        view.image(loadImage("background_white.png"))

        return this
    }

    /**
     * Adds a transparent white box.
     * But this doesn't work on web.
     */
    private suspend fun addWhiteBox() {
        val bitmap = loadNinePatch("white_box.9.png")
        view.ninePatch(bitmap, 674.0, 1165.0) {
            position(68 - 10, 200 + 10)
        }
    }

}