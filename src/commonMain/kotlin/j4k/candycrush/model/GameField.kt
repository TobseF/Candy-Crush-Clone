package j4k.candycrush.model

import j4k.candycrush.math.PositionGrid.Position

data class GameField(val columnsSize: Int, val rowSize: Int) : Iterable<Row> {

    companion object {

        fun fromString(string: String): GameField {
            val values = string.split("[").filter { it.isNotBlank() }
            val rows = values.map { parseRow(it) }
            val field = GameField(rows[0].size(), rows.size)
            rows.forEachIndexed { rowIndex, row ->
                row.forEachIndexed { columnIndex, tile ->
                    field[rowIndex][columnIndex] = tile
                }
            }
            return field
        }

        private fun parseRow(line: String): Row {
            val values = line.trim().removePrefix("[").removeSuffix("]").trim().split(",").filter { it.isNotBlank() }
                    .map { it.trim() }
            val tiles = values.map { Tile.getTile(it) }
            val row = Row(tiles.size)
            tiles.forEachIndexed { index, tile -> row[index] = tile }
            return row
        }
    }

    fun getTileCell(position: Position) = TileCell(get(position), position)

    fun getTileCell(column: Int, row: Int) = TileCell(get(column, row), Position(column, row))

    private val rows = Array(rowSize) { Row(columnsSize) }

    operator fun get(position: Position): Tile = get(position.column, position.row)

    operator fun get(column: Int, row: Int): Tile {
        return if (isOnField(column, row)) {
            rows[row][column]
        } else {
            Tile.OutOfSpace
        }
    }

    fun getColumn(column: Int): List<Tile> {
        if (column >= columnsSize) {
            throw IllegalArgumentException("Column $column is out of range: $columnsSize")
        }
        return (0 until rowSize).map { row -> get(column, row) }
    }

    fun getColumnCell(column: Int): List<TileCell> {
        return getColumn(column).mapIndexed { row, tile -> TileCell(tile, Position(column, row)) }
    }

    fun isOnField(column: Int, row: Int): Boolean {
        return isColumnField(column) && isRowField(row)
    }

    fun isNotOnField(column: Int, row: Int) = !isOnField(column, row)

    fun isColumnField(column: Int): Boolean {
        return (column in 0 until columnsSize)
    }

    fun isRowField(row: Int): Boolean {
        return (row in 0 until rowSize)
    }

    operator fun set(column: Int, row: Int, value: Int) {
        rows[row][column] = value
    }

    operator fun set(column: Int, row: Int, value: Tile) {
        rows[row][column] = value
    }

    operator fun set(position: Position, value: Tile) {
        rows[position.row][position.column] = value
    }

    operator fun get(row: Int): Row {
        return if (isRowField(row)) {
            rows[row]
        } else {
            Row.outOfSpace()
        }
    }

    override fun toString(): String {
        return rows.joinToString("\n") { it.toString() }
    }

    override fun iterator(): Iterator<Row> = rows.iterator()

    fun listAllCells(): List<TileCell> = listAllPositions().map { getTileCell(it) }

    fun listAllPositions(): List<Position> {
        return (0 until rowSize).flatMap { row ->
            (0 until columnsSize).map { column ->
                Position(column, row)
            }
        }
    }

    fun shuffle() {
        listAllPositions().forEach { position -> set(position, Tile.randomTile()) }
    }
}
















