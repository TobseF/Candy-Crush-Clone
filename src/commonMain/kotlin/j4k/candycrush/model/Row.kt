package j4k.candycrush.model

class Row(rowSize: Int) : Iterable<Tile> {

    private val tiles = Array(rowSize) { Tile.Hole }

    operator fun get(row: Int) = tiles[row]

    override fun toString(): String {
        return "[" + tiles.joinToString { it.shortName() } + "]"
    }

    fun size() = tiles.size

    operator fun set(row: Int, tileNumber: Int) {
        tiles[row] = Tile.getTile(tileNumber)
    }

    operator fun set(row: Int, tile: Tile) {
        tiles[row] = tile
    }

    override fun iterator(): Iterator<Tile> = tiles.iterator()
}