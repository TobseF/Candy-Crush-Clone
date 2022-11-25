package j4k.candycrush.input

import com.soywiz.korev.MouseEvent
import com.soywiz.korge.component.MouseComponent
import com.soywiz.korge.view.*
import com.soywiz.korma.geom.IPoint
import com.soywiz.korma.geom.Point

class DragListener(
    override val view: View,
    private val maximumDragDistance: Int,
    private val dragEventListener: DragEventListener
) : MouseComponent {

    private var start : Point = Point()
    private var end : Point = Point()

    private fun dragDistance() = start.distanceTo(end)

    data class DragEvent(val start: IPoint, val end: IPoint)

    private fun reset() {
        start.setToZero()
        end.setToZero()
    }

    interface DragEventListener {
        fun onDragEvent(dragEvent: DragEvent)
    }

    override fun onMouseEvent(views: Views, event: MouseEvent) {
        when (event.type) {
            MouseEvent.Type.DOWN -> {
                start.setToMouseXY(views)
            }
            MouseEvent.Type.DRAG, MouseEvent.Type.MOVE -> {
                if (startedDrag()) {
                    end.setToMouseXY(views)
                    if (dragDistance() > maximumDragDistance) {
                        notifyDragListener()
                        reset()
                    }
                }
            }
            MouseEvent.Type.UP -> {
                end.setToMouseXY(views)
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

    private fun Point.setToMouseXY(views: Views): Point {
        return view.localMouseXY(views,this)
    }

    private fun startedDrag() = start != Point.Zero

    private fun notifyDragListener() {
        dragEventListener.onDragEvent(DragEvent(start, end))
    }

}
