package j4k.candycrush

import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.BmpSlice
import com.soywiz.korma.geom.Point
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
        private val candies: CandySprites) : Container() {

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

    private val tiles = Array(gameField.rowSize) {
        Array<CandyImage?>(gameField.columnsSize) { null }
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
        updateImagesFromField()
    }

    fun updateImagesFromField() {
        removeChildren()
        resetAllFields()
        gameField.forEachIndexed(this::addRow)
    }

    private fun resetAllFields() {
        gameField.listAllPositions().forEach { tiles[it.row][it.column] = null }
    }

    private fun addRow(rowIndex: Int, row: Row) {
        row.forEachIndexed { columnIndex, tile ->
            if (tile.isTile()) {
                addTile(columnIndex, rowIndex, tile)
            }
        }
    }

    fun addTile(position: Position, tile: Tile) = addTile(position.column, position.row, tile)

    private fun addTile(columnIndex: Int, rowIndex: Int, tile: Tile): CandyImage {
        val pos = positionGrid.getCenterPosition(column = columnIndex, row = rowIndex)
        val bitmap = getTile(tile.index)
        val tileSize = tileSize * tileScale
        val image = CandyImage(tileSize, pos, bitmap, tile)
        if (gameField.isNotOnField(columnIndex, rowIndex)) {
            throw IllegalArgumentException("Image position is out of space: column:$columnIndex,row:$rowIndex (${gameField.columnsSize}-${gameField.rowSize})")
        }
        val oldTile = tiles[rowIndex][columnIndex]?.tile
        if (oldTile?.isTile() == true) {
            throw IllegalArgumentException("Tried to overwrite tile $oldTile with $tile:  $columnIndex,row:$rowIndex (${gameField.columnsSize}-${gameField.rowSize})")
        }
        tiles[rowIndex][columnIndex] = image
        addChild(image)
        return image
    }

    class CandyImage(tileSize: Number, position: Point, bitmap: BmpSlice, val tile: Tile) : Image(bitmap) {
        init {
            anchor(0.5, 0.5)
            size(tileSize, tileSize)
            position(position)
        }

        override fun toString(): String {
            return "\n\n $tile: ($x,$y)"
        }
    }

    private fun getTile(index: Int) = candies.getTile(index)

    private fun getTile(column: Int, row: Int): CandyImage {
        return tiles[row][column]
                ?: throw IllegalArgumentException("No tile image for: $column,$row\n${getLogDebugData()}")
    }

    private fun getLogDebugData(): String = "images:\n${toString()}\nfields:\n$gameField"

    fun getTile(position: Position): CandyImage {
        return getTile(position.column, position.row)
    }

    private fun setTile(tile: CandyImage?, position: Position) {
        tiles[position.row][position.column] = tile
    }

    private fun removeTile(position: Position) {
        removeImage(position)
        removeTileFromGrid(position)
    }

    private fun removeImage(position: Position) {
        removeChild(getTile(position))
    }

    fun removeTileFromGrid(position: Position) {
        setTile(null, position)
    }

    private fun removeTiles(positions: List<Position>) {
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
        return (0 until gameField.rowSize).joinToString("\n") { row ->
            "[" + (0 until gameField.columnsSize).map { column ->
                tiles[row][column]?.tile ?: Tile.Hole
            }.joinToString(", ") { tile -> tile.shortName() } + "]"
        }
    }

    fun move(move: GameMechanics.Move) {
        val tile = getTile(move.tile)
        setTile(tile, move.target)
        setTile(null, move.tile)
    }

}