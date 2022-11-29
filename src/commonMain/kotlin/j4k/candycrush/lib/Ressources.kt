package j4k.candycrush.lib

import com.soywiz.korim.bitmap.*
import com.soywiz.korim.font.*
import com.soywiz.korim.format.*
import com.soywiz.korinject.*
import com.soywiz.korio.file.std.*

suspend fun loadImage(fileName: String): Bitmap = resourcesVfs[fileName].readBitmap()

suspend fun loadFont(fileName: String): BitmapFont = resourcesVfs[fileName].readBitmapFont()

suspend fun loadNinePatch(fileName: String): NinePatchBitmap32 = resourcesVfs[fileName].readNinePatch()

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
    lateinit var imageGuiMoves: Bitmap
    lateinit var messageBox: NinePatchBitmap32

    lateinit var imageGuiMusicOn: Bitmap
    lateinit var imageGuiMusicOff: Bitmap
    lateinit var imageGuiSoundOn: Bitmap
    lateinit var imageGuiSoundOff: Bitmap
    lateinit var imageGuiSettings: Bitmap
    lateinit var imageGuiSettingsOn: Bitmap
    lateinit var imageGuiSettingsHover: Bitmap
    lateinit var imageGuiRestart: Bitmap
    lateinit var imageGuiRestartClick: Bitmap
    lateinit var imageGuiRestartHover: Bitmap
    lateinit var imageGuiShuffle: Bitmap
    lateinit var imageGuiShuffleClick: Bitmap
    lateinit var imageGuiShuffleHover: Bitmap

    override suspend fun init() {
        // Using full relative paths to get IDE support

        imageButton = loadImage("images/button.png")
        imageBackground = loadImage("images/background.png")
        imageGuiMoves = loadImage("images/text_arrows_move.png")
        imageGuiMusicOn = loadImage("images/gui_music_on.png")
        imageGuiMusicOff = loadImage("images/gui_music_off.png")
        imageGuiSoundOn = loadImage("images/gui_sound_on.png")
        imageGuiSoundOff = loadImage("images/gui_sound_off.png")
        imageGuiSettings = loadImage("images/gui_settings.png")
        imageGuiSettingsOn = loadImage("images/gui_settings_on.png")
        imageGuiSettingsHover = loadImage("images/gui_settings_hover.png")
        imageGuiRestart = loadImage("images/gui_restart.png")
        imageGuiRestartClick = loadImage("images/gui_restart_click.png")
        imageGuiRestartHover = loadImage("images/gui_restart_hover.png")
        imageGuiShuffle = loadImage("images/gui_shuffle.png")
        imageGuiShuffleClick = loadImage("images/gui_shuffle_click.png")
        imageGuiShuffleHover = loadImage("images/gui_shuffle_hover.png")

        fontCandy = loadFont("fonts/candy.fnt")
        fontSmall = loadFont("fonts/candy-small.fnt")

        messageBox = loadNinePatch("images/message_box.9.png")
    }

}
