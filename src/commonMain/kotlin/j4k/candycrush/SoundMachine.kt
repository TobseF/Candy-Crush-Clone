package j4k.candycrush

import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.readNativeSound
import com.soywiz.korge.view.Stage
import com.soywiz.korge.view.Views
import com.soywiz.korio.file.std.resourcesVfs
import j4k.candycrush.lib.Loadable


class SoundMachine(override val stage: Stage) : Loadable {

    private var clear: NativeSound? = null
    private var dopGround: NativeSound? = null
    private var multi_2: NativeSound? = null
    private var multi_3: NativeSound? = null
    private var multi_4: NativeSound? = null
    private var multi_5: NativeSound? = null
    private var multi_6: NativeSound? = null
    private var wrongMove: NativeSound? = null

    val playSounds = true

    private suspend fun newSound(fileName: String) = resourcesVfs["sounds/$fileName"].readNativeSound()

    override suspend fun load() {
        clear = newSound("clear.mp3")
        multi_2 = newSound("multi_2.mp3")
        multi_3 = newSound("multi_3.mp3")
        multi_4 = newSound("multi_4.mp3")
        multi_5 = newSound("multi_5.mp3")
        multi_6 = newSound("multi_6.mp3")
        wrongMove = newSound("wrong_move.mp3")
        dopGround = newSound("drop_ground.mp3")
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

    fun playDrowGround() {
        if (playSounds) {
            dopGround?.play()
        }
    }

    fun playMulti(multi: Int) {
        if (playSounds) {
            when (multi) {
                1 -> nop()
                2 -> multi_2?.play()
                3 -> multi_3?.play()
                4 -> multi_4?.play()
                5 -> multi_5?.play()
                6 -> multi_6?.play()
                else -> multi_6?.play()
            }
        }
    }

    private fun nop() {}


}