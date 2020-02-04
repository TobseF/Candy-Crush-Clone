package j4k.candycrush.model

class GameField(val columnsSize: Int, val rowSize: Int) : Iterable<Row> {

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

    operator fun get(column: Int, row: Int): Tile = rows[row][column]

    operator fun set(column: Int, row: Int, value: Int) {
        rows[row][column] = value
    }

    operator fun get(row: Int): Row = rows[row]

    override fun toString(): String {
        return rows.joinToString("\n") { it.toString() }
    }

    override fun iterator(): Iterator<Row> = rows.iterator()
}
















