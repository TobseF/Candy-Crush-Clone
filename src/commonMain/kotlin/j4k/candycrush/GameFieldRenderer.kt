package j4k.candycrush

import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.BmpSlice
import com.soywiz.korma.geom.Point
import j4k.candycrush.lib.SpriteBatch
import j4k.candycrush.math.PositionGrid
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.GameField
import j4k.candycrush.model.Row
import j4k.candycrush.model.Tile
import j4k.candycrush.model.TileCell
import kotlin.math.min

class GameFieldRenderer(private val gameField: GameField,
        private val widthMax: Int,
        heightMax: Int,
        private val candies: SpriteBatch) : Container() {

    private val sizeFix = 10
    private val paddingFix = -10

    val positionGrid: PositionGrid
    /**
     * Distance in PX from top
     */
    private val top = 80
    /**
     * Left and Right spacings in PX
     */
    private val padding = 20

    private val paddings = padding * 2
    private val maxHorizontal = (widthMax - paddings) / gameField.columnsSize
    private val maxVertical = (heightMax - top - paddings) / gameField.rowSize
    private val tileSize = getMaxTileSize() - sizeFix
    private val centerPadding = calculateCenterPadding()
    /**
     * Percentage up or downsizing of the tiles.
     * `1` means no scaling. `0.8` means `80%` image sizes, which creates `20%` padding.
     */
    private val tileScale = 0.85

    private val tileMap = mapOf(0 to 0, 1 to 1, 2 to 2, 3 to 6, 4 to 10)

    private val tiles = Array(gameField.columnsSize) {
        Array<CandyImage?>(gameField.rowSize) { null }
    }

    init {
        positionGrid = PositionGrid(x = centerPadding + paddingFix,
                y = top,
                columns = gameField.columnsSize,
                rows = gameField.rowSize,
                tileSize = tileSize)
    }

    private fun getMaxTileSize(): Int {
        return min(maxHorizontal, maxVertical)
    }

    private fun calculateCenterPadding(): Int {
        val tilesWidth = tileSize * gameField.columnsSize
        return (widthMax - tilesWidth) / 2
    }

    init {
        gameField.forEachIndexed(this::addRow)
    }

    private fun addRow(columnIndex: Int, row: Row) {
        row.forEachIndexed { rowIndex, tile -> addTile(columnIndex, rowIndex, tile) }
    }

    private fun addTile(columnIndex: Int, rowIndex: Int, tile: Tile) {
        val pos = positionGrid.getCenterPosition(column = rowIndex, row = columnIndex)
        if (tile.isTile()) {
            val bitmap = getTile(tile.index)
            val tileSize = tileSize * tileScale
            val image = CandyImage(tileSize, pos, bitmap, tile)
            addChild(image)
            tiles[rowIndex][columnIndex] = image
        }
    }

    class CandyImage(tileSize: Number, position: Point, bitmap: BmpSlice, val tile: Tile) : Image(bitmap) {
        init {
            anchor(0.5, 0.5)
            size(tileSize, tileSize)
            position(position)
        }

        override fun toString(): String {
            return tile.toString()
        }
    }

    fun getTile(index: Int) = candies[tileMap.getOrElse(index) { 0 }]

    fun getTile(column: Int, row: Int): CandyImage {
        return tiles[column][row] ?: throw IllegalArgumentException("No tile image for: $column,$row")
    }

    fun getTile(position: Position): CandyImage {
        return getTile(position.column, position.row)
    }

    fun setTile(tile: CandyImage?, position: Position) {
        tiles[position.column][position.row] = tile
    }

    fun removeTile(position: Position) {
        removeChild(getTile(position))
        setTile(null, position)
    }

    fun removeTiles(positions: List<Position>) {
        positions.forEach(this::removeTile)
    }

    fun removeTilesCells(positions: List<TileCell>) {
        removeTiles(positions.map { it.position })
    }

    fun swapTiles(a: Position, b: Position) {
        val tileA = getTile(a)
        val tileB = getTile(b)
        setTile(tileA, b)
        setTile(tileB, a)
    }

    override fun toString(): String {
        var grid = ""
        (0 until gameField.rowSize).forEach { row ->
            var line = "["
            (0 until gameField.columnsSize).forEach { coulmn ->
                val tile = tiles[coulmn][row]?.tile ?: Tile.Hole
                line += tile.shortName() + ", "
            }
            grid += "$line]\n"
        }
        return grid
    }

    fun move(move: GameMechanics.Move) {
        val tile = getTile(move.tile)
        setTile(tile, move.target)
        setTile(null, move.tile)
    }

}