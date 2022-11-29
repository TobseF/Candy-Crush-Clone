package j4k.candycrush.compontens

import com.soywiz.korge.input.*
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.*

class CheckBox(
    bitmapOn: Bitmap,
    bitmapOff: Bitmap,
    bitmapHover: Bitmap? = null,
    initial: Boolean = true,
    var action: suspend (Boolean) -> Unit = {}
) : Container() {

    private var checked: Boolean = initial

    private val on = Image(bitmapOn)
    private val off = Image(bitmapOff)
    private val hover = bitmapHover?.let(::Image)

    init {
        addChild(off)
        addChild(on)
        if (hover != null) {
            addChild(hover)
            onOver {
                hover.visible = true
            }
            onOut {
                hover.visible = false
            }
        }
        updateState()
        onClick {
            toggle()
        }
    }

    suspend fun toggle() {
        checked = !checked
        updateState()
        action.invoke(checked)
    }

    private fun updateState() {
        on.visible = checked
        off.visible = !checked
    }
}
