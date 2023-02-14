package steps

import j4k.candycrush.*
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.*
import kotlin.test.*

/**
 * Swapping tiles is only allowed if this creates a row of at least three equal [Tile]s.
 * In order to recognize these we have to implement the game logic of [GameMechanics.getHorizontalSurroundings] and the vertical
 * version [GameMechanics.getVerticalSurroundings].
 */
class Step4 {

    /**
     * ### Step 4.1
     *
     * **Test**: `get horizontal surroundings with three tiles`
     *
     * [GameMechanics.getHorizontalSurroundings] returns a list of [Tile]s which are horizontally connected and have the
     * same type as the provided [Tile]. The list will always include the provided tile itself.
     * Even if [Tile.isNotTile] is `true`. Only [Tile]s with [Tile.isTile] = `true` count as connected.
     */
    @Test
    fun getHorizontalSurroundingsWithThreeTiles() {
        val field = GameField.fromString(
            """
                |[H, A, H, H]
                |[H, A, A, A]
                |[H, A, H, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        val horizontal: List<TileCell> = listOf(
            field.getTileCell(1, 1), field.getTileCell(2, 1), field.getTileCell(3, 1)
        )

        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(2, 1)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(1, 1)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(3, 1)))
    }

    /**
     * ### Step 4.2
     *
     * **Test**: `get vertical surroundings with three tiles`
     *
     * [GameMechanics.getVerticalSurroundings] returns a list of [Tile]s which are vertically connected and have the
     * same type as the provided [Tile]. The list will always include the provided tile itself.
     * Even if [Tile.isNotTile] is `true`. Only [Tile]s with [Tile.isTile] = `true` count as connected.
     */
    @Test
    fun getVerticalSurroundingsWithThreeTiles() {
        val field = GameField.fromString(
            """
                |[H, A, H, H]
                |[H, A, A, A]
                |[H, A, H, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        // Vertical
        val vertical: List<TileCell> = listOf(
            field.getTileCell(1, 0),
            field.getTileCell(1, 1),
            field.getTileCell(1, 2)
        )
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(1, 0)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(1, 1)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(1, 2)))
    }

    /**
     * ### Step 4.3
     *
     * **Test**: `get horizontal surroundings with holes`
     *
     * Test [GameMechanics.getHorizontalSurroundings] don't match with holes ([Tile.Hole]).
     *
     *  Of course a list of empty cells (with [Tile.Hole]) should not be recognized as surroundings.
     */
    @Test
    fun getHorizontalSurroundingsWithHoles() {
        val field = GameField.fromString(
            """
                |[H, H, H]
                |[H, H, H]
                |[H, H, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        assertEquals(listOf(field.getTileCell(1, 0)), mechanics.getHorizontalSurroundings(Position(1, 0)))
        assertEquals(listOf(field.getTileCell(1, 1)), mechanics.getHorizontalSurroundings(Position(1, 1)))
        assertEquals(listOf(field.getTileCell(1, 2)), mechanics.getHorizontalSurroundings(Position(1, 2)))
    }

    /**
     * ### Step 4.4
     *
     * **Test**: `get vertical surroundings with holes`
     *
     * Test [GameMechanics.getVerticalSurroundings] don't match with holes ([Tile.Hole]).
     * Of course a list of empty cells (with [Tile.Hole]) should not be recognized as surroundings.
     */
    @Test
    fun getVerticalSurroundingsWithHoles() {
        val field = GameField.fromString(
            """
                |[H, H, H]
                |[H, H, H]
                |[H, H, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        assertEquals(listOf(field.getTileCell(1, 0)), mechanics.getVerticalSurroundings(Position(1, 0)))
        assertEquals(listOf(field.getTileCell(1, 1)), mechanics.getVerticalSurroundings(Position(1, 1)))
        assertEquals(listOf(field.getTileCell(1, 2)), mechanics.getVerticalSurroundings(Position(1, 2)))
    }
}
