package j4k.candycrush

import com.soywiz.klogger.Logger
import com.soywiz.korma.geom.distanceTo
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
        swapTiles(a, b)
        val isSwapAllowed = isInRowWithThree(a) || isInRowWithThree(b)
        val bothAreTiles = a.isTile() && b.isTile()
        swapTiles(a, b)
        return bothAreTiles && isSwapAllowed
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

    fun getNextMoves(): List<Move> {
        return (0 until field.columnsSize).flatMap { column -> moveAll(column) }
    }

    fun moveAll(column: Int): List<Move> {
        val moves = mutableListOf<Move>()
        while (true) {
            val nextMove = getNextMove(column)
            if (nextMove != null) {
                moves.add(nextMove)
                move(nextMove)
            } else {
                return moves
            }
        }
    }

    fun getNextMove(column: Int): Move? {
        val cells = field.getColumnCell(column).reversed()
        if (cells.isEmpty()) {
            return null
        }
        var hole: TileCell? = null
        cells.forEach { nextCell ->
            if (hole == null) {
                if (nextCell.tile.isHole()) {
                    hole = nextCell
                }
            } else if (nextCell.tile.isTile()) {
                return Move(hole!!.position, nextCell.position)
            }
        }
        return null
    }

    data class Move(val target: Position, val tile: Position) {
        fun distance() = target.distanceTo(tile)
    }

    fun listEmptyCells(): List<Position> {
        return field.listAllCells().filter { it.tile.isHole() }.map { it.position }
    }

    fun getNewTileMoves(tileStore: (Int) -> Tile): List<InsertMove> {
        return listEmptyCells().map { cell -> InsertMove(cell, tileStore.invoke(cell.column)) }
    }

    data class InsertMove(val target: Position, val tile: Tile) : Comparable<InsertMove> {
        override fun compareTo(other: InsertMove) = other.target.row - this.target.row
    }

    fun insert(moves: List<InsertMove>) = moves.forEach { insert(it) }

    fun insert(move: InsertMove) {
        field[move.target] = move.tile
    }

    fun move(moves: List<Move>) = moves.forEach { move(it) }

    fun move(move: Move) {
        field[move.target] = field[move.tile]
        field[move.tile] = Tile.Hole
    }

    private fun Position.isTile() = field[this].isTile()

}