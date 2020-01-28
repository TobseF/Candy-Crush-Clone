package j4k.candycrush.model

class Tile(private var name: String) {

    constructor(number: Int) : this(number.toString())
    constructor(type: TileType) : this(type.name.first().toString())

    override fun toString() = name

    fun isWall() = name.startsWith("W")

    fun isHole() = name.startsWith("H")

    fun isTile() = !isWall() && !isHole()
}