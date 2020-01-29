package j4k.candycrush.math

import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.minus

/**
 * Creates a grid and matches screen coordinates with it.
 */
class PositionGrid(val x: Int = 0, val y: Int = 0, val columns: Int, val rows: Int, val size: Int, margin: Int = 0) {

    private val distance = size + margin

    /**
     * @param column position of the grid
     * @param row position of the grid
     * @return The [Point] wit screen coordinates
     */
    fun getPosition(column: Int, row: Int): Point {
        return Point(x + (column * distance), y + (row * distance))
    }

    /**
     * @param posX horizontal screen pixel coordinates
     * @param posY vertical screen pixel coordinates
     * @return Tile [Position] in the grid
     */
    fun getField(posX: Int, posY: Int): Position {
        return getField(posX.toDouble(), posY.toDouble())
    }

    /**
     * @param posX horizontal screen pixel coordinates
     * @param posY vertical screen pixel coordinates
     * @return Tile [Position] in the grid
     */
    fun getField(posX: Double, posY: Double): Position {
        val position = Point(posX, posY).minus(Point(x, y))
        val column = position.x / distance
        val row = position.y / distance
        return Position(column.toInt(), row.toInt())
    }

    /**
     * Position in the grid
     */
    data class Position(val column: Int, val row: Int)

}