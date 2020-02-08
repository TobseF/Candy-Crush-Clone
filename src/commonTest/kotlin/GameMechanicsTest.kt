import j4k.candycrush.GameMechanics
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.GameField
import j4k.candycrush.model.Tile
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class GameMechanicsTest {

    @Test
    fun testGetRowField() {
        val field = GameField.fromString("""
                        |[H, H, H, H]
                        |[H, A, B, H]
                        |[H, H, H, H]
                        """.trimMargin())

        val mechanics = GameMechanics(field)
        mechanics.swapTiles(Position(1, 1), Position(2, 1))

        assertEquals("""
            |[H, H, H, H]
            |[H, B, A, H]
            |[H, H, H, H]
            """.trimMargin(), field.toString())
    }

    @Test
    fun testIsInRowWithThree() {
        val field = GameField.fromString("""
                        |[H, A, H, H]
                        |[H, A, A, A]
                        |[H, A, H, H]
                        """.trimMargin())
        val mechanics = GameMechanics(field)

        // Horizontal
        assertTrue { mechanics.isInRowWithThree(Position(1, 0)) }
        assertTrue { mechanics.isInRowWithThree(Position(1, 1)) }
        assertTrue { mechanics.isInRowWithThree(Position(1, 2)) }

        // Vertical
        assertTrue { mechanics.isInRowWithThree(Position(2, 1)) }
        assertTrue { mechanics.isInRowWithThree(Position(3, 1)) }

        // Dont't match holes!
        assertFalse { mechanics.isInRowWithThree(Position(0, 1)) }
    }

    @Test
    fun testHasFollowingEqualTiles() {
        val mechanics = GameMechanics(GameField(1, 1))
        assertEquals(true, mechanics.hasFollowingEqualTiles(listOf(Tile.A, Tile.A, Tile.A), 3))

        assertEquals(false, mechanics.hasFollowingEqualTiles(listOf(Tile.A, Tile.B, Tile.A, Tile.A, Tile.B), 3))
        assertEquals(true, mechanics.hasFollowingEqualTiles(listOf(Tile.A, Tile.B, Tile.A, Tile.A, Tile.B), 2))

        assertEquals(true, mechanics.hasFollowingEqualTiles(listOf(Tile.A, Tile.A, Tile.A, Tile.A, Tile.A), 3))

        assertEquals(false, mechanics.hasFollowingEqualTiles(listOf(Tile.A, Tile.B, Tile.A, Tile.B, Tile.A), 2))

        assertEquals(true, mechanics.hasFollowingEqualTiles(listOf(Tile.A, Tile.B, Tile.B, Tile.B, Tile.A), 3))
    }

}