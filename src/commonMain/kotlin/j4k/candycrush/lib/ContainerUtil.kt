package j4k.candycrush.lib

import com.soywiz.korge.view.Container
import com.soywiz.korge.view.position
import com.soywiz.korge.view.text
import com.soywiz.korim.font.BitmapFont
import com.soywiz.korma.geom.Point

fun Container.textCentered(text: String, textSize: Double = 16.0, font: BitmapFont, center: Point) {
    this.text(text, font = font, textSize = textSize) {
        val textBounds = this.getLocalBounds()
        position(center.x - (textBounds.width / 2), center.y - (textBounds.height / 2))
    }
}