package j4k.candycrush.math

import com.soywiz.korma.geom.IPoint
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.minus

/**
 * Creates a grid and matches screen coordinates with it.
 */
class PositionGrid(val x: Int = 0, val y: Int = 0, val columns: Int, val rows: Int, val tileSize: Int) {

    /**
     * @param column position of the grid
     * @param row position of the grid
     * @return The [Point] wit screen coordinates
     */
    fun getPosition(column: Int, row: Int): Point {
        return Point(x + (column * tileSize), y + (row * tileSize))
    }

    /**
     * @param column position of the grid
     * @param row position of the grid
     * @return The [Point] wit screen coordinates of the cell center
     */
    fun getCenterPosition(column: Number, row: Number): Point {
        return Point(x + (column.toInt() * tileSize) + (tileSize / 2), y + (row.toInt() * tileSize) + (tileSize / 2))
    }

    /**
     * @param position with column and row
     * @return The [Point] wit screen coordinates of the cell center
     */
    fun getCenterPosition(position: Position): Point {
        return getCenterPosition(position.x, position.y)
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
        val column = relativePosition.x / tileSize
        val row = relativePosition.y / tileSize
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
     * Position in the [PositionGrid]
     */
    data class Position(val column: Int = 0, val row: Int = 0) : IPoint by Point(column, row) {
        fun getIndex(): Int {
            return column + (row * column)
        }

        fun horizontal(steps: Int): Position {
            return Position(this.column + steps, this.row)
        }

        fun vertical(steps: Int): Position {
            return Position(this.column, this.row + steps)
        }

        fun left(steps: Int = 1): Position {
            return Position(this.column - steps, this.row)
        }

        fun right(steps: Int = 1): Position {
            return Position(this.column + steps, this.row)
        }

        fun top(steps: Int = 1): Position {
            return Position(this.column, this.row - steps)
        }

        fun moveToStart(): Position {
            return Position(this.column, -1)
        }

        fun bottom(steps: Int = 1): Position {
            return Position(this.column, this.row + steps)
        }
    }

    fun size() = columns * rows

}