package j4k.candycrush.audio

import com.soywiz.korau.sound.Sound
import com.soywiz.korau.sound.readSound
import com.soywiz.korge.view.Views
import com.soywiz.korinject.AsyncDependency
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs

/**
 * Plays game sounds.
 */
class SoundMachine(val views: Views?) : AsyncDependency {

    /**
     * Removing tiles from the field
     */
    private var clear: Sound? = null

    /**
     * Wrong tile move, which will be toggled back
     */
    private var wrongMove: Sound? = null

    /**
     * Tile git's the ground. Used for now.
     */
    private var dopGround: Sound? = null

    /**
     * Sounds for using a score multiplicator
     */
    private var multi2: Sound? = null
    private var multi3: Sound? = null
    private var multi4: Sound? = null
    private var multi5: Sound? = null
    private var multi6: Sound? = null

    var playSounds = true

    companion object {
        operator fun invoke(injector: AsyncInjector) {
            injector.mapSingleton { SoundMachine(get() as Views) }
        }
    }

    private suspend fun newSound(fileName: String) = resourcesVfs["sounds/$fileName"].readSound()

    override suspend fun init() {
        if (playSounds) {
            clear = newSound("clear.mp3")
            multi2 = newSound("multi_2.mp3")
            multi3 = newSound("multi_3.mp3")
            multi4 = newSound("multi_4.mp3")
            multi5 = newSound("multi_5.mp3")
            multi6 = newSound("multi_6.mp3")
            wrongMove = newSound("wrong_move.mp3")
            dopGround = newSound("drop_ground.mp3")
        }
    }

    fun playClear() {
        if (playSounds) {
            clear.play()
        }
    }

    private fun Sound?.play() =
        views?.launch {
            this?.play()
        }

    fun playWrongMove() {
        if (playSounds) {
            wrongMove.play()
        }
    }

    fun playDropGround() {
        if (playSounds) {
            dopGround.play()
        }
    }

    fun playMulti(multi: Int) {
        if (playSounds) {
            when (multi) {
                1 -> {
                }
                2 -> multi2.play()
                3 -> multi3.play()
                4 -> multi4.play()
                5 -> multi5.play()
                6 -> multi6.play()
                else -> multi6.play()
            }
        }
    }

}