import com.soywiz.korma.geom.*
import j4k.candycrush.math.*
import j4k.candycrush.math.PositionGrid.Position
import kotlin.test.*

/**
 * Test for the [PositionGrid]
 */
class PositionGridTest {

    /**
     * Test get position for column and row on grid ([PositionGrid.getPosition]).
     */
    @Test
    fun getPositionOnGrid() {
        val positionGrid = PositionGrid(0, 0, 3, 3, 20)
        assertEquals(Point(0, 0), positionGrid.getPosition(0, 0))
        assertEquals(Point(20, 0), positionGrid.getPosition(1, 0))
        assertEquals(Point(40, 0), positionGrid.getPosition(2, 0))
        assertEquals(Point(0, 20), positionGrid.getPosition(0, 1))
        assertEquals(Point(0, 40), positionGrid.getPosition(0, 2))
        assertEquals(Point(0, 60), positionGrid.getPosition(0, 3))
    }

    /**
     * Test get position for column and row on a shifted grid ([PositionGrid.getPosition]).
     * Shifted means that the [PositionGrid] location is not 0,0.
     */
    @Test
    fun getPositionOnShiftedGrid() {
        val positionGrid = PositionGrid(100, 100, 3, 3, 20)
        assertEquals(Point(100, 100), positionGrid.getPosition(0, 0))
        assertEquals(Point(120, 100), positionGrid.getPosition(1, 0))
        assertEquals(Point(140, 100), positionGrid.getPosition(2, 0))
        assertEquals(Point(100, 120), positionGrid.getPosition(0, 1))
        assertEquals(Point(100, 140), positionGrid.getPosition(0, 2))
        assertEquals(Point(100, 160), positionGrid.getPosition(0, 3))

        assertEquals(Position(0, 0), positionGrid.getField(100, 100))
        assertEquals(Position(0, 0), positionGrid.getField(110, 110))
        assertEquals(Position(1, 0), positionGrid.getField(120, 100))
        assertEquals(Position(1, 0), positionGrid.getField(130, 100))
        assertEquals(Position(0, 1), positionGrid.getField(100, 120))
        assertEquals(Position(0, 1), positionGrid.getField(100, 130))
    }

    /**
     * Test if a given position is on grid ([PositionGrid.isOnGrid]).
     */
    @Test
    fun isOnGrid() {
        val positionGrid = PositionGrid(0, 0, 2, 2, 20)
        assertTrue(positionGrid.isOnGrid(Position(0, 0)))
        assertTrue(positionGrid.isOnGrid(Position(1, 0)))
        assertTrue(positionGrid.isOnGrid(Position(1, 1)))

        assertFalse(positionGrid.isOnGrid(Position(-1, 0)))
        assertFalse(positionGrid.isOnGrid(Position(0, -1)))
        assertFalse(positionGrid.isOnGrid(Position(2, 0)))
        assertFalse(positionGrid.isOnGrid(Position(0, 2)))
    }

}
