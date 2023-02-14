package j4k.candycrush.model

/**
 * A single tile which can be placed on the [GameField].
 * Each tile has a one letter short form. This helps during testing and debugging.
 */
enum class Tile {

    A, B, C, D, E,

    /**
     * A wall which blocks falling stones. Not used.  Short form: (`W`).
     */
    Wall,

    /**
     * An empty field. Short form: (`H`).
     */
    Hole,

    /**
     * The Tile is not present. Happens if Tile coordinates are out of the [GameField].
     */
    OutOfSpace;

    val index = ordinal

    /**
     * @return `true` if [Tile] is ([Tile.A] - [Tile.A]).
     * Otherwise `false` ([Tile.Hole], [Tile.OutOfSpace], [Tile.Wall]).
     */
    fun isTile(): Boolean {
        // TODO: Step 1.1 Check if tile is A-E
        return false
    }

    /**
     * @return First letter uppercase of this tile
     */
    fun shortName(): String {
        // TODO: Step 1.2 Return first letter uppercase of this tile
        return ""
    }

    fun isWall() = this == Wall

    fun isHole() = this == Hole

    fun isNotTile() = !isTile()

    fun isOutOfSpace() = this == OutOfSpace

    fun isEmpty() = !isHole()

    companion object {

        /**
         * Static method. Can be called with [Tile.getTile].
         *
         * @return the tile with the given short name
         */
        fun getTile(shortName: String): Tile {
            // TODO: Step 1.3 Return the tile with the given short name
            return A
        }

        private val toTile = mutableMapOf<String, Tile>()

        init {
            values().forEach { toTile[it.shortName()] = it }
        }

        fun getTile(index: Int): Tile {
            if (index > values().size) {
                throw IllegalArgumentException("Tile index $index > ${values().size} is not available")
            }
            val tile = values()[index]
            if (tile.isNotTile()) {
                throw IllegalArgumentException("Tile $tile for index $index is not a tile")
            }
            return tile
        }


        fun randomTile() = values().filter { it.isTile() }.random()

    }

}
