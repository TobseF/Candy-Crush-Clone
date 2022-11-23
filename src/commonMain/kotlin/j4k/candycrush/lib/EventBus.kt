package j4k.candycrush.lib

import com.soywiz.korge.bus.GlobalBus
import com.soywiz.korio.async.launchImmediately
import kotlinx.coroutines.CoroutineScope
import kotlin.reflect.KClass

/**
 * Global event bus which distributes events to registered receivers.
 */
class EventBus(private val scope: CoroutineScope) {

    private val globalBus = GlobalBus(scope.coroutineContext)

    fun send(message: Any) {
        scope.launchImmediately {
            globalBus.send(message)
        }
    }

    fun <T : Any> register(clazz: KClass<out T>, handler: suspend (T) -> Unit) {
        globalBus.register(clazz, handler)
    }

    inline fun <reified T : Any> register(noinline handler: suspend (T) -> Unit) {
        register(T::class, handler)
    }
}
