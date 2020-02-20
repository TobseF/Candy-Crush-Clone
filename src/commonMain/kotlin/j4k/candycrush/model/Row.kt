package j4k.candycrush.model

/**
 * A horizontal row of [Tile]s.
 */
class Row(rowSize: Int) : Iterable<Tile> {

    constructor(vararg tiles: Tile) : this(tiles.size) {
        tiles.copyInto(this.tiles)
    }

    companion object {
        fun outOfSpace(): Row {
            return Row(Tile.OutOfSpace)
        }
    }

    private var tiles = Array(rowSize) { Tile.Hole }

    operator fun get(row: Int): Tile {
        return if (isInRow(row)) {
            tiles[row]
        } else {
            Tile.OutOfSpace
        }
    }

    fun isInRow(row: Int): Boolean {
        return row in tiles.indices
    }

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

    operator fun set(row: Int, tileShortName: String) {
        tiles[row] = Tile.getTile(tileShortName)
    }

    override fun iterator(): Iterator<Tile> = tiles.iterator()


    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false
        other as Row
        if (!tiles.contentEquals(other.tiles)) return false
        return true
    }

    override fun hashCode(): Int {
        return tiles.contentHashCode()
    }

    fun clone(): Row {
        val clone = Row(tiles.size)
        clone.tiles = tiles.copyOf()
        return clone
    }


}