package j4k.candycrush

import com.soywiz.klogger.*
import com.soywiz.korinject.*
import com.soywiz.korma.geom.*
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.*

/**
 * Performs actions and checks on the provided [GameField].
 */
class GameMechanics(val field: GameField) {

    /**
     * Swaps the two tiles on the given positions.
     */
    fun swapTiles(a: Position, b: Position) {
        // TODO: Step 3.1 Implement swapping of tiles
    }

    /**
     * Remove a field by setting a [Tile.Hole].
     */
    fun removeTile(position: Position) {
        // TODO: Step 3.2 Implement remove tile
    }

    /**
     * Returns a list of [Tile]s which are horizontally connected and have the same type as the provided [Tile].
     * The list will always include the provided tile itself. Even if [Tile.isNotTile] is `true`.
     * Only [Tile]s with [Tile.isTile] = `true` count as connected.
     */
    fun getHorizontalSurroundings(cell: TileCell): List<TileCell> {
        // TODO: Step 4.1 Implement get horizontal surroundings
        return emptyList()
    }

    /**
     * Returns a list of [Tile]s which are vertically connected and have the same type as the provided [Tile].
     * The list will always include the provided tile itself. Even if [Tile.isNotTile] is `true`.
     * Only [Tile]s with [Tile.isTile] = `true` count as connected.
     */
    fun getVerticalSurroundings(cell: TileCell): List<TileCell> {
        // TODO: Step 4.2 Implement get vertical surroundings
        return emptyList()
    }


    /**
     * Returns `true` if swapping of two tiles is allowed.
     * Swapping is allowed, if the swapped [Tile]s create a horizontal or vertical row of at least three [Tile]s.
     */
    fun isSwapAllowed(a: Position, b: Position): Boolean {
        swapTiles(a, b)
        val isSwapAllowed = isInRowWithThree(a) || isInRowWithThree(b)
        val bothAreTiles = a.isTile() && b.isTile()
        swapTiles(a, b)
        return bothAreTiles && isSwapAllowed
    }

    /**
     * Returns `true` if the [Tile] on this position is connected with two (or more) other tiles of the same type.
     */
    fun isInRowWithThree(pos: Position): Boolean {
        return isHorizontalConnected(pos) || isVerticalConnected(pos)
    }

    /**
     * Returns a list of [Tile]s of the same type which are connected to the tile on this position (horizontal and vertical).
     * The tile on this pos will be included. If the tile is not connected to at least two others of the same type,
     * it will return an empty list.
     */
    fun getConnectedTiles(pos: Position): List<TileCell> {
        return getVerticalConnectedOrEmpty(pos) + getHorizontalConnectedOrEmpty(pos)
    }

    /**
     * @return list of lines (`List<TileCell>`) which are in a horizontally or vertically connected line
     * with the tile on the provided [Position]. Only [Tile]s with the same type count as connected.
     * A line contains at least 3 [Tile]s.
     * */
    fun getConnectedLines(pos: Position): List<List<TileCell>> {
        return listOf(getVerticalConnectedOrEmpty(pos), getHorizontalConnectedOrEmpty(pos)).filter { it.isNotEmpty() }
    }

    /**
     * @return list of lines (`List<TileCell>`) which are in a horizontally or vertically connected line
     * with the tile on the provided [Position]. Only [Tile]s with the same type count as connected.
     * A line contains at least 3 [Tile]s. The result can contain a maximum of 4 lines.
     */
    fun getConnectedLines(a: Position, b: Position): List<List<TileCell>> {
        return (getConnectedLines(a) + getConnectedLines(b)).filter { it.isNotEmpty() }
    }


    /**
     * Remove a list of fields by setting a [Tile.Hole] for all of them.
     */
    fun removeTiles(positions: List<Position>) {
        positions.forEach(this::removeTile)
    }

    fun removeTileCells(positions: List<TileCell>) {
        removeTiles(positions.map { it.position })
    }

    /**
     * @return `true` if the [Tile] on the given [Position] creates a horizontal row with
     * a minimum of two other [Tile]s of the same type.
     */
    fun isHorizontalConnected(pos: Position): Boolean {
        return getHorizontalConnectedOrEmpty(pos).isNotEmpty()
    }

    /**
     * Removes all horizontally connected rows by setting a [Tile.Hole] and returns
     * this list of removed [Tile] sets.
     */
    fun getAndRemoveAllHorizontalRows(): List<List<TileCell>> {
        return field.listAllPositions().map {
            getHorizontalConnectedOrEmpty(it).apply(this::removeTileCells)
        }.filter { it.isNotEmpty() }
    }

    /**
     * Removes all vertically connected rows by setting a [Tile.Hole] and returns
     * this list of removed [Tile] sets.
     */
    fun getAndRemoveAllVerticalRows(): List<List<TileCell>> {
        return field.listAllPositions().map {
            getVerticalConnectedOrEmpty(it).apply(this::removeTileCells)
        }.filter { it.isNotEmpty() }
    }

    /**
     * @return `true` if the [Tile] on the given [Position] creates a horizontal row with
     * a minimum of two other [Tile]s of the same type.
     */
    fun getHorizontalConnectedOrEmpty(pos: Position): List<TileCell> {
        val horizontalConnected = this.getHorizontalSurroundings(pos)
        return if (horizontalConnected.size < 3) emptyList() else horizontalConnected
    }

    /**
     * @return `true` if the [Tile] on the given [Position] creates a vertical row with
     * a minimum of two other [Tile]s of the same type.
     */
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

    /**
     * @return `true` if the [Tile] on the given [Position] creates a vertical row with
     * a minimum of two other [Tile]s of the same type.
     */
    fun isVerticalConnected(pos: Position): Boolean {
        return getVerticalConnectedOrEmpty(pos).isNotEmpty()
    }

    /**
     * Drops all tiles to ground level. After that, empty cells are only over tiles.
     * @return a list of the [Move]s which were triggered by this drop
     */
    fun dropAllToGround(): List<Move> {
        return (0 until field.columnsSize).flatMap { column -> dropToGround(column) }
    }

    /**
     * Drops the tiles of a column to ground level. After that, empty cells are only present over [Tile]s.
     * @return a list of the [Move]s which were triggered by this drop
     */
    fun dropToGround(column: Int): List<Move> {
        val moves = mutableListOf<Move>()
        while (true) {
            val nextMove = getNextDropMove(column)
            if (nextMove != null) {
                moves.add(nextMove)
                move(nextMove)
            } else {
                return moves
            }
        }
    }

    /**
     * A [Tile] with one or more [Tile.Hole]s beneath, should fall down to the ground.
     * This functions searches such [Move]s which drop a [Tile] down.
     *
     * @return the first [Move] which drops a "flying" [Tile] to the ground.
     * Returns `null` if all [Tile]s in this column are laying on the ground.
     */
    fun getNextDropMove(column: Int): Move? {
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

    /**
     * A command which moves the tile on the given [Position] onto another `target` [Position].
     */
    data class Move(val target: Position, val tile: Position) {
        fun distance() = target.distanceTo(tile)
    }

    /**
     * @return list of [Position] which point to an empty cell ([Tile.isHole]).
     */
    fun listEmptyCells(): List<Position> {
        return field.listAllCells().filter { it.tile.isHole() }.map { it.position }
    }

    /**
     * @return moves which fill empty fields with new [Tile]s. Ordered by row to fill lower tiles first.
     */
    fun getNewTileMoves(tileStore: (Int) -> Tile): List<InsertMove> {
        return listEmptyCells().sortedByDescending { it.row }
            .map { cell -> InsertMove(cell, tileStore.invoke(cell.column)) }
    }

    /**
     * A command which inserts a new [Tile] into the `target` [Position]. Animated, this will look like
     * a falling [Tile] from the top which stops on the `target` [Position].
     */
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

    companion object {
        val log = Logger<GameMechanics>()

        /**
         * Magic operator `{}` overloaded constructor for automatic dependency injection.
         */
        suspend operator fun invoke(injector: AsyncInjector): GameMechanics {
            injector.run {
                return GameMechanics(get()).apply {
                    injector.mapInstance(this)
                }
            }
        }
    }

}
