import com.soywiz.korge.input.onClick
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.image
import com.soywiz.korge.view.ninePatch
import com.soywiz.korge.view.position
import com.soywiz.korim.bitmap.NinePatchBitmap32
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korma.geom.Point
import j4k.candycrush.GameOverEvent
import j4k.candycrush.NextLevelEvent
import j4k.candycrush.ResetGameEvent
import j4k.candycrush.lib.*


class GameOverComponent(bus: EventBus, res: Ressources, resolution: Resolution) : Container() {

    init {
        bus.register<GameOverEvent> { visible = true }
        visible = false
        val center = resolution.center()

        val messageBox = MessageBox(450, 400, center, res.messageBox)
        addChild(messageBox)
        val shadowCorrection = 10
        val textPos = Point(center.x - shadowCorrection, messageBox.pos.y)
        textCentered(text = "Game Over", textSize = 64.0, font = res.fontCandy, center = textPos.top(80))

        addChild(CandyButton("Restart", ResetGameEvent(), bus, res, textPos.top(200), this::hide))
        addChild(CandyButton("Next", NextLevelEvent(), bus, res, textPos.top(310), this::hide))
    }

    companion object {
        suspend operator fun invoke(injector: AsyncInjector): GameOverComponent {
            injector.run {
                return GameOverComponent(get(), get(), get())
            }
        }
    }

    fun hide() {
        visible = false
    }

    class MessageBox(width: Number, height: Number, center: Point, texture: NinePatchBitmap32) : Container() {
        init {
            val pos = Point(center.x - width.toDouble() / 2, center.y - height.toDouble() / 2)
            position(pos)
            ninePatch(ninePatch = texture, width = width.toDouble(), height = height.toDouble()) {}
        }
    }

    class CandyButton(text: String, event: Any, val bus: EventBus, res: Ressources, point: Point, run: () -> Unit) :
            Container() {

        init {
            val texture = res.imageButton
            val point1 = texture.centered(point)
            position(point1)
            image(texture = texture) {
                val imageBounds = getLocalBounds()
                val center = Point(imageBounds.width / 2, imageBounds.height / 2)
                textCentered(text = text, textSize = 55.0, font = res.fontSmall, center = center)
                onClick {
                    run.invoke()
                    bus.send(event)
                }
            }
        }
    }


}