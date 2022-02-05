import j4k.candycrush.model.Tile
import kotlin.test.Test
import kotlin.test.assertEquals

/**
 * Test for the mapping of a [Tile].
 */
class TileTest {

    @Test
    fun `test convert char to Tile`() {
        assertEquals(Tile.A, Tile.getTile("A"))
        assertEquals(Tile.B, Tile.getTile("B"))
        assertEquals(Tile.C, Tile.getTile("C"))
        assertEquals(Tile.D, Tile.getTile("D"))
        assertEquals(Tile.E, Tile.getTile("E"))
        assertEquals(Tile.Hole, Tile.getTile("H"))
        assertEquals(Tile.OutOfSpace, Tile.getTile("O"))
        assertEquals(Tile.Wall, Tile.getTile("W"))
    }

    @Test
    fun `test shortName() of Tile`() {
        assertEquals("A", Tile.A.shortName())
        assertEquals("B", Tile.B.shortName())
        assertEquals("C", Tile.C.shortName())
        assertEquals("D", Tile.D.shortName())
        assertEquals("E", Tile.E.shortName())
        assertEquals("H", Tile.Hole.shortName())
        assertEquals("O", Tile.OutOfSpace.shortName())
        assertEquals("W", Tile.Wall.shortName())
    }
}