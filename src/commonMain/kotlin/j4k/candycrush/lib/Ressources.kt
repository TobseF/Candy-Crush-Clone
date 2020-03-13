package j4k.candycrush.lib

import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.bitmap.NinePatchBitmap32
import com.soywiz.korim.bitmap.readNinePatch
import com.soywiz.korim.font.BitmapFont
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korim.format.readBitmap
import com.soywiz.korinject.AsyncInjector
import com.soywiz.korio.file.std.resourcesVfs

suspend fun loadImage(fileName: String): Bitmap = resourcesVfs["images/$fileName"].readBitmap()

suspend fun loadFont(fileName: String): BitmapFont = resourcesVfs["fonts/$fileName"].readBitmapFont()

suspend fun loadNinePatch(fileName: String): NinePatchBitmap32 = resourcesVfs["images/$fileName"].readNinePatch()

class Ressources {

    companion object {
        suspend operator fun invoke(injector: AsyncInjector) {
            injector.mapSingleton {
                Ressources().apply {
                    load()
                }
            }
        }
    }

    lateinit var fontCandy: BitmapFont
    lateinit var fontSmall: BitmapFont
    lateinit var imageButton: Bitmap
    lateinit var imageBackground: Bitmap
    lateinit var messageBox: NinePatchBitmap32

    suspend fun load(): Ressources {
        imageButton = loadImage("button.png")
        imageBackground = loadImage("background.png")

        fontCandy = loadFont("candy.fnt")
        fontSmall = loadFont("candy-small.fnt")

        messageBox = loadNinePatch("message_box.9.png")
        return this
    }


}