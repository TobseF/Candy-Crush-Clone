package j4k.candycrush

import com.soywiz.klogger.Logger
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.GameField
import j4k.candycrush.model.Tile
import j4k.candycrush.model.TileCell


class GameMechanics(private val field: GameField) {

    companion object {
        val log = Logger("GameMechanics")
    }

    fun swapTiles(a: Position, b: Position) {
        val tileA = field[a]
        val tileB = field[b]
        field[a] = tileB
        field[b] = tileA
    }

    fun isSwapAllowed(a: Position, b: Position): Boolean {
        return isInRowWithThree(a) || isInRowWithThree(b)
    }

    fun isInRowWithThree(pos: Position): Boolean {
        return isHorizontalConnected(pos) || isInVerticalConnected(pos)
    }

    fun getConnectedTiles(pos: Position): List<TileCell> {
        val vertical = getVerticalConnected(pos)
        val horizontal = getHorizontalConnected(pos)
        if ((horizontal.size >= 3) && (vertical.size >= 3)) {
            return vertical + horizontal
        } else if (horizontal.size >= 3) {
            return horizontal
        } else if (vertical.size >= 3) {
            return vertical
        }
        return emptyList()
    }

    fun getConnectedTiles(a: Position, b: Position): List<TileCell> {
        return getConnectedTiles(a) + getConnectedTiles(b)
    }

    fun removeTile(position: Position) {
        field[position] = Tile.Hole
    }

    fun removeTiles(positions: List<Position>) {
        positions.forEach(this::removeTile)
    }

    fun removeTileCells(positions: List<TileCell>) {
        removeTiles(positions.map { it.position })
    }

    fun isHorizontalConnected(pos: Position): Boolean {
        return hasFollowingEqualTiles(getHorizontalSurroundings(pos), 3)
    }

    fun getHorizontalConnected(pos: Position): List<TileCell> {
        return getFollowingEqualTiles(getHorizontalSurroundings(pos), 3)
    }

    fun getVerticalConnected(pos: Position): List<TileCell> {
        return getFollowingEqualTiles(getVerticalSurroundings(pos), 3)
    }

    fun getHorizontalSurroundings(pos: Position): List<TileCell> {
        val horizontal = listOf(pos.left(2), pos.left(1), pos, pos.right(1), pos.right(2))
        return horizontal.map { position -> field.getTileCell(position) }
    }

    fun hasFollowingEqualTiles(tiles: List<TileCell>, min: Int = 3): Boolean {
        return getFollowingEqualTiles(tiles, min).size >= min
    }

    fun getFollowingEqualTiles(tiles: List<TileCell>, min: Int = 3): List<TileCell> {
        if (tiles.isEmpty()) {
            throw IllegalArgumentException("Wee need at least 3 tiles to check")
        }
        val center = tiles[(tiles.size - 1) / 2]
        if (tiles.size < min) {
            return emptyList()
        }
        val row = mutableListOf<TileCell>()
        for (nextTile: TileCell in tiles) {
            if (nextTile.tile == center.tile && nextTile.tile.isTile()) {
                row.add(nextTile)
            } else {
                if (row.size >= min) {
                    return row
                }
                row.clear()
            }
        }
        if (row.size < min) {
            row.clear()
            row.add(center)
        }
        return row
    }

    fun isInVerticalConnected(pos: Position): Boolean {
        return hasFollowingEqualTiles(getVerticalSurroundings(pos), 3)
    }

    fun getVerticalSurroundings(pos: Position): List<TileCell> {
        val horizontal = listOf(pos.top(2), pos.top(1), pos, pos.bottom(1), pos.bottom(2))
        return horizontal.map { field.getTileCell(it) }
    }

    override fun toString(): String {
        return field.toString()
    }

}