package j4k.candycrush.level

import j4k.candycrush.model.Level

class LevelFactory {

    fun createLevel(level: Int): Level {

        val reserveData = """
            |[E,C,B,A,D,D,C,C]
            |[D,A,E,C,B,E,D,B]
            """.trimMargin()

        val levelData = """
            |[A,B,C,D,E,B,D,A]
            |[B,B,C,A,D,D,B,C]
            |[A,C,B,E,E,B,D,C]
            |[D,E,E,B,A,E,C,A]
            |[E,D,A,E,C,C,D,B]
            |[E,A,D,C,B,A,A,E]
            """.trimMargin()

        return Level(levelData, reserveData)
    }
}