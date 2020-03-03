package j4k.candycrush.input

import com.soywiz.korev.MouseButton
import com.soywiz.korev.MouseEvent
import com.soywiz.korev.TouchEvent
import com.soywiz.korge.component.MouseComponent
import com.soywiz.korge.component.TouchComponent
import com.soywiz.korge.view.View
import com.soywiz.korge.view.Views
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.distanceTo
import j4k.candycrush.DragTileEvent
import j4k.candycrush.input.DragListener.DragEvent
import j4k.candycrush.lib.EventBus
import j4k.candycrush.math.PositionGrid
import j4k.candycrush.math.PositionGrid.Position

class MoveTileObserver(override val view: View,
        val bus: EventBus,
        private val grid: PositionGrid) : DragListener.DragEventListener, TouchComponent, MouseComponent {

    private val dragListener = DragListener(view, grid.tileSize, this)

    override fun onTouchEvent(views: Views, e: TouchEvent) {
        dragListener.onTouchEvent(views, e)
    }

    override fun onMouseEvent(views: Views, event: MouseEvent) {
        dragListener.onMouseEvent(views, event)
        if (event.button == MouseButton.RIGHT && event.type == MouseEvent.Type.DOWN) {
            val point = event.point()
            println("field: ${grid.getField(point.x, point.y)}(${point.x},${point.y})")
        }
    }

    fun MouseEvent.point() = project(Point(this.x, y))

    fun project(point: Point): Point {
        return view.globalToLocalXY(point.x, point.y, point)
    }

    override fun onDragEvent(dragEvent: DragEvent) {
        val start: Position = grid.getField(dragEvent.start)
        val end: Position = grid.getField(dragEvent.end)
        val distance = start.distanceTo(end)

        if (distance == 1.0 && grid.isOnGrid(start) && grid.isOnGrid(end)) {
            bus.send(DragTileEvent(start, end))
        }
    }

}