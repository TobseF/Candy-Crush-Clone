package j4k.candycrush

import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.bitmap.BmpSlice
import j4k.candycrush.lib.SpriteBatch

class CandySprites(x: Int = 0, y: Int = 0, spriteSize: Int = 16, columns: Int, rows: Int, bitmap: Bitmap) {

    private val sprites = SpriteBatch(x, y, spriteSize, columns, rows, bitmap)

    fun getTile(index: Int): BmpSlice {
        val mappedIndex = tilesMap?.get(index) ?: index
        return sprites[mappedIndex]
    }

    var tilesMap: Map<Int, Int>? = null

}