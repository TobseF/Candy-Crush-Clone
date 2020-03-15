package j4k.candycrush.audio

import com.soywiz.klock.seconds
import com.soywiz.korau.sound.playAndWait
import com.soywiz.korau.sound.readMusic
import com.soywiz.korge.view.Stage
import com.soywiz.korinject.AsyncDependency
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korio.async.delay
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs

/**
 * Jukebox which plays background music in a random order.
 */
class JukeBox(val stage: Stage) : AsyncDependency {

    companion object {
        suspend operator fun invoke(injector: AsyncInjector): JukeBox {
            val jukeBox = JukeBox(injector.get()).load()
            injector.mapSingleton { jukeBox }
            return jukeBox
        }
    }

    override suspend fun init() {}

    suspend fun load(): JukeBox {
        play()
        return this
    }

    suspend fun play() {

        //val music = resourcesVfs["music/monkey_drama.mp3"].readMusic() //move it to here - no music
        stage.launch {
            val music = resourcesVfs["music/monkey_drama.mp3"].readMusic()
            while (true) {
                delay(1.seconds)
                music.playAndWait()
            }
        }
    }


}
