package j4k.candycrush.input

import com.soywiz.korev.*
import com.soywiz.korge.component.*
import com.soywiz.korge.view.*
import com.soywiz.korinject.*
import com.soywiz.korma.geom.*
import j4k.candycrush.*
import j4k.candycrush.input.DragListener.DragEvent
import j4k.candycrush.lib.*
import j4k.candycrush.math.*
import j4k.candycrush.math.PositionGrid.Position

class MoveTileObserver(
    override val view: Stage,
    val bus: EventBus,
    private val grid: PositionGrid
) : DragListener.DragEventListener, MouseComponent {

    companion object {
        suspend operator fun invoke(injector: AsyncInjector): MoveTileObserver {
            injector.run {
                return MoveTileObserver(get(), get(), get())
            }
        }
    }

    private val dragListener = DragListener(view, grid.tileSize, this)

    override fun onMouseEvent(views: Views, event: MouseEvent) {
        dragListener.onMouseEvent(views, event)
        if (event.button == MouseButton.RIGHT && event.type == MouseEvent.Type.DOWN) {
            val point = event.point()
            println("field: ${grid.getField(point.x, point.y)}(${point.x},${point.y})")
        }
    }

    fun MouseEvent.point() = project(Point(this.x, y))

    private fun project(point: Point): Point {
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
