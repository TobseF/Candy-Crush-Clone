package j4k.candycrush.renderer.animation

import com.soywiz.klock.TimeSpan
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.View
import com.soywiz.korma.geom.IPoint
import com.soywiz.korma.interpolation.Easing

suspend fun View.move(point: IPoint, settings: AnimationSettings) {
    return move(point, settings.time, settings.easing)
}

suspend fun View.move(point: IPoint, time: TimeSpan, easing: Easing) {
    return this.tween(this::x[point.x], this::y[point.y], time = time, easing = easing)
}


class AnimationSettings(val time: TimeSpan, val easing: Easing)