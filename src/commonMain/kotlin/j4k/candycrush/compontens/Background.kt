package j4k.candycrush.compontens

import com.soywiz.korge.component.*
import com.soywiz.korge.view.*
import com.soywiz.korinject.AsyncInjector
import j4k.candycrush.lib.Ressources

class Background(res: Ressources) : Container() {

    companion object {
        suspend operator fun invoke(injector: AsyncInjector): Background {
            injector.run {
                return Background(get())
            }
        }
    }

    init {
        addChild(Image(res.imageBackground))
    }

}
