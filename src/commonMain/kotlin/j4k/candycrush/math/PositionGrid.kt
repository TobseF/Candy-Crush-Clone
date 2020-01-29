package j4k.candycrush.math

import com.soywiz.korma.geom.IPoint
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.minus

/**
 * Creates a grid and matches screen coordinates with it.
 */
class PositionGrid(val x: Int = 0, val y: Int = 0, val columns: Int, val rows: Int, val size: Int, margin: Int = 0) {

    val distance = size + margin

    /**
     * @param column position of the grid
     * @param row position of the grid
     * @return The [Point] wit screen coordinates
     */
    fun getPosition(column: Int, row: Int): Point {
        return Point(x + (column * distance), y + (row * distance))
    }

    fun getPosition(position: Position): Point = getPosition(position.column, position.row)

    /**
     * @param posX horizontal screen pixel coordinates
     * @param posY vertical screen pixel coordinates
     * @return Tile [Position] in the grid
     */
    fun getField(posX: Int, posY: Int): Position {
        return getField(posX.toDouble(), posY.toDouble())
    }

    /**
     * @param position with screen pixel coordinates
     * @return Tile [Position] in the grid
     */
    fun getField(position: IPoint): Position {
        val relativePosition = position.minus(Point(x, y))
        val column = relativePosition.x / distance
        val row = relativePosition.y / distance
        return Position(column.toInt(), row.toInt())
    }

    fun isOnGrid(pos: Position): Boolean {
        return (pos.row in 0 until rows) && (pos.column in 0 until columns)
    }

    /**
     * @param posX horizontal screen pixel coordinates
     * @param posY vertical screen pixel coordinates
     * @return Tile [Position] in the grid
     */
    fun getField(posX: Double, posY: Double): Position {
        return getField(Point(posX, posY))
    }

    /**
     * Position in the grid
     */
    data class Position(val column: Int, val row: Int) : IPoint by Point(column, row)

}