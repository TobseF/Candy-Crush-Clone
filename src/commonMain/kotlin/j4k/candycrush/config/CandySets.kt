package j4k.candycrush.config

import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs
import j4k.candycrush.CandySprites

suspend fun fruits(): CandySprites {
    val candies = CandySprites(spriteSize = 212,
            columns = 5,
            rows = 4,
            bitmap = resourcesVfs["candy_fruits.png"].readBitmap())
    candies.tilesMap = mapOf(0 to 0, 1 to 1, 2 to 2, 3 to 6, 4 to 10)
    return candies
}

suspend fun testTiles(): CandySprites {
    return CandySprites(spriteSize = 212, columns = 4, rows = 2, bitmap = resourcesVfs["test_fruits.png"].readBitmap())
}