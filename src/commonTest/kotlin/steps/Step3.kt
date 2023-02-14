package steps

import j4k.candycrush.*
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.*
import kotlin.test.*

/**
 * You prepared the basic game model. Now it's time to implement some actions!
 * In this step you will add [GameMechanics.swapTiles] and [GameMechanics.removeTile].
 */
class Step3 {


    /**
     * ### Step 3.1
     *
     * **Test**: `swap Tiles`
     *
     * [GameMechanics.swapTiles] swaps the two tiles on the two given positions.
     */
    @Test
    fun swapTiles() {
        val field = GameField.fromString(
            """
                |[H, H, H, H]
                |[H, A, B, H]
                |[H, H, H, H]
                """.trimMargin()
        )

        val mechanics = GameMechanics(field)
        mechanics.swapTiles(Position(1, 1), Position(2, 1))

        assertEquals(
            """
                |[H, H, H, H]
                |[H, B, A, H]
                |[H, H, H, H]
                """.trimMargin(), field.toString()
        )
    }

    /**
     * ### Step 3.2
     *
     * **Test**: `remove Tiles`
     *
     * Remove a tile by setting a [Tile.Hole] with [GameMechanics.removeTile] at the given [Position].
     */
    @Test
    fun removeTiles() {
        val field = GameField.fromString(
            """
                |[A, A]
                |[A, A]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)
        mechanics.removeTile(Position(0, 0))
        mechanics.removeTile(Position(1, 1))
        assertEquals(
            """
                |[H, A]
                |[A, H]
                """.trimMargin(), field.toString()
        )
    }
}
