package j4k.candycrush.audio

import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.readNativeSound
import com.soywiz.korinject.AsyncDependency
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korio.file.std.resourcesVfs

/**
 * Plays game sounds.
 */
class SoundMachine : AsyncDependency {

    /**
     * Removing tiles from the field
     */
    private var clear: NativeSound? = null

    /**
     * Wrong tile move, which will be toggled back
     */
    private var wrongMove: NativeSound? = null

    /**
     * Tile git's the ground. Used for now.
     */
    private var dopGround: NativeSound? = null

    /**
     * Sounds for using a score multiplicator
     */
    private var multi2: NativeSound? = null
    private var multi3: NativeSound? = null
    private var multi4: NativeSound? = null
    private var multi5: NativeSound? = null
    private var multi6: NativeSound? = null

    val playSounds = true

    companion object {
        operator fun invoke(injector: AsyncInjector) {
            injector.mapSingleton { SoundMachine() }
        }
    }

    private suspend fun newSound(fileName: String) = resourcesVfs["sounds/$fileName"].readNativeSound()

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
            clear?.play()
        }
    }

    fun playWrongMove() {
        if (playSounds) {
            wrongMove?.play()
        }
    }

    fun playDropGround() {
        if (playSounds) {
            dopGround?.play()
        }
    }

    fun playMulti(multi: Int) {
        if (playSounds) {
            when (multi) {
                1 -> {
                }
                2 -> multi2?.play()
                3 -> multi3?.play()
                4 -> multi4?.play()
                5 -> multi5?.play()
                6 -> multi6?.play()
                else -> multi6?.play()
            }
        }
    }

}