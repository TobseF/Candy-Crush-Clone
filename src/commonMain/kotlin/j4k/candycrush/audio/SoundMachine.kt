package j4k.candycrush.audio

import com.soywiz.korau.sound.*
import com.soywiz.korge.view.*
import com.soywiz.korinject.*
import com.soywiz.korio.async.*
import com.soywiz.korio.file.std.*

/**
 * Plays game sounds.
 */
class SoundMachine(private val views: Views?) : AsyncDependency {

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

    var enabled = true

    companion object {
        operator fun invoke(injector: AsyncInjector, apply: SoundMachine.() -> Unit) {
            injector.mapSingleton { SoundMachine(get() as Views).also(apply) }
        }
    }

    private suspend fun newSound(fileName: String) = resourcesVfs["sounds/$fileName"].readSound()

    override suspend fun init() {
        if (enabled) {
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
        if (enabled) {
            clear.play()
        }
    }

    private fun Sound?.play() =
        views?.launch {
            this?.play()
        }

    fun playWrongMove() {
        if (enabled) {
            wrongMove.play()
        }
    }

    fun playDropGround() {
        if (enabled) {
            dopGround.play()
        }
    }

    fun playMulti(multi: Int) {
        if (enabled) {
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
