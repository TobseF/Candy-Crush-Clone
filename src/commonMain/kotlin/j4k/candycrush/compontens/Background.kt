package j4k.candycrush.compontens

import com.soywiz.korge.component.Component
import com.soywiz.korge.view.Stage
import com.soywiz.korge.view.image
import com.soywiz.korinject.AsyncInjector
import j4k.candycrush.lib.Ressources

class Background(override val view: Stage, res: Ressources) : Component {

    companion object {
        suspend operator fun invoke(injector: AsyncInjector): Background {
            injector.run {
                return Background(get(), get())
            }
        }
    }

    init {
        view.image(res.imageBackground)
    }

}