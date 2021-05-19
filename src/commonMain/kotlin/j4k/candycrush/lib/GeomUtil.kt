package j4k.candycrush.lib

import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korma.geom.Point
import com.soywiz.korma.geom.Rectangle

fun Bitmap.centered(point: Point): Point = point.sub(this.center())
fun Point.top(marginTop: Number): Point = Point(this.x, this.y + marginTop.toDouble())
fun Bitmap.center(): Point = this.bounds().center()
fun Bitmap.bounds() = Rectangle(0, 0, this.width, this.height)
fun Rectangle.center() = Point(this.width / 2, this.height / 2)