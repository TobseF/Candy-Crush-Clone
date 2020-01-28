package j4k.candycrush.model

class GameField(val columnsSize: Int, val rowSize: Int) : Iterable<Row> {

    private val rows = Array(rowSize) { Row(columnsSize) }

    operator fun get(column: Int, row: Int): Tile = rows[row][column]

    operator fun set(column: Int, row: Int, value: Int) {
        rows[row][column] = value
    }

    operator fun get(row: Int): Row = rows[row]

    override fun toString(): String {
        rows.forEach { }
        return rows.joinToString("\n") { it.toString() }
    }

    override fun iterator(): Iterator<Row> = rows.iterator()
}
















