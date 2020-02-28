package j4k.candycrush.model

import j4k.candycrush.GameMechanics

/**
 * A level containing the initial [GameField] and an optinal tile reserve.
 */
class Level(levelData: String,
        reserveData: String? = null,
        val minScore: Int? = null,
        val maxMoves: Int? = null,
        val maxTime: TimeObjective? = null,
        val tileObjectives: List<TileObjective> = emptyList()) {

    val field: GameField = GameField.fromString(levelData)
    val reserve: GameMechanics? = reserveData?.let { GameMechanics(GameField.fromString(it)) }

    data class TileObjective(val tile: Tile, val goal: Int)
    data class TimeObjective(val minutes: Int = 0, val seconds: Int = 0)

    fun getNextTile(column: Int): Tile {
        if (reserve != null) {
            val cell = reserve.field.getTileCellOnGround(column)
            if (cell.tile.isNotTile()) {
                return Tile.randomTile()
            }
            reserve.removeTile(cell.position)
            reserve.dropToGround(column)
            return cell.tile
        } else {
            return Tile.randomTile()
        }
    }

    override fun toString() = "$reserve+\n+$field"

}