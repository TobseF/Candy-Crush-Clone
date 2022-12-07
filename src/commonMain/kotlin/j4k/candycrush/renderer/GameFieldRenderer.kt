package j4k.candycrush.renderer

import com.soywiz.klogger.*
import com.soywiz.korge.view.*
import com.soywiz.korinject.*
import j4k.candycrush.*
import j4k.candycrush.config.*
import j4k.candycrush.lib.*
import j4k.candycrush.math.*
import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.*
import kotlin.math.*

/**
 * Displays the tiles of a [GameField] with images out of [CandySprites].
 */
class GameFieldRenderer(
    private val gameField: GameField,
    private val max: Resolution,
    private val candies: CandySprites,
    private val debugLetters: TestSprites
) : Container() {

    /**
     * Maps the [GameField] [Position]s to screen coordinates.
     */
    val positionGrid: PositionGrid

    private val sizeFix = 10
    private val paddingFix = -10

    /**
     * If `true` the renderer displays the [debugLetters] instead of the [candies]-images.
     */
    private var debug = false

    /**
     * Distance in px from top
     */
    private val top = 250

    /**
     * Left and Right spacings in px
     */
    private val padding = 0

    private val paddings = padding * 2
    private val maxHorizontal = (max.width - paddings) / gameField.columnsSize
    private val maxVertical = (max.height - top - paddings) / gameField.rowSize

    /**
     * The size of one tile in px
     */
    private val tileSize = getMaxTileSize() - sizeFix

    /**
     * Left padding which moves the field to the horizontal center
     */
    private val centerPadding = calculateCenterPadding()

    /**
     * Percentage up or downsizing of the tiles.
     * `1` means no scaling. `0.8` means `80%` image sizes, which creates `20%` padding.
     */
    private val tileScale = 0.85

    private val tiles = Array(gameField.rowSize) {
        Array<CandyImage?>(gameField.columnsSize) { null }
    }

    companion object {
        val log = Logger<GameFieldRenderer>()

        suspend operator fun invoke(injector: AsyncInjector): GameFieldRenderer {
            injector.run {
                return GameFieldRenderer(get(), get(), get(), get()).apply {
                    mapInstance(this)
                    mapInstance(this.positionGrid)
                }
            }
        }
    }

    init {
        positionGrid = PositionGrid(
            x = centerPadding + paddingFix, y = top, columns = gameField.columnsSize, rows = gameField.rowSize,
            tileSize = tileSize
        )
    }

    private fun getMaxTileSize(): Int {
        return min(maxHorizontal, maxVertical)
    }

    private fun calculateCenterPadding(): Int {
        val tilesWidth = tileSize * gameField.columnsSize
        return (max.width - tilesWidth) / 2
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
        val bitmap = candies.getTile(tile)
        val debugLetter = debugLetters.getTile(tile)
        val tileSize = tileSize * tileScale
        val image = CandyImage(tileSize, pos, bitmap, debugLetter, tile)
        if (debug) {
            image.debug()
        }
        if (gameField.isNotOnField(columnIndex, rowIndex)) {
            throw IllegalArgumentException(
                "Image position is out of space: column:$columnIndex,row:$rowIndex (${gameField.columnsSize}-${gameField.rowSize})"
            )
        }
        val candyImage = tiles[rowIndex][columnIndex]
        if (candyImage != null && candyImage.tile.isTile()) {
            log.info { "Adding tile on non empty cell:  ${candyImage.tile} with $tile:  $columnIndex,row:$rowIndex (${gameField.columnsSize}-${gameField.rowSize}) " }
            removeChild(candyImage)
        }
        tiles[rowIndex][columnIndex] = image
        addChild(image)
        return image
    }

    fun toggleDebug() {
        debug = !debug
        if (debug) {
            debug()
        } else {
            disableDebug()
        }
    }

    private fun debug() {
        gameField.listAllPositions().forEach { tiles[it.row][it.column]?.debug() }
    }

    private fun disableDebug() {
        gameField.listAllPositions().forEach { tiles[it.row][it.column]?.disableDebug() }
    }

    /**
     * Can be null in some multithreading edge cases, like during game exit.
     * During default game loop, every column should have an image.
     */
    private fun getTile(column: Int, row: Int): CandyImage? {
        return tiles[row][column]
    }

    private fun hasTile(column: Int, row: Int): Boolean = tiles[row][column] != null

    fun getTile(position: Position): CandyImage? {
        return getTile(position.column, position.row)
    }

    fun hasTile(position: Position): Boolean {
        return hasTile(position.column, position.row)
    }

    private fun setTile(tile: CandyImage?, position: Position) {
        tiles[position.row][position.column] = tile
    }

    fun removeTileFromGrid(position: Position) {
        setTile(null, position)
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

    fun isEqualWithField() = toString() == gameField.toString()

}
