package j4k.candycrush.math

import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.minus

class PositionGrid(val x: Int = 0, val y: Int = 0, val coulmns: Int, val rows: Int, val size: Int, val margin: Int) {

    private val distance = size + margin
    private val width = coulmns * distance
    private val height = rows * distance

    fun getPosition(column: Int, row: Int): Point {
        return Point(x + (column * distance), y + (row * distance))
    }

    fun getField(posX: Int, posY: Int): Position {
        return getField(posX.toDouble(), posY.toDouble())
    }

    fun getField(posX: Double, posY: Double): Position {
        val position = Point(posX, posY).minus(Point(x, y))
        val column = position.x / distance
        val row = position.y / distance
        return Position(column.toInt(), row.toInt())
    }

    data class Position(val x: Int, val y: Int)


}