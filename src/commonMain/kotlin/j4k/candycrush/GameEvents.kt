package j4k.candycrush

import j4k.candycrush.math.PositionGrid.Position

class MoveTileEvent(posA: Position, posB: Position)
class ToggleTileEvent(posA: Position, posB: Position)
class RemoveTileEvent(pos: Position)
class AddTileEvent(pos: Position)

interface MoveTileListener {
    fun onTileMovedEvent(posA: Position, posB: Position)
}

interface DragTileListener {
    fun onDragTileEvent(posA: Position, posB: Position)
}

interface IllegalToggleListener {
    fun onIllegalToggleEvent(posA: Position, posB: Position)
}

interface SwapTileListener {
    fun onTileToggledEvent(posA: Position, posB: Position)
}

interface RemoveTileListener {
    fun onTileRemovedEvent(vararg pos: Position)
}

interface AddTileListener {
    fun onTileAddedEvent(vararg pos: Position)
}