package j4k.candycrush.model

import j4k.candycrush.math.PositionGrid

/**
 * A [Tile] wit additional coordinates (column & row) in the [PositionGrid]
 */
data class TileCell(val tile: Tile, val position: PositionGrid.Position) {
    override fun toString(): String {
        return "${tile.shortName()} (${position.column},${position.row})"
    }
}