package j4k.candycrush.renderer

import com.soywiz.korim.bitmap.*
import j4k.candycrush.lib.*
import j4k.candycrush.model.*

/**
 * A [SpriteBatch] with images for all [Tile]s.
 */
open class CandySprites(
    val name: String = "",
    x: Int = 0,
    y: Int = 0,
    spriteSize: Int = 16,
    columns: Int,
    rows: Int,
    bitmap: Bitmap
) {

    private val sprites = SpriteBatch(x, y, spriteSize, columns, rows, bitmap)

    fun getTile(tile: Tile): BmpSlice {
        val mappedIndex: Int = tilesMap?.get(tile) ?: tile.index
        return sprites[mappedIndex]
    }

    override fun toString(): String {
        return "CandySprites(name='$name')"
    }

    var tilesMap: Map<Tile, Int>? = null
}
