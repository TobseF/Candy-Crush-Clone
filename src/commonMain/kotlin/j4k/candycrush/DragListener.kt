package j4k.candycrush

import com.soywiz.korev.MouseEvent
import com.soywiz.korev.TouchEvent
import com.soywiz.korge.component.MouseComponent
import com.soywiz.korge.component.TouchComponent
import com.soywiz.korge.view.View
import com.soywiz.korge.view.Views
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.distanceTo

class DragListener(override val view: View) : TouchComponent, MouseComponent {
    private var start = Point.Zero
    private var end = Point.Zero

    override fun onMouseEvent(views: Views, event: MouseEvent) {
        when (event.type) {
            MouseEvent.Type.DOWN -> start = Point(event.x, event.y)
            MouseEvent.Type.DRAG -> {
                end = Point(event.x, event.y)
                println(start.distanceTo(end))
            }
            MouseEvent.Type.UP -> {
                end = Point(event.x, event.y)
                println(start.distanceTo(end))
            }
        }
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