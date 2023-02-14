package steps

import j4k.candycrush.*
import j4k.candycrush.math.*
import j4k.candycrush.model.*
import kotlin.test.*

/**
 * ### Bonus Step
 *
 * The game seems to be finished. But can you also delete more than three stones in a row at once?
 * If stones are falling down, it's also possible that six or even more tiles get connected at once!
 */
class Step5 {


    /**
     * ### Step 5.1
     *
     * **Test**: `get horizontal surroundings with six Tiles`
     *
     * Make sure that [GameMechanics.getHorizontalSurroundings] can also find 4,5,6 or even more connected tiles at once!
     */
    @Test
    fun getHorizontalSurroundingsWithSixTiles() {
        val field = GameField.fromString(
            """
                |[H, A, A, A, A, A, A, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        val horizontal: List<TileCell> = listOf(1, 2, 3, 4, 5, 6).map { field.getTileCell(column = it) }

        assertEquals(horizontal, mechanics.getHorizontalSurroundings(PositionGrid.Position(column = 1)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(PositionGrid.Position(column = 2)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(PositionGrid.Position(column = 3)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(PositionGrid.Position(column = 4)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(PositionGrid.Position(column = 5)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(PositionGrid.Position(column = 6)))
    }

    /**
     * ### Step 5.2
     *
     * **Test**: `get vertical surroundings with six Tiles`
     *
     * Make sure that [GameMechanics.getVerticalSurroundings] can also find 4,5,6 or even more connected tiles at once!
     */
    @Test
    fun getVerticalSurroundingsWithSixTiles() {
        val field = GameField.fromString(
            """
                |[H]
                |[A]
                |[A]
                |[A]
                |[A]
                |[A]
                |[A]
                |[H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        val vertical: List<TileCell> = listOf(1, 2, 3, 4, 5, 6).map { field.getTileCell(row = it) }

        assertEquals(vertical, mechanics.getVerticalSurroundings(PositionGrid.Position(row = 1)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(PositionGrid.Position(row = 2)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(PositionGrid.Position(row = 3)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(PositionGrid.Position(row = 4)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(PositionGrid.Position(row = 5)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(PositionGrid.Position(row = 6)))
    }
}
