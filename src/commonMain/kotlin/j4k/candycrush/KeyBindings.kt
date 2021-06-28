package j4k.candycrush

import com.soywiz.klogger.Logger
import com.soywiz.korev.Key
import com.soywiz.korge.input.keys
import com.soywiz.korge.view.Stage
import com.soywiz.korinject.AsyncDependency
import com.soywiz.korinject.AsyncInjector
import j4k.candycrush.lib.EventBus
import j4k.candycrush.model.Level
import j4k.candycrush.renderer.GameFieldRenderer
import j4k.candycrush.renderer.LevelCheckRenderer
import j4k.candycrush.renderer.ScoringRenderer
import j4k.candycrush.renderer.animation.TileAnimator

class KeyBindings(
    private val stage: Stage,
    private val bus: EventBus,
    private val animator: TileAnimator,
    private val scoringRenderer: ScoringRenderer,
    private val gameFlow: GameFlow,
    private val levelCheck: LevelCheck,
    private val checkRenderer: LevelCheckRenderer,
    private val level: Level,
    private val fieldRenderer: GameFieldRenderer
) : AsyncDependency {


    companion object {
        val log = Logger<KeyBindings>()

        suspend operator fun invoke(injector: AsyncInjector): KeyBindings {
            injector.mapSingleton {
                KeyBindings(get(), get(), get(), get(), get(), get(), get(), get(), get())
            }
            return injector.get()
        }
    }

    override suspend fun init() {
        bindKeys()
        bus.register<ResetGameEvent> { reloadLevel() }
        bus.register<NextLevelEvent> { shuffle() }
    }

    private fun bindKeys() {
        stage.keys {
            down {
                onKeyDown(it.key)
            }
        }
    }

    private fun resetState() {
        animator.reset()
        scoringRenderer.reset()
        gameFlow.reset()
        levelCheck.reset()
        gameFlow.checkNewField()
        checkRenderer.update()
    }

    private fun shuffle() {
        log.debug { "Shuffle & Reset" }
        resetState()
        level.field.shuffle()
        fieldRenderer.updateImagesFromField()
    }

    private fun reloadLevel() {
        log.debug { "Reload level" }
        resetState()
        level.reset()
        fieldRenderer.updateImagesFromField()
    }

    private fun onKeyDown(key: Key) {
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