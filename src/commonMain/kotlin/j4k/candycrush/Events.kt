package j4k.candycrush

import j4k.candycrush.math.PositionGrid.Position
import j4k.candycrush.model.TileCell

/**
 * Triggered after the deletion of tiles
 */
data class TileDeletionEvent(val rush: Int, val tiles: List<TileCell>)

/**
 * Triggered after a new score value
 */
data class NewScoreEvent(val score: Int, val multiplicator: Int = 1, val pos: Position)

/**
 * Triggered after the user swaps two tiles
 */
data class SwapTileEvent(val posA: Position, val posB: Position)

/**
 * Triggered after the user drags a tile
 */
data class DragTileEvent(val posA: Position, val posB: Position)