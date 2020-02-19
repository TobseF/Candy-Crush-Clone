import j4k.candycrush.model.GameField
import j4k.candycrush.model.Row
import j4k.candycrush.model.Tile
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class GameFieldTest {

    @Test
    fun testGetField() {
        val field = GameField(4, 3)
        assertEquals(field.toString(), """
                        |[H, H, H, H]
                        |[H, H, H, H]
                        |[H, H, H, H]
                        """.trimMargin())

        field[0][1] = "A"
        field[1][1] = "B"
        field[2][1] = "C"

        assertEquals(field.toString(), """
                        |[H, A, H, H]
                        |[H, B, H, H]
                        |[H, C, H, H]
                        """.trimMargin())

        assertEquals(Tile.A, field[0][1])
        assertEquals(Tile.B, field[1][1])
        assertEquals(Tile.C, field[2][1])

        assertEquals(Tile.OutOfSpace, field[-1][0])
        assertEquals(Tile.OutOfSpace, field[0][-1])
    }

    @Test
    fun testGetFieldOutOfSpace() {
        val field = GameField(2, 2)
        assertEquals(Tile.OutOfSpace, field[-1][0])
        assertEquals(Tile.OutOfSpace, field[0][-1])
        assertEquals(Tile.OutOfSpace, field[0][2])
        assertEquals(Tile.OutOfSpace, field[2][0])
    }

    @Test
    fun testGetRowOutOfSpace() {
        val field = GameField(2, 2)
        assertEquals(Row.outOfSpace(), field[-1])
        assertEquals(Row.outOfSpace(), field[2])
    }


    @Test
    fun testConvertGameFieldToString() {
        val field = GameField(4, 3)
        assertEquals(field.toString(), """
                        |[H, H, H, H]
                        |[H, H, H, H]
                        |[H, H, H, H]
                        """.trimMargin())

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
    fun testCopyField() {
        val fieldA = GameField.fromString("""
                    |[A, H]
                    |[H, H]
                    """.trimMargin())
        val fieldB = fieldA.clone()
        assertEquals("""
                    |[A, H]
                    |[H, H]
                    """.trimMargin(), fieldB.toString())
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
    fun testReadGameFieldFromString() {
        val field = GameField.fromString("""
                        |[A, H, H, H]
                        |[H, B, H, H]
                        |[H, H, C, W]
                        """.trimMargin())

        assertEquals(field.toString(), """
                        |[A, H, H, H]
                        |[H, B, H, H]
                        |[H, H, C, W]
                        """.trimMargin())
    }


    @Test
    fun testGetColumn() {
        val field = GameField.fromString("""
                        |[H, A, H, H]
                        |[H, B, H, H]
                        |[H, C, H, H]
                        """.trimMargin())
        assertEquals(listOf(Tile.A, Tile.B, Tile.C), field.getColumn(1))
        assertEquals(listOf(Tile.Hole, Tile.Hole, Tile.Hole), field.getColumn(0))
    }

    @Test
    fun testGetColumnOutOfRange() {
        val field = GameField(1, 1)
        assertFailsWith(IllegalArgumentException::class) { field.getColumn(1) }
    }


}