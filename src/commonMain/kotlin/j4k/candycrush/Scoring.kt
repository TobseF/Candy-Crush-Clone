package j4k.candycrush

import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.TileCell

interface TileDeletionListener {
    /**
     * Triggered after the deletion of tiles
     */
    fun onTilesDeletion(rush: Int, tiles: List<TileCell>)
}

interface ScoreListener {
    /**
     * Triggered on a new score
     */
    fun onScore(score: Int, multiplicator: Int = 1, pos: Position)
}

/**
 * Gives score points for [onTilesDeletion] events. Informs a [ScoreListener] for new additional score value.
 */
class Scoring : TileDeletionListener {

    private val scorePerTile = 20

    val scoreListener = mutableListOf<ScoreListener>()

    override fun onTilesDeletion(rush: Int, tiles: List<TileCell>) {
        val newScore = calculateScore(tiles.size, rush)
        val center = tiles[tiles.size / 2]
        onNewScore(newScore, rush, center.position)
    }

    private fun onNewScore(score: Int, multiplicator: Int = 1, pos: Position) {
        scoreListener.forEach { it.onScore(score, multiplicator, pos) }
    }

    fun calculateScore(numberOfBalls: Int, rush: Int): Int {
        return numberOfBalls * scorePerTile * rush
    }

}