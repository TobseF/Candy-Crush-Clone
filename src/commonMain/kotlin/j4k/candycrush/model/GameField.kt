package j4k.candycrush.model

import j4k.candycrush.math.PositionGrid

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


    private val rows = Array(rowSize) { Row(columnsSize) }

    operator fun get(position: PositionGrid.Position): Tile = get(position.column, position.row)

    operator fun get(column: Int, row: Int): Tile {
        return if (isOnField(column, row)) {
            rows[row][column]
        } else {
            Tile.OutOfSpace
        }
    }

    fun isOnField(column: Int, row: Int): Boolean {
        return isColumnField(column) && isRowField(row)
    }

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

    operator fun set(position: PositionGrid.Position, value: Tile) {
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
}
















