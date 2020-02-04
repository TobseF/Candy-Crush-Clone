import j4k.candycrush.model.GameField
import j4k.candycrush.model.Tile
import kotlin.test.Test
import kotlin.test.assertEquals

class GameFieldTest {

    @Test
    fun testConvertGameFieldToString() {
        val field = GameField(4, 3)
        assertEquals(field.toString(), """
                        |[H, H, H, H]
                        |[H, H, H, H]
                        |[H, H, H, H]
                        """.trimMargin())

        field[0][0] = 0
        field[1][1] = 1
        field[2][2] = 2
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