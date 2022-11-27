package j4k.candycrush.compontens

import com.soywiz.korge.input.*
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.*

class CheckBox(
    bitmapOn: Bitmap,
    bitmapOff: Bitmap,
    initial: Boolean = true,
    var action: suspend (Boolean) -> Unit = {}
) : Container() {

    private var checked: Boolean = initial

    private val on = Image(bitmapOn)
    private val off = Image(bitmapOff)

    init {
        addChild(off)
        addChild(on)
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
