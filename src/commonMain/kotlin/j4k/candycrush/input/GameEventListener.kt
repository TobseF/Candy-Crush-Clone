package j4k.candycrush.input

import j4k.candycrush.math.PositionGrid.Position


interface SwapTileListener {
    fun onTileSwapTileEvent(posA: Position, posB: Position)
}
