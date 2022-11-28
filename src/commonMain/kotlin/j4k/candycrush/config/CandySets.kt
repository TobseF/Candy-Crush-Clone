package j4k.candycrush.config

import com.soywiz.korim.bitmap.*
import j4k.candycrush.lib.*
import j4k.candycrush.model.*
import j4k.candycrush.renderer.*

/**
 * [SpriteBatch] with fruit candies
 */
suspend fun fruits(): CandySprites {
    return CandySprites(
        name = "fruits",
        spriteSize = 212, columns = 5, rows = 4, bitmap = loadImage("images/candy_fruits.png")
    ).apply {
        tilesMap = mapOf(Tile.A to 0, Tile.B to 1, Tile.C to 2, Tile.D to 6, Tile.E to 10)
    }
}

/**
 * [SpriteBatch] with fruit candies
 */
suspend fun donuts(): CandySprites {
    return CandySprites(
        name = "donuts",
        spriteSize = 212, columns = 5, rows = 4, bitmap = loadImage("images/candy_donuts.png")
    ).apply {
        tilesMap = mapOf(Tile.A to 14, Tile.B to 8, Tile.C to 5, Tile.D to 10, Tile.E to 16)
    }
}

/**
 * [SpriteBatch] with the first letters of all [Tile]s. Useful for debugging.
 */
suspend fun testTiles(): TestSprites {
    return TestSprites(spriteSize = 212, columns = 4, rows = 2, bitmap = loadImage("images/test_fruits.png"))
}

class TestSprites(x: Int = 0, y: Int = 0, spriteSize: Int, columns: Int, rows: Int, bitmap: Bitmap) : CandySprites(
    "test-sprites (A-D)",
    x, y, spriteSize, columns, rows, bitmap
)
