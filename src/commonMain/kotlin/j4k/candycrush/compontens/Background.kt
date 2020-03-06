package j4k.candycrush.compontens

import com.soywiz.korge.component.Component
import com.soywiz.korge.view.Stage
import com.soywiz.korge.view.image
import j4k.candycrush.lib.Ressources

class Background(override val view: Stage, res: Ressources) : Component {

    init {
        view.image(res.imageBackground)
    }

}