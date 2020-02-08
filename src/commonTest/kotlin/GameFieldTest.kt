import j4k.candycrush.model.GameField
import j4k.candycrush.model.Row
import j4k.candycrush.model.Tile
import kotlin.test.Test
import kotlin.test.assertEquals

class GameFieldTest {

    @Test
    fun testGetColumnField() {
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
    fun testGetColumnOutOfSpace() {
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
    fun testReadGameFieldFromString() {
        val fieldData = """
                        |[A, H, H, H]
                        |[H, B, H, H]
                        |[H, H, C, W]
                        """.trimMargin()
        val field = GameField.fromString(fieldData)

        assertEquals(field.toString(), fieldData)
    }


}