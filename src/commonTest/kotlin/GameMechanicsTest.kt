import j4k.candycrush.GameMechanics
import j4k.candycrush.GameMechanics.InsertMove
import j4k.candycrush.GameMechanics.Move
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.GameField
import j4k.candycrush.model.Tile
import j4k.candycrush.model.TileCell
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class GameMechanicsTest {

    @Test
    fun testGetRowField() {
        val field = GameField.fromString(
                """
                |[H, H, H, H]
                |[H, A, B, H]
                |[H, H, H, H]
                """.trimMargin())

        val mechanics = GameMechanics(field)
        mechanics.swapTiles(Position(1, 1), Position(2, 1))

        assertEquals(
                """
                |[H, H, H, H]
                |[H, B, A, H]
                |[H, H, H, H]
                """.trimMargin(), field.toString())
    }

    @Test
    fun testIsInRowWithThree() {
        val field = GameField.fromString(
                """
                |[H, A, H, H]
                |[H, A, A, A]
                |[H, A, H, H]
                """.trimMargin())
        val mechanics = GameMechanics(field)

        // Horizontal
        assertTrue(mechanics.isInRowWithThree(Position(1, 0)))
        assertTrue(mechanics.isInRowWithThree(Position(1, 1)))
        assertTrue(mechanics.isInRowWithThree(Position(1, 2)))

        // Vertical
        assertTrue(mechanics.isInRowWithThree(Position(2, 1)))
        assertTrue(mechanics.isInRowWithThree(Position(3, 1)))

        // Dont't match holes!
        assertFalse(mechanics.isInRowWithThree(Position(0, 1)))
    }

    @Test
    fun testIsNotInRowWithThreeIfEmpty() {
        val field = GameField.fromString(
                """
                |[H, A, H, H]
                |[H, A, A, A]
                |[H, A, H, H]
                """.trimMargin())
        val mechanics = GameMechanics(field)

        // Horizontal
        assertTrue(mechanics.isInRowWithThree(Position(1, 0)))
        assertTrue(mechanics.isInRowWithThree(Position(1, 1)))
        assertTrue(mechanics.isInRowWithThree(Position(1, 2)))
        // Vertica)
        assertTrue(mechanics.isInRowWithThree(Position(2, 1)))
        assertTrue(mechanics.isInRowWithThree(Position(3, 1)))
        // Dont't match holes)
        assertFalse(mechanics.isInRowWithThree(Position(0, 1)))
    }

    @Test
    fun testGetConnectedTiles() {
        val field = GameField.fromString(
                """
                |[H, A, H, H]
                |[H, A, A, A]
                |[H, A, H, H]
                """.trimMargin())
        val mechanics = GameMechanics(field)

        val vertical: List<TileCell> = listOf(
                field.getTileCell(1, 0), field.getTileCell(1, 1), field.getTileCell(1, 2))

        assertEquals(vertical, mechanics.getConnectedTiles(Position(1, 0)))
        assertEquals(vertical, mechanics.getConnectedTiles(Position(1, 2)))

        val horizontal: List<TileCell> = listOf(
                field.getTileCell(1, 1), field.getTileCell(2, 1), field.getTileCell(3, 1))

        assertEquals(horizontal, mechanics.getConnectedTiles(Position(2, 1)))
        assertEquals(horizontal, mechanics.getConnectedTiles(Position(3, 1)))

        assertEquals(vertical + horizontal, mechanics.getConnectedTiles(Position(1, 1)))

        // Dont't match holes!
        assertEquals(emptyList(), mechanics.getConnectedTiles(Position(0, 0)))
        assertEquals(emptyList(), mechanics.getConnectedTiles(Position(0, 1)))
        assertEquals(emptyList(), mechanics.getConnectedTiles(Position(0, 2)))
    }

    @Test
    fun testGetVerticalConnectedThree() {
        val field = GameField.fromString(
                """
                |[H, A, H, H]
                |[H, A, A, A]
                |[H, A, H, H]
                """.trimMargin())
        val mechanics = GameMechanics(field)

        // Vertical
        val vertical: List<TileCell> = listOf(
                field.getTileCell(1, 0), field.getTileCell(1, 1), field.getTileCell(1, 2))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(1, 0)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(1, 1)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(1, 2)))
    }

    @Test
    fun testGetHorizontalConnectedThree() {
        val field = GameField.fromString(
                """
                |[H, A, H, H]
                |[H, A, A, A]
                |[H, A, H, H]
                """.trimMargin())
        val mechanics = GameMechanics(field)

        val horizontal: List<TileCell> = listOf(
                field.getTileCell(1, 1), field.getTileCell(2, 1), field.getTileCell(3, 1))

        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(2, 1)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(1, 1)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(3, 1)))
    }

    @Test
    fun testGetHorizontalConnectedSix() {
        val field = GameField.fromString(
                """
                |[H, A, A, A, A, A, A, H]
                """.trimMargin())
        val mechanics = GameMechanics(field)

        val horizontal: List<TileCell> = listOf(1, 2, 3, 4, 5, 6).map { field.getTileCell(column = it) }

        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 1)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 2)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 3)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 4)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 5)))
        assertEquals(horizontal, mechanics.getHorizontalSurroundings(Position(column = 6)))
    }

    @Test
    fun testGetVerticalConnectedSix() {
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
                """.trimMargin())
        val mechanics = GameMechanics(field)

        val vertical: List<TileCell> = listOf(1, 2, 3, 4, 5, 6).map { field.getTileCell(row = it) }

        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 1)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 2)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 3)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 4)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 5)))
        assertEquals(vertical, mechanics.getVerticalSurroundings(Position(row = 6)))
    }


    @Test
    fun testGetDisconnectedHoles() {
        val field = GameField.fromString(
                """
                |[H, A, H, H]
                |[H, A, A, A]
                |[H, A, H, H]
                """.trimMargin())
        val mechanics = GameMechanics(field)

        // Dont't match holes!

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


    @Test
    fun testGetNextMove() {
        val field = GameField.fromString(
                """
                |[H, H, A, H]
                |[A, A, H, A]
                |[H, H, H, H]
                |[H, A, A, H]
                """.trimMargin())
        val mechanics = GameMechanics(field)

        assertEquals(Move(Position(0, 3), Position(0, 1)), mechanics.getNextMove(0))
        assertEquals(Move(Position(1, 2), Position(1, 1)), mechanics.getNextMove(1))
        assertEquals(Move(Position(2, 2), Position(2, 0)), mechanics.getNextMove(2))
        assertEquals(Move(Position(3, 3), Position(3, 1)), mechanics.getNextMove(3))
    }

    @Test
    fun testDropToGround() {
        val field = GameField.fromString(
                """
                |[H, A, A, A]
                |[H, A, H, A]
                |[A, H, A, A]
                |[H, H, H, H]
                |[H, A, A, H]
                """.trimMargin())
        val mechanics = GameMechanics(field)
        mechanics.dropToGround(0)
        assertEquals(
                """
                |[H, A, A, A]
                |[H, A, H, A]
                |[H, H, A, A]
                |[H, H, H, H]
                |[A, A, A, H]
                """.trimMargin(), mechanics.toString())
        mechanics.dropToGround(1)
        assertEquals(
                """
                |[H, H, A, A]
                |[H, H, H, A]
                |[H, A, A, A]
                |[H, A, H, H]
                |[A, A, A, H]
                """.trimMargin(), mechanics.toString())
        mechanics.dropToGround(2)
        assertEquals(
                """
                |[H, H, H, A]
                |[H, H, H, A]
                |[H, A, A, A]
                |[H, A, A, H]
                |[A, A, A, H]
                """.trimMargin(), mechanics.toString())
        mechanics.dropToGround(3)
        assertEquals(
                """
                |[H, H, H, H]
                |[H, H, H, H]
                |[H, A, A, A]
                |[H, A, A, A]
                |[A, A, A, A]
                """.trimMargin(), mechanics.toString())

    }

    @Test
    fun testMove() {
        val field = GameField.fromString(
                """
                |[H, H, A, H]
                |[A, A, H, A]
                |[H, H, H, H]
                |[H, A, A, H]
                """.trimMargin())
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
                """.trimMargin(), mechanics.toString())
    }


    @Test
    fun testOrderOfListEmptyCells() {
        val field = GameField.fromString(
                """
                |[H]
                |[H]
                |[H]
                """.trimMargin())
        val newTileMoves: List<InsertMove> = GameMechanics(field).getNewTileMoves { Tile.A }
        val rows: List<Int> = newTileMoves.map { it.target }.map { it.row }
        assertEquals(listOf(2, 1, 0), rows)
    }

    @Test
    fun testListEmptyCells() {
        val field = GameField.fromString(
                """
                |[A, H, H, H]
                |[A, A, H, H]
                |[A, A, A, H]
                """.trimMargin())
        val mechanics = GameMechanics(field)

        val nextMoves: List<InsertMove> = mechanics.getNewTileMoves { Tile.B }
        mechanics.insert(nextMoves)

        assertEquals(
                """
                |[A, B, B, B]
                |[A, A, B, B]
                |[A, A, A, B]
                """.trimMargin(), mechanics.toString())
    }

    @Test
    fun testSortInsertMoves() {
        val moves: List<InsertMove> = listOf(1, 2, 0).map { mockInsertMove(it) }
        val sorted: List<InsertMove> = moves.sorted()
        assertEquals(listOf(2, 1, 0).map { mockInsertMove(it) }, sorted)
    }

    private fun mockInsertMove(row: Int = 0, column: Int = 0, tile: Tile = Tile.A): InsertMove {
        return InsertMove(Position(column, row), tile)
    }

}