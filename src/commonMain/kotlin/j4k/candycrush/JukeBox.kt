package j4k.candycrush

import com.soywiz.korau.sound.AudioStream
import com.soywiz.korau.sound.readAudioStream
import com.soywiz.korio.file.std.resourcesVfs
import j4k.candycrush.lib.Loadable

class JukeBox : Loadable {

    var music_1: AudioStream? = null
    var music_2: AudioStream? = null

    override suspend fun load() {
        //music_1 = newMusic("monkey_drama.mp3")
        //music_2 = newMusic("monkey_island_puzzler.mp3")
        //music_2?.playAndWait()
    }

    private suspend fun newMusic(fileName: String) = resourcesVfs["music/$fileName"].readAudioStream()

}