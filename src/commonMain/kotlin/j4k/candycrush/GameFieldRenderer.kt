package j4k.candycrush

import com.soywiz.korev.MouseButton
import com.soywiz.korev.MouseEvent
import com.soywiz.korev.addEventListener
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import j4k.candycrush.math.PositionGrid
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

    private val positionGrid: PositionGrid
    private val top = 80
    private val padding = 20
    private val paddings = padding * 2
    private val maxHorizontal = (widthMax - paddings) / gameField.columnsSize
    private val maxVertical = (heightMax - top - paddings) / gameField.rowSize
    private val tileSize = getMaxTileSize() - sizeFix
    private val centerPadding = calculateCenterPadding()

    init {
        positionGrid = PositionGrid(x = centerPadding,
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

    private fun addRow(rowIndex: Int, row: Row) {
        row.forEachIndexed { tileIndex, tile -> addTile(rowIndex, tileIndex, tile) }
    }

    private fun addTile(rowIndex: Int, tileIndex: Int, tile: Tile) {
        val pos = positionGrid.getPosition(column = tileIndex, row = rowIndex)
        pos.x = pos.x + paddingFix

        image(bitmap) {
            anchor(0, 0)
            size(tileSize, tileSize)
            position(pos.x, pos.y)
            addEventListener<MouseEvent> {
                if (it.button == MouseButton.LEFT) {
                    println(positionGrid.getField(it.x, it.y))
                }
            }
        }
    }
}