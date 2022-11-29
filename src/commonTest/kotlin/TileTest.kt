import j4k.candycrush.model.*
import kotlin.test.*

/**
 * Test for the mapping of a [Tile].
 */
class TileTest {

    /**
     * Test convert char to [Tile] with [Tile.getTile].
     */
    @Test
    fun convertCharToTile() {
        assertEquals(Tile.A, Tile.getTile("A"))
        assertEquals(Tile.B, Tile.getTile("B"))
        assertEquals(Tile.C, Tile.getTile("C"))
        assertEquals(Tile.D, Tile.getTile("D"))
        assertEquals(Tile.E, Tile.getTile("E"))
        assertEquals(Tile.Hole, Tile.getTile("H"))
        assertEquals(Tile.OutOfSpace, Tile.getTile("O"))
        assertEquals(Tile.Wall, Tile.getTile("W"))
    }

    /**
     * Test get short name of [Tile] with [Tile.shortName].
     */
    @Test
    fun shortNameOfTile() {
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
