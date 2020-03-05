package j4k.candycrush.lib

import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.bitmap.NinePatchBitmap32
import com.soywiz.korim.bitmap.readNinePatch
import com.soywiz.korim.font.BitmapFont
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs

suspend fun loadImage(fileName: String): Bitmap = resourcesVfs["images/$fileName"].readBitmap()
suspend fun loadNinePatch(fileName: String): NinePatchBitmap32 = resourcesVfs["images/$fileName"].readNinePatch()

suspend fun loadFont(fileName: String): BitmapFont = resourcesVfs["fonts/$fileName"].readBitmapFont()
