package j4k.candycrush

import com.soywiz.klogger.Logger
import com.soywiz.korev.Key
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korge.view.Stage
import com.soywiz.korinject.AsyncInjector
import j4k.candycrush.lib.EventBus
import j4k.candycrush.model.Level
import j4k.candycrush.renderer.GameFieldRenderer
import j4k.candycrush.renderer.LevelCheckRenderer
import j4k.candycrush.renderer.ScoringRenderer
import j4k.candycrush.renderer.animation.TileAnimator

class KeyBindings(val stage: Stage,
        val bus: EventBus,
        val animator: TileAnimator,
        val scoringRenderer: ScoringRenderer,
        val gameFlow: GameFlow,
        val levelCheck: LevelCheck,
        val checkRenderer: LevelCheckRenderer,
        val level: Level,
        val fieldRenderer: GameFieldRenderer) {


    companion object {
        val log = Logger("KeyBindings")

        suspend operator fun invoke(injector: AsyncInjector): KeyBindings {
            injector.run {
                return KeyBindings(get(), get(), get(), get(), get(), get(), get(), get(), get()).apply {
                    bindKeys()
                }
            }
        }
    }

    private suspend fun bindKeys() {
        stage.onKeyDown {
            onKeyDown(it.key)
        }

    }

    suspend fun resetState() {
        animator.reset()
        scoringRenderer.reset()
        gameFlow.reset()
        levelCheck.reset()
        gameFlow.checkNewField()
        checkRenderer.update()
    }

    suspend fun shuffle() {
        log.debug { "Shuffle & Reset" }
        resetState()
        level.field.shuffle()
        fieldRenderer.updateImagesFromField()
    }

    suspend fun reloadLevel() {
        log.debug { "Reload level" }
        resetState()
        level.reset()
        fieldRenderer.updateImagesFromField()
    }

    suspend fun onKeyDown(key: Key) {

        bus.register<ResetGameEvent> { reloadLevel() }
        bus.register<NextLevelEvent> { shuffle() }

        when (key) {
            Key.P -> {
                log.debug { "Print Field Data" }
                println(level.field)
            }
            Key.D -> {
                log.debug { "Show Debug Letters" }
                fieldRenderer.toggleDebug()
            }
            Key.S -> {
                shuffle()
            }
            Key.R -> {
                reloadLevel()
            }
            Key.I -> {
                log.debug { "Print Image Data" }
                println(fieldRenderer)
                println("Renderer data is equal to field data: " + fieldRenderer.isEqualWithField())
            }
            else -> {
                log.debug { "Pressed unmapped key: $key" }
            }

        }
    }

}