package j4k.candycrush.lib

import com.soywiz.korge.view.Stage

interface Loadable {
    val stage: Stage
    suspend fun load()
}