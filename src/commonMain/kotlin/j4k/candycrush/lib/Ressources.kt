package j4k.candycrush.lib

import com.soywiz.korim.bitmap.*
import com.soywiz.korim.font.*
import com.soywiz.korim.format.*
import com.soywiz.korinject.*
import com.soywiz.korio.file.std.*

suspend fun loadImage(fileName: String): Bitmap = resourcesVfs["images/$fileName"].readBitmap()

suspend fun loadFont(fileName: String): BitmapFont = resourcesVfs["fonts/$fileName"].readBitmapFont()

suspend fun loadNinePatch(fileName: String): NinePatchBitmap32 = resourcesVfs["images/$fileName"].readNinePatch()

class Ressources : AsyncDependency {

    companion object {
        operator fun invoke(injector: AsyncInjector) {
            injector.mapSingleton { Ressources() }
        }
    }

    lateinit var fontCandy: BitmapFont
    lateinit var fontSmall: BitmapFont
    lateinit var imageButton: Bitmap
    lateinit var imageBackground: Bitmap
    lateinit var messageBox: NinePatchBitmap32

    lateinit var imageGuiMusicOn: Bitmap
    lateinit var imageGuiMusicOff: Bitmap
    lateinit var imageGuiSoundOn: Bitmap
    lateinit var imageGuiSoundOff: Bitmap
    lateinit var imageGuiSettings: Bitmap
    lateinit var imageGuiSettingsOn: Bitmap

    override suspend fun init() {
        imageButton = loadImage("button.png")
        imageBackground = loadImage("background.png")
        imageGuiMusicOn = loadImage("gui_music_on.png")
        imageGuiMusicOff = loadImage("gui_music_off.png")
        imageGuiSoundOn = loadImage("gui_sound_on.png")
        imageGuiSoundOff = loadImage("gui_sound_off.png")
        imageGuiSettings = loadImage("gui_settings.png")
        imageGuiSettingsOn = loadImage("gui_settings_on.png")

        fontCandy = loadFont("candy.fnt")
        fontSmall = loadFont("candy-small.fnt")

        messageBox = loadNinePatch("message_box.9.png")
    }

}
