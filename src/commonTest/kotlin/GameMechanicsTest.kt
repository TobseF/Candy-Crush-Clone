import j4k.candycrush.*
import j4k.candycrush.GameMechanics.InsertMove
import j4k.candycrush.GameMechanics.Move
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.*
import kotlin.test.*

/**
 * Test for the [GameMechanics] which performs actions on the [GameField].
 */
class GameMechanicsTest {

    /**
     * Test swapping of two tiles ([GameMechanics.swapTiles]).
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
     * Test remove tile at given position ([GameMechanics.removeTile]).
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

    /**
     * Test if a position points to a tile which is in row with three ([GameMechanics.isInRowWithThree]).
     */
    @Test
    fun isInRowWithThree() {
        val field = GameField.fromString(
            """
                |[H, A, H, H]
                |[H, A, A, A]
                |[H, A, H, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        // Horizontal
        assertTrue(mechanics.isInRowWithThree(Position(1, 0)))
        assertTrue(mechanics.isInRowWithThree(Position(1, 1)))
        assertTrue(mechanics.isInRowWithThree(Position(1, 2)))

        // Vertical
        assertTrue(mechanics.isInRowWithThree(Position(2, 1)))
        assertTrue(mechanics.isInRowWithThree(Position(3, 1)))

        // Don't match holes!
        assertFalse(mechanics.isInRowWithThree(Position(0, 1)))
    }

    /**
     * Test if a position points to a tile which is NOT in row with three ([GameMechanics.isInRowWithThree]).
     */
    @Test
    fun isNotInRowWithThree() {
        val field = GameField.fromString(
            """
                |[H, A, A, H]
                |[A, A, H, H]
                |[H, H, A, A]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        assertFalse(mechanics.isInRowWithThree(Position(1, 0)))
        assertFalse(mechanics.isInRowWithThree(Position(1, 1)))
        assertFalse(mechanics.isInRowWithThree(Position(2, 2)))
    }

    /**
     * Test if [GameMechanics.getConnectedTiles] can find connected tiles (horizontal and vertical).
     */
    @Test
    fun getConnectedTiles() {
        val field = GameField.fromString(
            """
                |[H, A, H, H]
                |[H, A, A, A]
                |[H, A, H, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        val vertical: List<TileCell> = listOf(
            field.getTileCell(1, 0), field.getTileCell(1, 1), field.getTileCell(1, 2)
        )

        assertEquals(vertical, mechanics.getConnectedTiles(Position(1, 0)))
        assertEquals(vertical, mechanics.getConnectedTiles(Position(1, 2)))

        val horizontal: List<TileCell> = listOf(
            field.getTileCell(1, 1), field.getTileCell(2, 1), field.getTileCell(3, 1)
        )

        assertEquals(horizontal, mechanics.getConnectedTiles(Position(2, 1)))
        assertEquals(horizontal, mechanics.getConnectedTiles(Position(3, 1)))

        assertEquals(vertical + horizontal, mechanics.getConnectedTiles(Position(1, 1)))

        // Don't match holes!
        assertEquals(emptyList(), mechanics.getConnectedTiles(Position(0, 0)))
        assertEquals(emptyList(), mechanics.getConnectedTiles(Position(0, 1)))
        assertEquals(emptyList(), mechanics.getConnectedTiles(Position(0, 2)))
    }

    /**
     * Test [GameMechanics.getVerticalSurroundings] with three tiles in a vertical line.
     */
    @Test
    fun getVerticalSurroundingsWithThreeTilesVertical() {
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
     * Test [GameMechanics.getVerticalSurroundings] with three tiles in a horizontal line.
     */
    @Test
    fun getVerticalSurroundingsWithThreeTilesHorizontal() {
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
     * Test [GameMechanics.getHorizontalSurroundings] don't match with holes ([Tile.Hole]).
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
     * Test [GameMechanics.getHorizontalSurroundings] with six tiles in a horizontal line.
     */
    @Test
    fun getHorizontalSurroundingsWithSixTilesHorizontal() {
        val field = GameField.fromString(
            """
                |[H, A, A, A, A, A, A, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        val horizontal: List<TileCell> = listOf(1, 2, 3, 4, 5, 6).map { field.getTileCell(column = it) }

        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 1)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 2)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 3)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 4)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 5)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 6)))
    }

    /**
     * Test [GameMechanics.getHorizontalSurroundings] with six tiles in a vertical line.
     */
    @Test
    fun getHorizontalSurroundingsWithSixTilesVertical() {
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

        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 1)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 2)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 3)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 4)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 5)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 6)))
    }

    /**
     * Test [GameMechanics.getVerticalSurroundings] don't match with holes ([Tile.Hole]).
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

    /**
     * Test that a hole does not count as connected with other holes for
     * [GameMechanics.getHorizontalSurroundings] and [GameMechanics.getVerticalSurroundings].
     */
    @Test
    fun surroundingsNotConnectedWithHoles() {
        val field = GameField.fromString(
            """
                |[H, A, H, H]
                |[H, A, A, A]
                |[H, A, H, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        // Don`t match holes!

        val hole1: List<TileCell> = listOf(field.getTileCell(0, 0))
        assertEquals(hole1, mechanics.getHorizontalSurroundings(Position(0, 0)))
        assertEquals(hole1, mechanics.getVerticalSurroundings(Position(0, 0)))

        val hole2: List<TileCell> = listOf(field.getTileCell(0, 1))
        assertEquals(hole2, mechanics.getHorizontalSurroundings(Position(0, 1)))
        assertEquals(hole2, mechanics.getVerticalSurroundings(Position(0, 1)))

        val hole3: List<TileCell> = listOf(field.getTileCell(0, 2))
        assertEquals(hole3, mechanics.getHorizontalSurroundings(Position(0, 2)))
        assertEquals(hole3, mechanics.getVerticalSurroundings(Position(0, 2)))
    }


    /**
     * Test search for drop down moves with [GameMechanics.getNextDropMove].
     */
    @Test
    fun getNextDropMove() {
        val field = GameField.fromString(
            """
                |[H, H, A, H]
                |[A, A, H, A]
                |[H, H, H, H]
                |[H, A, A, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        assertEquals(Move(Position(0, 3), Position(0, 1)), mechanics.getNextDropMove(0))
        assertEquals(Move(Position(1, 2), Position(1, 1)), mechanics.getNextDropMove(1))
        assertEquals(Move(Position(2, 2), Position(2, 0)), mechanics.getNextDropMove(2))
        assertEquals(Move(Position(3, 3), Position(3, 1)), mechanics.getNextDropMove(3))
    }

    /**
     * Test dropping a tile to the ground with [GameMechanics.dropToGround].
     */
    @Test
    fun dropToGround() {
        val field = GameField.fromString(
            """
                |[H, A, A, A]
                |[H, A, H, A]
                |[A, H, A, A]
                |[H, H, H, H]
                |[H, A, A, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)
        mechanics.dropToGround(0)
        assertEquals(
            """
                |[H, A, A, A]
                |[H, A, H, A]
                |[H, H, A, A]
                |[H, H, H, H]
                |[A, A, A, H]
                """.trimMargin(), mechanics.field.toString()
        )
        mechanics.dropToGround(1)
        assertEquals(
            """
                |[H, H, A, A]
                |[H, H, H, A]
                |[H, A, A, A]
                |[H, A, H, H]
                |[A, A, A, H]
                """.trimMargin(), mechanics.field.toString()
        )
        mechanics.dropToGround(2)
        assertEquals(
            """
                |[H, H, H, A]
                |[H, H, H, A]
                |[H, A, A, A]
                |[H, A, A, H]
                |[A, A, A, H]
                """.trimMargin(), mechanics.field.toString()
        )
        mechanics.dropToGround(3)
        assertEquals(
            """
                |[H, H, H, H]
                |[H, H, H, H]
                |[H, A, A, A]
                |[H, A, A, A]
                |[A, A, A, A]
                """.trimMargin(), mechanics.field.toString()
        )

    }

    /**
     * Test a move a Tile from position-A to position-B.
     */
    @Test
    fun moveTileToAnotherPosition() {
        val field = GameField.fromString(
            """
                |[H, H, A, H]
                |[A, A, H, A]
                |[H, H, H, H]
                |[H, A, A, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        mechanics.move(Move(Position(0, 3), Position(0, 1)))
        mechanics.move(Move(Position(1, 2), Position(1, 1)))
        mechanics.move(Move(Position(2, 2), Position(2, 0)))
        mechanics.move(Move(Position(3, 3), Position(3, 1)))

        assertEquals(
            """
                |[H, H, H, H]
                |[H, H, H, H]
                |[H, A, A, H]
                |[A, A, A, A]
                """.trimMargin(), mechanics.toString()
        )
    }

    /**
     * Test the order of insert moves ([GameMechanics.getNewTileMoves]).
     * Lower tiles have to be filled first.
     */
    @Test
    fun topDownOrderOfInsertMoves() {
        val field = GameField.fromString(
            """
                |[H]
                |[H]
                |[H]
                """.trimMargin()
        )
        val newTileMoves: List<InsertMove> = GameMechanics(field).getNewTileMoves { Tile.A }
        val rows: List<Int> = newTileMoves.map { it.target }.map { it.row }
        assertEquals(listOf(2, 1, 0), rows)
    }

    /**
     * Test listing empty cells ([GameMechanics.listEmptyCells]).
     */
    @Test
    fun listEmptyCells() {
        val field = GameField.fromString(
            """
                |[H, H, H]
                |[H, A, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)
        val listEmptyCells: Set<Position> = mechanics.listEmptyCells().toSet()
        val holes = setOf(
            Position(0, 0), Position(1, 0), Position(2, 0),
            Position(0, 1), Position(2, 1)
        )
        assertEquals(holes, listEmptyCells)
    }

    /**
     * Test executing a new tile move with ([GameMechanics.getNewTileMoves]) and ([GameMechanics.insert]).
     */
    @Test
    fun insertNewTileMoves() {
        val field = GameField.fromString(
            """
                |[A, H, H, H]
                |[A, A, H, H]
                |[A, A, A, H]
                """.trimMargin()
        )
        val mechanics = GameMechanics(field)

        val nextMoves: List<InsertMove> = mechanics.getNewTileMoves { Tile.B }
        mechanics.insert(nextMoves)

        assertEquals(
            """
                |[A, B, B, B]
                |[A, A, B, B]
                |[A, A, A, B]
                """.trimMargin(), mechanics.toString()
        )
    }

    /**
     * Test sort order of insert moves ([InsertMove]). This should be top down.
     */
    @Test
    fun sortOrderOfInsertMoves() {
        val moves: List<InsertMove> = listOf(1, 2, 0).map { mockInsertMove(it) }
        val sorted: List<InsertMove> = moves.sorted()
        assertEquals(listOf(2, 1, 0).map { mockInsertMove(it) }, sorted)
    }

    private fun mockInsertMove(row: Int = 0, column: Int = 0, tile: Tile = Tile.A): InsertMove {
        return InsertMove(Position(column, row), tile)
    }

}
