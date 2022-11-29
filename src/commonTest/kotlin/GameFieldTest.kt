import j4k.candycrush.model.*
import kotlin.test.*

/**
 * Tests for the [GameField] which stores the field data.
 */
class GameFieldTest {

    /**
     * Test get field by index ([GameField.get]).
     */
    @Test
    fun testGetFieldByIndex() {
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

    /**
     * Test [GameField.getRow].
     */
    @Test
    fun testGetRow() {
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

    /**
     * Test set field by index ([GameField.set] && [Row.set]).
     */
    @Test
    fun setFieldByIndex() {
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

        assertEquals(
            field.toString(), """
                        |[E, A, H, H]
                        |[H, B, H, H]
                        |[H, C, H, H]
                        """.trimMargin()
        )
    }

    /**
     * Test get field by index [Tile.OutOfSpace].
     */
    @Test
    fun getFieldByIndexOutOfSpace() {
        val field = GameField(2, 2)
        assertEquals(Tile.OutOfSpace, field[-1][0])
        assertEquals(Tile.OutOfSpace, field[0][-1])
        assertEquals(Tile.OutOfSpace, field[0][2])
        assertEquals(Tile.OutOfSpace, field[2][0])
    }

    /**
     * Test get row by index [Tile.OutOfSpace].
     */
    @Test
    fun getRowByIndexOutOfSpace() {
        val field = GameField(2, 2)
        assertEquals(Row.outOfSpace(), field[-1])
        assertEquals(Row.outOfSpace(), field[2])
    }


    /**
     * Test convert GameField to String ([GameField.toString]).
     */
    @Test
    fun convertGameFieldToString() {
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

        assertEquals(
            field.toString(), """
                        |[A, H, H, H]
                        |[H, B, H, H]
                        |[H, H, C, W]
                        """.trimMargin()
        )
    }

    /**
     * Test clone field by [GameField.clone].
     */
    @Test
    fun cloneField() {
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
        assertEquals(
            """
                    |[A, A]
                    |[H, H]
                    """.trimMargin(), fieldB.toString()
        )
        assertEquals(
            """
                    |[A, H]
                    |[H, H]
                    """.trimMargin(), fieldA.toString()
        )
    }

    /**
     * Test read GameField from String ([GameField.fromString]).
     */
    @Test
    fun readGameFieldFromString() {
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
                        """.trimMargin()
        )
    }


    /**
     * Test getColumn of field ([GameField.getColumn]).
     */
    @Test
    fun getColumnOfField() {
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

    /**
     * Test [GameField.getColumn] of field with value out of range.
     * This should throw an [IllegalArgumentException].
     */
    @Test
    fun getColumnOfFieldWithValueOutOfRange() {
        val field = GameField(1, 1)
        assertFailsWith(IllegalArgumentException::class) { field.getColumn(1) }
    }

}
