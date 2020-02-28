package j4k.candycrush.renderer

import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.bitmap.BmpSlice
import j4k.candycrush.lib.SpriteBatch
import j4k.candycrush.model.Tile

/**
 * A [SpriteBatch] with images for all [Tile]s.
 */
class CandySprites(x: Int = 0, y: Int = 0, spriteSize: Int = 16, columns: Int, rows: Int, bitmap: Bitmap) {

    private val sprites = SpriteBatch(x, y, spriteSize, columns, rows, bitmap)

    fun getTile(tile: Tile): BmpSlice {
        val mappedIndex: Int = tilesMap?.get(tile) ?: tile.index
        return sprites[mappedIndex]
    }

    var tilesMap: Map<Tile, Int>? = null

}