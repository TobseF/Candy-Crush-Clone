package steps

import j4k.candycrush.model.*
import kotlin.test.*

/**
 * A [GameField] contains [Row]s which contain [Tile]s.
 *
 * A [Tile] can be one of five stone types (A-E): [Tile.isTile] -> `true` or
 * it's a special field: [Tile.Hole], [Tile.OutOfSpace], [Tile.Wall]:  [Tile.isTile] -> `false`.
 */
class Step1 {

    /**
     * ### Step 1.1
     *
     * **Test**: `is Tile`
     *
     * Only [Tile]s ([Tile.A]-[Tile.E]) should be visible on the [GameField]. Here [Tile.isTile] should return `true`.
     * On other [Tile]s ([Tile.Hole], [Tile.OutOfSpace], [Tile.Wall]):  [Tile.isTile] should return `false`.
     *
     * Check the game after fixing this test.
     * You should see a level which consists of one type of tile.
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
     * ### Step 1.2
     *
     * **Test**: `short name of Tile`
     *
     * To export or debug a level, we need to convert a
     * [Tile] into a single letter shortname [String] by [Tile.shortName].
     *
     * For example: [Tile.A.shortName] should return `A`.
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
     * ### Step 1.3
     *
     * **Test**: `convert short name to Tile`
     *
     * Ensures we can load [Tile]s from its [Tile.shortName].
     * This allows loading of a stored level.
     *
     * Check the game after fixing this test. You should see tiles of level one.
     */
    @Test
    fun convertShortNameToTile() {
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
