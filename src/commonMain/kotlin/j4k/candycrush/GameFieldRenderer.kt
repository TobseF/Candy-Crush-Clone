package j4k.candycrush

import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import j4k.candycrush.math.PositionGrid
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.GameField
import j4k.candycrush.model.Row
import j4k.candycrush.model.Tile
import kotlin.math.min

class GameFieldRenderer(private val gameField: GameField,
        private val widthMax: Int,
        private val heightMax: Int,
        private val bitmap: Bitmap) : Container() {

    private val sizeFix = 10
    private val paddingFix = -10

    val positionGrid: PositionGrid
    private val top = 80
    private val padding = 20
    private val paddings = padding * 2
    private val maxHorizontal = (widthMax - paddings) / gameField.columnsSize
    private val maxVertical = (heightMax - top - paddings) / gameField.rowSize
    private val tileSize = getMaxTileSize() - sizeFix
    private val centerPadding = calculateCenterPadding()

    private val tiles = Array(gameField.columnsSize) {
        Array<Image?>(gameField.rowSize) { null }
    }

    init {
        positionGrid = PositionGrid(x = centerPadding + paddingFix,
                y = top,
                columns = gameField.columnsSize,
                rows = gameField.rowSize,
                size = tileSize)
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
        val pos = positionGrid.getPosition(column = rowIndex, row = columnIndex)
        pos.x = pos.x
        tiles[rowIndex][columnIndex] = image(bitmap) {
            anchor(0, 0)
            size(tileSize, tileSize)
            position(pos.x, pos.y)
        }
    }

    fun getTile(column: Int, row: Int) = tiles[column][row]
    fun getTile(position: Position) = tiles[position.column][position.row]

    fun setTile(tile: Image?, position: Position) {
        tiles[position.column][position.row] = tile
    }

    fun swapTiles(a: Position, b: Position) {
        val tileA = getTile(a)
        val tileB = getTile(b)
        setTile(tileA, b)
        setTile(tileB, a)
    }
}