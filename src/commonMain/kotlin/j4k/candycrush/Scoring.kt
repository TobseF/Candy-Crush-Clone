package j4k.candycrush

import j4k.candycrush.math.PositionGrid
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
    fun onScore(score: Int, multiplicator: Int = 1, pos: PositionGrid.Position)
}

/**
 * Gives score points for [onTilesDeletion] events. Informs a [ScoreListener] for new additional score value.
 */
class Scoring(val scoreListener: ScoreListener) : TileDeletionListener {

    private val scorePerTile = 20

    override fun onTilesDeletion(rush: Int, tiles: List<TileCell>) {
        val newScore = calculateScore(tiles.size, rush)
        val center = tiles[tiles.size / 2]
        scoreListener.onScore(newScore, rush, center.position)
    }

    fun calculateScore(numberOfBalls: Int, rush: Int): Int {
        return numberOfBalls * scorePerTile * rush
    }

}