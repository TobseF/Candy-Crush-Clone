package j4k.candycrush.lib

import com.soywiz.korge.view.*
import com.soywiz.korim.font.*
import com.soywiz.korma.geom.*

fun Container.textCentered(text: String, textSize: Double = 16.0, font: BitmapFont, center: Point) {
    this.text(text, font = font, textSize = textSize) {
        val textBounds = this.getLocalBounds(Rectangle())
        position(center.x - (textBounds.width / 2), center.y - (textBounds.height / 2))
    }
}
