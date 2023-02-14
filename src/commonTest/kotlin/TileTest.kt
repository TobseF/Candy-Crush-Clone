import j4k.candycrush.model.*
import kotlin.test.*

/**
 * Test for the mapping of a [Tile].
 */
class TileTest {


    /**
     * Test [Tile.isTile] which should be `true` for [Tile.A] - [Tile.B].
     */
    @Test
    fun isTile() {
        assertTrue(Tile.A.isTile())
        assertTrue(Tile.B.isTile())
        assertTrue(Tile.C.isTile())
        assertTrue(Tile.D.isTile())
        assertTrue(Tile.E.isTile())

        assertFalse(Tile.Hole.isTile())
        assertFalse(Tile.OutOfSpace.isTile())
        assertFalse(Tile.Wall.isTile())
    }

    /**
     * Test get short name of [Tile] with [Tile.shortName].
     * This short-notation helps to build levels and to test the game.
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

    /**
     * Test convert short name to [Tile] with [Tile.getTile].
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

}
