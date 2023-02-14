package steps

import j4k.candycrush.model.*
import kotlin.test.*

/**
 * Basic field access is already implemented ([GameField.getRow], [Row.get]). This is also possible
 * in the short form `field[row][column]`. To ensure we do not access [Tile]s outside the [GameField]
 * the special type [Tile.OutOfSpace] should be returned.
 */
class Step2 {

    /**
     * ### Step 2.1
     *
     * **Test**: `get row by index OutOfSpace`
     *
     * Index based [Tile] access ([Row.get]) should return [Tile.OutOfSpace]
     * if [Tile] index is out of range (0-`columnsSize`).
     */
    @Test
    fun getRowByIndexOutOfSpace() {
        val field = GameField(2, 2)
        assertEquals(Row.outOfSpace(), field[-1])
        assertEquals(Row.outOfSpace(), field[2])
    }

    /**
     * ### Step 2.2
     *
     * **Test**: `get tile by index OutOfSpace`
     *
     * Also, index based [Row] access ([GameField.getRow]) should return [Tile.OutOfSpace]
     * if the [Row] index is out of range (`0 - rowSize`).
     */
    @Test
    fun getTileByIndexOutOfSpace() {
        val field = GameField(2, 2)
        assertEquals(Tile.OutOfSpace, field[-1][0])
        assertEquals(Tile.OutOfSpace, field[0][-1])
        assertEquals(Tile.OutOfSpace, field[0][2])
        assertEquals(Tile.OutOfSpace, field[2][0])
    }

}
