import j4k.candycrush.model.GameField
import j4k.candycrush.model.TileType
import kotlin.test.Test
import kotlin.test.assertEquals

class GameFieldTest {

    @Test
    fun testGameFieldToString() {
        val field = GameField(4, 3)
        assertEquals(field.toString(), """
                        |[H, H, H, H]
                        |[H, H, H, H]
                        |[H, H, H, H]
                        """.trimMargin())

        field[0][0] = 1
        field[1][1] = 2
        field[2][2] = 3
        field[2][3] = TileType.Wall

        assertEquals(field.toString(), """
                        |[1, H, H, H]
                        |[H, 2, H, H]
                        |[H, H, 3, W]
                        """.trimMargin())
    }
}