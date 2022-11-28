package j4k.candycrush.compontens

import com.soywiz.korge.input.*
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.*

class Button(
    imageNormal: Bitmap,
    imageHover: Bitmap,
    imageClicked: Bitmap,
    var action: suspend () -> Unit = {}
) : Container() {

    private val normal = Image(imageNormal)
    private val hover = Image(imageHover)
    private val clicked = Image(imageClicked)

    init {
        addChild(normal)
        addChild(hover)
        addChild(clicked)
        hover.visible = false
        clicked.visible = false

        onClick {
            action.invoke()
        }
        onDown {
            clicked.visible = true
        }
        onUp {
            clicked.visible = false
        }
        onOver {
            hover.visible = true
        }
        onOut {
            hover.visible = false
            clicked.visible = false
        }
    }
}
