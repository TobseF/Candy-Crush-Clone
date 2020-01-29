package j4k.candycrush

import com.soywiz.korev.MouseButton
import com.soywiz.korev.MouseEvent
import com.soywiz.korev.TouchEvent
import com.soywiz.korge.component.MouseComponent
import com.soywiz.korge.component.TouchComponent
import com.soywiz.korge.view.View
import com.soywiz.korge.view.Views
import com.soywiz.korma.geom.distanceTo
import j4k.candycrush.DragListener.DragEvent
import j4k.candycrush.math.PositionGrid
import j4k.candycrush.math.PositionGrid.Position

class MoveTileObserver(override val view: View, val grid: PositionGrid, val moveTileListener: MoveTileListener) :
        DragListener.DragEventListener,
        TouchComponent,
        MouseComponent {

    data class MoveTileEvent(val start: Position, val end: Position)

    interface MoveTileListener {
        fun onMoveTileEvent(moveTileEvent: MoveTileEvent)
    }

    private val dragListener = DragListener(view, grid.distance, this)

    override fun onTouchEvent(views: Views, e: TouchEvent) {
        dragListener.onTouchEvent(views, e)
    }

    override fun onMouseEvent(views: Views, event: MouseEvent) {
        dragListener.onMouseEvent(views, event)
        if (event.button == MouseButton.RIGHT && event.type == MouseEvent.Type.DOWN) {
            println("field: ${grid.getField(event.x, event.y)}(${event.x},${event.y})")
        }
    }

    override fun onDragEvent(dragEvent: DragEvent) {
        val start: Position = grid.getField(dragEvent.start)
        val end: Position = grid.getField(dragEvent.end)
        val distance = start.distanceTo(end)

        if (distance == 1.0 && grid.isOnGrid(start) && grid.isOnGrid(end)) {
            moveTileListener.onMoveTileEvent(MoveTileEvent(start, end))
        }
    }

}