package j4k.candycrush.config

import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import j4k.candycrush.lib.SpriteBatch
import j4k.candycrush.model.Tile
import j4k.candycrush.renderer.CandySprites

/**
 * [SpriteBatch] with fruit candies
 */
suspend fun fruits(): CandySprites {
    val candies = CandySprites(spriteSize = 212,
            columns = 5,
            rows = 4,
            bitmap = resourcesVfs["candy_fruits.png"].readBitmap())
    candies.tilesMap = mapOf(Tile.A to 0, Tile.B to 1, Tile.C to 2, Tile.D to 6, Tile.E to 10)
    return candies
}

/**
 * [SpriteBatch] with the first letters of all [Tile]s. Useful for debugging.
 */
suspend fun testTiles(): CandySprites {
    return CandySprites(spriteSize = 212, columns = 4, rows = 2, bitmap = resourcesVfs["test_fruits.png"].readBitmap())
}