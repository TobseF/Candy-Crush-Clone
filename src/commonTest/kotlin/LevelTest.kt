import j4k.candycrush.model.Level
import j4k.candycrush.model.Tile
import kotlin.test.Test
import kotlin.test.assertEquals

class LevelTest {

    @Test
    fun testGetNextLevelTile() {
        val reserve = """
                        |[B, D, E, A]
                        |[A, B, D, E]
                        """.trimMargin()
        val field = """
                        |[A, A, A, A]
                        """.trimMargin()

        val level = Level(field, reserve)

        assertEquals(Tile.A, level.getNextTile(0))
        assertEquals(Tile.B, level.getNextTile(0))
        assertEquals(level.reserve.toString(), """
                        |[H, D, E, A]
                        |[H, B, D, E]
                        """.trimMargin())

        assertEquals(Tile.B, level.getNextTile(1))
        assertEquals(Tile.D, level.getNextTile(1))
        assertEquals(level.reserve.toString(), """
                        |[H, H, E, A]
                        |[H, H, D, E]
                        """.trimMargin())
    }


}