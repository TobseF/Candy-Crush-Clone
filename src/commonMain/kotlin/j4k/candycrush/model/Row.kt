package j4k.candycrush.model

class Row(rowSize: Int) : Iterable<Tile> {
    private val tiles = Array(rowSize) { Tile(TileType.Hole) }

    operator fun get(row: Int) = tiles[row]

    override fun toString(): String {
        return "[" + tiles.joinToString { it.toString() } + "]"
    }

    operator fun set(row: Int, tileNumber: Int) {
        tiles[row] = Tile(tileNumber)
    }

    operator fun set(row: Int, type: TileType) {
        tiles[row] = Tile(type)
    }

    override fun iterator(): Iterator<Tile> = tiles.iterator()
}