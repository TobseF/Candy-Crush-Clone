import com.soywiz.korge.gradle.GameCategory
import com.soywiz.korge.gradle.korge

buildscript {

    val korgePluginVersion = "1.5.4.0"

    repositories {
        mavenLocal()
        maven { url = uri("https://dl.bintray.com/korlibs/korlibs") }
        maven { url = uri("https://plugins.gradle.org/m2/") }
        mavenCentral()
    }
    dependencies {
        classpath("com.soywiz.korlibs.korge.plugins:korge-gradle-plugin:$korgePluginVersion")
    }
}

apply(plugin = "korge")

korge {
    id = "j4k.candycrush"
    name = "Candy Crush"
    gameCategory = GameCategory.ARCADE
}
