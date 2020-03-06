package j4k.candycrush

import j4k.candycrush.lib.EventBus
import j4k.candycrush.model.Level
import j4k.candycrush.model.Tile
import j4k.candycrush.model.TileCell

class LevelCheck(val level: Level, val bus: EventBus) {

    private var totalScore = 0
    private var moves = 0

    private val tileCounters: MutableMap<Tile, Int> = mutableMapOf()
    private val tileGoals: Map<Tile, Int> = level.tileObjectives.map { it.tile to it.goal }.toMap()

    init {
        bus.register<NewScoreEvent> { onScore(it) }
        bus.register<TileDeletionEvent> { countTiles(it.tiles) }
        bus.register<SwapTileEvent> { onTileSwapTileEvent() }
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

    fun onScore(score: NewScoreEvent) {
        totalScore += score.score
        if (failed() || reachedGoals()) {
            bus.send(GameOverEvent())
        }
    }

    fun onTileSwapTileEvent() {
        moves++
    }

    fun reset() {
        moves = 0
        totalScore = 0
        tileCounters.clear()
    }

}