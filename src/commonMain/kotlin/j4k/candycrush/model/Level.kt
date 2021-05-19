package j4k.candycrush.model

import j4k.candycrush.GameMechanics

/**
 * A level containing the initial [GameField] and an optional tile reserve.
 */
data class Level(val levelData: String,
                 val reserveData: String? = null,
                 val minScore: Int? = null,
                 val maxMoves: Int? = null,
                 val maxTime: TimeObjective? = null,
                 val tileObjectives: List<TileObjective> = emptyList()) {

    val field: GameField = GameField.fromString(levelData)
    var reserve: GameMechanics? = loadReserve()

    data class TileObjective(val tile: Tile, val goal: Int)
    data class TimeObjective(val minutes: Int = 0, val seconds: Int = 0)

    fun getNextTile(column: Int): Tile {
        return reserve?.run {
            val cell = field.getTileCellOnGround(column)
            if (cell.tile.isNotTile()) {
                return Tile.randomTile()
            }
            removeTile(cell.position)
            dropToGround(column)
            return cell.tile
        } ?: Tile.randomTile()
    }

    override fun toString() = "$reserve+\n+$field"

    private fun loadReserve() = reserveData?.let { GameMechanics(GameField.fromString(it)) }

    fun reset() {
        field.reload(levelData)
        reserve = loadReserve()
    }


}