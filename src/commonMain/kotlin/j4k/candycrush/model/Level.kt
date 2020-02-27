package j4k.candycrush.model

import j4k.candycrush.GameMechanics

class Level(levelData: String, reserveData: String? = null) {

    val field: GameField = GameField.fromString(levelData)
    val reserve: GameMechanics? = reserveData?.let { GameMechanics(GameField.fromString(it)) }

    class Objective(val type: String)

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