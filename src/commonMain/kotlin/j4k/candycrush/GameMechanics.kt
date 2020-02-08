package j4k.candycrush

import com.soywiz.klogger.Logger
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.GameField
import j4k.candycrush.model.Tile


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
        return isInHorizontalRow(pos) || isInVerticalRow(pos)
    }

    fun isInHorizontalRow(pos: Position): Boolean {
        val horizontal = listOf(pos.left(2), pos.left(1), pos, pos.right(1), pos.right(2))
        val tiles = horizontal.map { field[it] }
        return hasFollowingEqualTiles(tiles, 3)
    }

    fun hasFollowingEqualTiles(tiles: List<Tile>, max: Int = 3): Boolean {
        if (tiles.size < max) {
            return false
        }
        var count = 1
        var tile = tiles.first()
        for (nextTile in tiles.drop(1)) {
            if (tile == nextTile && tile.isTile()) {
                count++
                if (count >= max) {
                    return true
                }
            } else {
                count = 1
                tile = nextTile
            }
        }
        return false
    }

    fun isInVerticalRow(pos: Position): Boolean {
        val horizontal = listOf(pos.top(2), pos, pos.top(1), pos, pos.bottom(1), pos.bottom(2))
        val tiles = horizontal.map { field[it] }
        return hasFollowingEqualTiles(tiles, 3)
    }

    override fun toString(): String {
        return field.toString()
    }

}