package j4k.candycrush

import com.soywiz.klogger.Logger
import com.soywiz.korma.geom.distanceTo
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.GameField
import j4k.candycrush.model.Tile
import j4k.candycrush.model.TileCell

/**
 * Actions and checks for the provided [GameField]
 */
class GameMechanics(val field: GameField) {

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
        return isHorizontalConnected(pos) || isVerticalConnected(pos)
    }

    fun getConnectedTiles(pos: Position): List<TileCell> {
        return getVerticalConnectedOrEmpty(pos) + getHorizontalConnectedOrEmpty(pos)
    }

    /**
     * @return list of lines (`List<TileCell>`) which are at least with 3 equal [Tile]s in
     * a horizontal or vertical connected line with the tile on the provided [Position].
     * A line contains at least 3 [Tile]s.
     * */
    fun getConnectedLines(pos: Position): List<List<TileCell>> {
        return listOf(getVerticalConnectedOrEmpty(pos), getHorizontalConnectedOrEmpty(pos)).filter { it.isNotEmpty() }
    }

    /**
     * @return list of lines (`List<TileCell>`) which are at least with 3 equal [Tile]s in
     * a horizontal or vertical connected line with the tile on the provided [Position]s.
     * A line contains at least 3 [Tile]s. The result can contain a maximum of 4 lines.
     */
    fun getConnectedLines(a: Position, b: Position): List<List<TileCell>> {
        return (getConnectedLines(a) + getConnectedLines(b)).filter { it.isNotEmpty() }
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
        return getHorizontalConnectedOrEmpty(pos).isNotEmpty()
    }

    fun getAndRemoveAllHorizontalRows(): List<List<TileCell>> {
        return field.listAllPositions().map {
            val connected = getHorizontalConnectedOrEmpty(it)
            removeTileCells(connected)
            connected
        }.filter { it.isNotEmpty() }
    }

    fun getAndRemoveAllVerticalRows(): List<List<TileCell>> {
        return field.listAllPositions().map {
            val connected = getVerticalConnectedOrEmpty(it)
            removeTileCells(connected)
            connected
        }.filter { it.isNotEmpty() }
    }

    fun getHorizontalConnectedOrEmpty(pos: Position): List<TileCell> {
        val horizontalConnected = this.getHorizontalSurroundings(pos)
        return if (horizontalConnected.size < 3) emptyList() else horizontalConnected
    }

    fun getVerticalConnectedOrEmpty(pos: Position): List<TileCell> {
        val verticalConnected = this.getVerticalSurroundings(pos)
        return if (verticalConnected.size < 3) emptyList() else verticalConnected
    }

    fun getHorizontalSurroundings(pos: Position): List<TileCell> {
        return getHorizontalSurroundings(field.getTileCell(pos))
    }

    fun getVerticalSurroundings(pos: Position): List<TileCell> {
        return getVerticalSurroundings(field.getTileCell(pos))
    }

    fun getHorizontalSurroundings(cell: TileCell): List<TileCell> {
        if (cell.tile.isNotTile()) {
            return listOf(cell)
        }
        var pos = cell.position.right()
        val cellsRight = mutableListOf<TileCell>()
        while (field.getTile(pos) == cell.tile) {
            cellsRight += field.getTileCell(pos)
            pos = pos.right()
        }
        pos = cell.position.left()
        val cellsLeft = mutableListOf<TileCell>()
        while (field.getTile(pos) == cell.tile) {
            cellsLeft += field.getTileCell(pos)
            pos = pos.left()
        }
        return cellsLeft.reversed() + cell + cellsRight
    }

    fun getVerticalSurroundings(cell: TileCell): List<TileCell> {
        if (cell.tile.isNotTile()) {
            return listOf(cell)
        }
        var pos = cell.position.bottom()
        val cellsBottom = mutableListOf<TileCell>()
        while (field.getTile(pos) == cell.tile) {
            cellsBottom += field.getTileCell(pos)
            pos = pos.bottom()
        }
        pos = cell.position.top()
        val cellsTop = mutableListOf<TileCell>()
        while (field.getTile(pos) == cell.tile) {
            cellsTop += field.getTileCell(pos)
            pos = pos.top()
        }
        return cellsTop.reversed() + cell + cellsBottom
    }

    fun isVerticalConnected(pos: Position): Boolean {
        return getVerticalConnectedOrEmpty(pos).isNotEmpty()
    }

    /**
     * Drops all tiles to ground level. After that, empty cells are only over tiles.
     * @return a list of the moves which were triggered by this drop
     */
    fun dropAllToGround(): List<Move> {
        return (0 until field.columnsSize).flatMap { column -> dropToGround(column) }
    }

    /**
     * Drops the tiles of a column to ground level. After that, empty cells are only over tiles.
     * @return a list of the moves which were triggered by this drop
     */
    fun dropToGround(column: Int): List<Move> {
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

    /**
     * @return moves which fill empty fields with new tiles. Ordered by row to fill lower tiles first.
     */
    fun getNewTileMoves(tileStore: (Int) -> Tile): List<InsertMove> {
        return listEmptyCells().sortedByDescending { it.row }
                .map { cell -> InsertMove(cell, tileStore.invoke(cell.column)) }
    }

    data class InsertMove(val target: Position, val tile: Tile) : Comparable<InsertMove> {
        override fun compareTo(other: InsertMove) = other.target.row - this.target.row
    }

    fun insert(moves: List<InsertMove>) = moves.forEach { insert(it) }

    fun insert(move: InsertMove) {
        field[move.target] = move.tile
    }

    fun move(move: Move) {
        field[move.target] = field[move.tile]
        field[move.tile] = Tile.Hole
    }

    private fun Position.isTile() = field[this].isTile()

    override fun toString(): String {
        return field.toString()
    }

}