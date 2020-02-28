package j4k.candycrush.audio

import com.soywiz.klock.seconds
import com.soywiz.korau.sound.NativeSound
import com.soywiz.korau.sound.NativeSoundChannel
import com.soywiz.korau.sound.readNativeSound
import com.soywiz.korge.view.Stage
import com.soywiz.korio.async.delay
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs
import j4k.candycrush.lib.Loadable

/**
 * Jukebox which plays background music in a random order.
 */
class JukeBox(override val stage: Stage) : Loadable {

    private var playing: NativeSoundChannel? = null
    private val playList = mutableListOf<NativeSound>()
    private var started = false
    var activated = true

    override suspend fun load() {
        if (activated) {
            playList += newMusic("monkey_drama.mp3")
            playList += newMusic("monkey_island_puzzler.mp3")
        }
    }

    fun play() {
        if (activated && !started) {
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
            delay(nextSong.length.coerceAtLeast(2.seconds))
            playing?.stop()
        }
    }

    fun stop() {
        playing?.stop()
        started = false
    }

}

private suspend fun newMusic(fileName: String): NativeSound = resourcesVfs["music/$fileName"].readNativeSound(streaming = true)