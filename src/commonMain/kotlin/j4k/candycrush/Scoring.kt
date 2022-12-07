package j4k.candycrush

import com.soywiz.korinject.*
import j4k.candycrush.lib.*

/**
 * Gives score points for [onTilesDeletion] events. Sends a [NewScoreEvent] for every new additional score value.
 */
class Scoring(val bus: EventBus) {

    companion object {
        suspend operator fun invoke(injector: AsyncInjector): Scoring {
            injector.run {
                return Scoring(get())
            }
        }
    }

    private val scorePerTile = 20

    init {
        bus.register<TileDeletionEvent> { it.onTilesDeletion() }
    }

    private fun TileDeletionEvent.onTilesDeletion() {
        val newScore = calculateScore(tiles.size, rush)
        val center = tiles[tiles.size / 2]
        bus.send(NewScoreEvent(newScore, rush, center.position))
    }

    private fun calculateScore(numberOfBalls: Int, rush: Int): Int {
        return numberOfBalls * scorePerTile * rush
    }

}
