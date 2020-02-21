package j4k.candycrush

import j4k.candycrush.model.TileCell

interface TileDeletionListener {
    fun onTilesDeletion(rush: Int, tiles: List<TileCell>)
}

class Scoring(val scoreListener: ScoreListener) : TileDeletionListener {

    val scorePerTile = 20

    override fun onTilesDeletion(rush: Int, tiles: List<TileCell>) {
        val newScore = calculateScore(tiles.size, rush)
        val center = tiles.get(tiles.size / 2)
        scoreListener.onScore(newScore, rush, center.position)
    }

    fun calculateScore(numberOfBalls: Int, rush: Int): Int {
        return numberOfBalls * scorePerTile * rush
    }

    fun reset() {
    }

}