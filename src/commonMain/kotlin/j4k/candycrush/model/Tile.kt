package j4k.candycrush.model

enum class Tile {

    A, B, C, D, E, Wall, Hole, OutOfSpace;

    val index = ordinal

    fun shortName(): String = name.first().toString()

    fun isWall() = this == Wall

    fun isHole() = this == Hole

    fun isTile() = !isWall() && !isHole()

    companion object {

        private val toTile = mutableMapOf<String, Tile>()

        init {
            values().forEach { toTile.put(it.shortName(), it) }
        }

        fun getTile(index: Int): Tile {
            return values()[index.coerceAtMost(4)]
        }

        fun getTile(shortName: String): Tile {
            return toTile[shortName] ?: throw IllegalArgumentException("Failed finding tile for'$shortName'")
        }
    }

}