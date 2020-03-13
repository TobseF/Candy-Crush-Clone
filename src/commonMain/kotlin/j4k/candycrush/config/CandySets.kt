package j4k.candycrush.config

import com.soywiz.korim.bitmap.Bitmap
import j4k.candycrush.lib.SpriteBatch
import j4k.candycrush.lib.loadImage
import j4k.candycrush.model.Tile
import j4k.candycrush.renderer.CandySprites

/**
 * [SpriteBatch] with fruit candies
 */
suspend fun fruits(): CandySprites {
    val candies = CandySprites(
            spriteSize = 212, columns = 5, rows = 4, bitmap = loadImage("candy_fruits.png"))
    candies.tilesMap = mapOf(Tile.A to 0, Tile.B to 1, Tile.C to 2, Tile.D to 6, Tile.E to 10)
    return candies
}

/**
 * [SpriteBatch] with fruit candies
 */
suspend fun donuts(): CandySprites {
    val candies = CandySprites(
            spriteSize = 212, columns = 5, rows = 4, bitmap = loadImage("candy_donuts.png"))
    candies.tilesMap = mapOf(Tile.A to 14, Tile.B to 8, Tile.C to 5, Tile.D to 10, Tile.E to 16)
    return candies
}

/**
 * [SpriteBatch] with the first letters of all [Tile]s. Useful for debugging.
 */
suspend fun testTiles(): TestSprites {
    return TestSprites(spriteSize = 212, columns = 4, rows = 2, bitmap = loadImage("test_fruits.png"))
}

class TestSprites(x: Int = 0, y: Int = 0, spriteSize: Int, columns: Int, rows: Int, bitmap: Bitmap) : CandySprites(
        x, y, spriteSize, columns, rows, bitmap)