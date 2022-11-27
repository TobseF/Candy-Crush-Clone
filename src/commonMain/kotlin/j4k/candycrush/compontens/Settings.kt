package j4k.candycrush.compontens

import com.soywiz.korge.view.*
import com.soywiz.korinject.*
import j4k.candycrush.audio.*
import j4k.candycrush.lib.*

class Settings(
    private val view: View,
    private val res: Ressources,
    private val soundMachine: SoundMachine,
    private val jukeBox: JukeBox
) : Container() {

    private val enabledSoundsOnStart = true
    private val enabledMusicOnStart = false

    companion object {
        suspend operator fun invoke(injector: AsyncInjector): Settings {
            return Settings(injector.get(), injector.get(), injector.get(), injector.get()).also {
                injector.mapInstance(it)
                it.init()
            }
        }
    }

    suspend fun init() {
        val padding = 15.0
        val size = 80.0

        val settings = CheckBox(
            res.imageGuiSettingsOn, res.imageGuiSettings,
            initial = false
        ).apply {
            setSizeScaled(size, size)
            y = padding
        }.addTo(this)

        val sounds = CheckBox(res.imageGuiSoundOn, res.imageGuiSoundOff, initial = enabledSoundsOnStart) { activated ->
            soundMachine.enabled = activated
        }.apply {
            setSizeScaled(size, size)
            y = padding * 2 + size
            visible = false
        }.addTo(this)

        val music = CheckBox(res.imageGuiMusicOn, res.imageGuiMusicOff, initial = enabledMusicOnStart) { activated ->
            if (activated) {
                jukeBox.play()
            } else {
                jukeBox.stop()
            }
        }.apply {
            setSizeScaled(size, size)
            y = padding * 3 + size * 2
            visible = false
        }.addTo(this)

        settings.action = { checked ->
            music.visible = checked
            sounds.visible = checked
        }
        alignRightToRightOf(view, padding)
    }
}
