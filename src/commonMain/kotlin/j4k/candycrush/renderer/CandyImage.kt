package j4k.candycrush.renderer

import com.soywiz.korge.view.Image
import com.soywiz.korge.view.anchor
import com.soywiz.korge.view.position
import com.soywiz.korge.view.size
import com.soywiz.korim.bitmap.BmpSlice
import com.soywiz.korma.geom.Point
import j4k.candycrush.model.Tile

class CandyImage(tileSize: Number,
                 position: Point,
                 val candy: BmpSlice,
                 val debugLetter: BmpSlice,
                 val tile: Tile) : Image(candy) {
    init {
        anchor(0.5, 0.5)
        size(tileSize, tileSize)
        position(position)
    }

    fun debug() {
        bitmap = debugLetter
    }

    fun disableDebug() {
        bitmap = candy
    }

    override fun toString(): String {
        return "\n\n $tile: ($x,$y)"
    }
}