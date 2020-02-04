package j4k.candycrush.lib

import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.bitmap.Bitmaps
import com.soywiz.korim.bitmap.BmpSlice
import com.soywiz.korim.bitmap.sliceWithSize
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import j4k.candycrush.math.PositionGrid
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

/**
 * A sprite batch slices a big image into several sub-images.
 */
class SpriteBatch(x: Int = 0,
        y: Int = 0,
        spriteSize: Int = 16,
        columns: Int,
        rows: Int,
        var image: String = "",
        private val bitmap: Bitmap? = null) {

    private val defaultSprite = Bitmaps.transparent
    private var sprites: MutableList<BmpSlice> = mutableListOf(defaultSprite)

    private val grid = PositionGrid(x = x, y = y, columns = columns, rows = rows, size = spriteSize)

    operator fun get(spriteIndex: Int) = sprites[spriteIndex]

    init {
        CoroutineScope(Dispatchers.Default).launch {
            prepareElement()
        }
    }

    private suspend fun prepareElement() {
        val resourceBitmap: Bitmap = getBitmap(bitmap)
        repeat(grid.rows) { row ->
            repeat(grid.columns) { column ->
                val pos = grid.getPosition(column, row)
                addSpriteToList(resourceBitmap.sliceWithSize(pos.x.toInt(), pos.y.toInt(), grid.size, grid.size))
            }

        }
    }

    private suspend fun getBitmap(bitmap: Bitmap?): Bitmap {
        return if (bitmap is Bitmap) {
            bitmap
        } else {
            resourcesVfs[image].readBitmap()
        }
    }

    private fun addSpriteToList(sprite: BmpSlice) {
        sprites.add(sprite)
        if (sprites.first() == defaultSprite) {
            sprites.removeAt(0)
        }
    }

}
