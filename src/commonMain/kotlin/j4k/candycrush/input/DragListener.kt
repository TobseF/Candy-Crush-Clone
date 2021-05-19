package j4k.candycrush.input

import com.soywiz.korev.MouseEvent
import com.soywiz.korge.component.MouseComponent
import com.soywiz.korge.view.View
import com.soywiz.korge.view.Views
import com.soywiz.korma.geom.IPoint
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.distanceTo

class DragListener(
    override val view: View,
    private val maximumDragDistance: Int,
    private val dragEventListener: DragEventListener
) : MouseComponent {

    private var start = Point.Zero
    private var end = Point.Zero

    private fun dragDistance() = start.distanceTo(end)

    data class DragEvent(val start: IPoint, val end: IPoint)

    private fun reset() {
        start = Point.Zero
        end = Point.Zero
    }

    interface DragEventListener {
        fun onDragEvent(dragEvent: DragEvent)
    }

    override fun onMouseEvent(views: Views, event: MouseEvent) {
        when (event.type) {
            MouseEvent.Type.DOWN -> {
                start = event.point()
            }
            MouseEvent.Type.DRAG, MouseEvent.Type.MOVE -> {
                if (startedDrag()) {
                    end = event.point()
                    if (dragDistance() > maximumDragDistance) {
                        notifyDragListener()
                        reset()
                    }
                }
            }
            MouseEvent.Type.UP -> {
                end = event.point()
                if (startedDrag()) {
                    notifyDragListener()
                    reset()
                }
            }
            else -> {
                // Ignore all other mouse events
            }
        }
    }

    fun MouseEvent.point() = project(Point(this.x, y))

    fun project(point: Point): Point {
        return view.globalToLocalXY(point.x, point.y, point)
    }

    private fun startedDrag() = start != Point.Zero

    private fun notifyDragListener() {
        dragEventListener.onDragEvent(DragEvent(start, end))
    }

}