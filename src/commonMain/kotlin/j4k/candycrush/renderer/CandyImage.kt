package j4k.candycrush.renderer

import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.*
import com.soywiz.korma.geom.*
import j4k.candycrush.model.*

class CandyImage(
    tileSize: Double,
    position: Point,
    private val candy: BmpSlice,
    private val debugLetter: BmpSlice,
    val tile: Tile
) : BaseImage(candy) {
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
