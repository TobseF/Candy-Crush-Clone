package j4k.candycrush

import j4k.candycrush.input.SwapTileListener
import j4k.candycrush.math.PositionGrid
import j4k.candycrush.model.Level
import j4k.candycrush.model.Tile
import j4k.candycrush.model.TileCell

class LevelCheck(val level: Level) : TileDeletionListener, SwapTileListener, ScoreListener {

    private var totalScore = 0
    var moves = 0

    private val tileCounters: MutableMap<Tile, Int> = mutableMapOf()
    private val tileGoals: Map<Tile, Int> = level.tileObjectives.map { it.tile to it.goal }.toMap()

    override fun onTilesDeletion(rush: Int, tiles: List<TileCell>) {
        countTiles(tiles)
    }

    val remaining: Int get() = ((level.maxMoves ?: 0) - moves).coerceAtLeast(0)

    fun failed(): Boolean {
        if (level.maxMoves != null && moves > level.maxMoves) {
            return true
        }
        return false
    }

    fun reachedGoals(): Boolean {
        return level.tileObjectives.map { it.tile }.all { it.reachedGoal() }
    }

    private fun Tile.reachedGoal(): Boolean {
        val goal = tileGoals[this]
        return if (goal == null) {
            false
        } else {
            getCount(this) > goal
        }
    }

    private fun countTiles(tiles: List<TileCell>) {
        tiles.map { it.tile }.forEach { tile ->
            tileCounters[tile] = getCount(tile) + 1
        }
    }

    fun getCount(tile: Tile) = tileCounters.getOrElse(tile) { 0 }

    fun getRemainingCount(tile: Tile) = ((tileGoals[tile] ?: 0) - getCount(tile)).coerceAtLeast(0)

    override fun onScore(score: Int, multiplicator: Int, pos: PositionGrid.Position) {
        totalScore += score
    }

    override fun onTileSwapTileEvent(posA: PositionGrid.Position, posB: PositionGrid.Position) {
        moves++
    }

}