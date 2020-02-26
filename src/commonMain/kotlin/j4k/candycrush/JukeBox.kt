package j4k.candycrush

import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.NativeSoundChannel
import com.soywiz.korau.sound.readNativeSound
import com.soywiz.korge.view.Stage
import com.soywiz.korio.async.delay
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs
import j4k.candycrush.lib.Loadable

class JukeBox(override val stage: Stage) : Loadable {

    private var playing: NativeSoundChannel? = null
    private val playList = mutableListOf<NativeSound>()
    private var started = false

    override suspend fun load() {
        playList += newMusic("monkey_drama_enc.mp3")
        playList += newMusic("monkey_island_puzzler.mp3")
    }

    fun play() {
        if (!started) {
            stage.launch {
                loopMusicPlaylist()
            }
        }
    }

    private suspend fun loopMusicPlaylist() {
        started = true
        while (started) {
            val nextSong: NativeSound = playList.random()
            playing = nextSong.play()
            delay(nextSong.length)
            playing?.stop()
        }
    }

    fun stop() {
        playing?.stop()
        started = false
    }

}

private suspend fun newMusic(fileName: String): NativeSound = resourcesVfs["music/$fileName"].readNativeSound(streaming = true)