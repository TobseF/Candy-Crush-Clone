package j4k.candycrush.lib

import com.soywiz.korge.view.Stage

/**
 * Loads resources during application start.
 */
interface Loadable {
    val stage: Stage
    suspend fun load()
}