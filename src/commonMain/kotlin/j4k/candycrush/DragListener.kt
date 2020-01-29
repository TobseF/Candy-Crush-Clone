package j4k.candycrush

import com.soywiz.korev.MouseEvent
import com.soywiz.korev.TouchEvent
import com.soywiz.korge.component.MouseComponent
import com.soywiz.korge.component.TouchComponent
import com.soywiz.korge.view.View
import com.soywiz.korge.view.Views
import com.soywiz.korma.geom.IPoint
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.distanceTo

class DragListener(override val view: View,
        private val maximumDragDistance: Int,
        private val dragEventListener: DragEventListener) : TouchComponent, MouseComponent {

    private var start = Point.Zero
    private var end = Point.Zero

    private fun dragDistance() = start.distanceTo(end)

    data class DragEvent(val start: IPoint, val end: IPoint) {
        fun distance() = start.distanceTo(end)
    }

    fun reset() {
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
        }
    }

    private fun MouseEvent.point() = Point(x, y)

    private fun startedDrag() = start != Point.Zero

    private fun notifyDragListener() {
        dragEventListener.onDragEvent(DragEvent(start, end))
    }

    override fun onTouchEvent(views: Views, e: TouchEvent) {
        when (e.type) {
            TouchEvent.Type.START -> print("start")
            TouchEvent.Type.MOVE -> print("start")
            TouchEvent.Type.END -> {
                print("end")
                val touch = e.touches.first()
                println(touch.start.distanceTo(touch.current))
            }
        }

    }

}