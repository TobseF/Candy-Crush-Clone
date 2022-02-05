import j4k.candycrush.model.GameField
import j4k.candycrush.model.Row
import j4k.candycrush.model.Tile
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

/**
 * Tests for the [GameField] which stores the field data.
 */
class GameFieldTest {

    @Test
    fun `test get field by index`() {
        val field = GameField.fromString(
            """
                    |[E, A, H, H]
                    |[H, B, H, H]
                    |[H, C, H, H]
                    """.trimMargin()
        )

        assertEquals(Tile.E, field.get(column = 0, row = 0))
        assertEquals(Tile.A, field.get(column = 1, row = 0))
        assertEquals(Tile.B, field.get(column = 1, row = 1))
        assertEquals(Tile.C, field.get(column = 1, row = 2))

        assertEquals(Tile.E, field[0][0])
        assertEquals(Tile.A, field[0][1])
        assertEquals(Tile.B, field[1][1])
        assertEquals(Tile.C, field[2][1])

        assertEquals(Tile.OutOfSpace, field[-1][0])
        assertEquals(Tile.OutOfSpace, field[0][-1])
    }

    @Test
    fun `test getRow`() {
        val field = GameField.fromString(
            """
                    |[A, H]
                    |[B, H]
                    |[C, H]
                    """.trimMargin()
        )

        assertEquals(Row(Tile.A, Tile.Hole), field.getRow(0))
        assertEquals(Row(Tile.B, Tile.Hole), field.getRow(1))
        assertEquals(Row(Tile.C, Tile.Hole), field.getRow(2))
    }

    @Test
    fun `test set field by index`() {
        val field = GameField(4, 3)
        assertEquals(
            field.toString(), """
                        |[H, H, H, H]
                        |[H, H, H, H]
                        |[H, H, H, H]
                        """.trimMargin()
        )

        field[0][0] = "E"
        field[0][1] = "A"
        field[1][1] = "B"
        field[2][1] = "C"

        assertEquals(field.toString(), """
                        |[E, A, H, H]
                        |[H, B, H, H]
                        |[H, C, H, H]
                        """.trimMargin())
    }

    @Test
    fun `test get field by index OutOfSpace`() {
        val field = GameField(2, 2)
        assertEquals(Tile.OutOfSpace, field[-1][0])
        assertEquals(Tile.OutOfSpace, field[0][-1])
        assertEquals(Tile.OutOfSpace, field[0][2])
        assertEquals(Tile.OutOfSpace, field[2][0])
    }

    @Test
    fun `test get row by index OutOfSpace`() {
        val field = GameField(2, 2)
        assertEquals(Row.outOfSpace(), field[-1])
        assertEquals(Row.outOfSpace(), field[2])
    }


    @Test
    fun `test convert GameField to String`() {
        val field = GameField(4, 3)
        assertEquals(
            field.toString(), """
                        |[H, H, H, H]
                        |[H, H, H, H]
                        |[H, H, H, H]
                        """.trimMargin()
        )

        field[0][0] = "A"
        field[1][1] = "B"
        field[2][2] = "C"
        field[2][3] = Tile.Wall

        assertEquals(field.toString(), """
                        |[A, H, H, H]
                        |[H, B, H, H]
                        |[H, H, C, W]
                        """.trimMargin())
    }

    @Test
    fun `test copy field`() {
        val fieldA = GameField.fromString(
            """
                    |[A, H]
                    |[H, H]
                    """.trimMargin()
        )
        val fieldB = fieldA.clone()
        assertEquals(
            """
                    |[A, H]
                    |[H, H]
                    """.trimMargin(), fieldB.toString()
        )
        fieldB[0][1] = "A"
        assertEquals("""
                    |[A, A]
                    |[H, H]
                    """.trimMargin(), fieldB.toString())
        assertEquals("""
                    |[A, H]
                    |[H, H]
                    """.trimMargin(), fieldA.toString())
    }

    @Test
    fun `test read GameField from String`() {
        val field = GameField.fromString(
            """
                        |[A, H, H, H]
                        |[H, B, H, H]
                        |[H, H, C, W]
                        """.trimMargin()
        )

        assertEquals(
            field.toString(), """
                        |[A, H, H, H]
                        |[H, B, H, H]
                        |[H, H, C, W]
                        """.trimMargin())
    }


    @Test
    fun `test getColumn of field`() {
        val field = GameField.fromString(
            """
                        |[H, A, H, H]
                        |[H, B, H, H]
                        |[H, C, H, H]
                        """.trimMargin()
        )
        assertEquals(listOf(Tile.A, Tile.B, Tile.C), field.getColumn(1))
        assertEquals(listOf(Tile.Hole, Tile.Hole, Tile.Hole), field.getColumn(0))
    }

    @Test
    fun `test getColumn of field with value out of range`() {
        val field = GameField(1, 1)
        assertFailsWith(IllegalArgumentException::class) { field.getColumn(1) }
    }


}