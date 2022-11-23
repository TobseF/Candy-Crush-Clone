import com.soywiz.korge.gradle.*

plugins {
    alias(libs.plugins.korge)
}

korge {
    id = "j4k.candycrush"
    name = "Candy Crush"
    gameCategory = GameCategory.ARCADE

    // To enable all targets at once
    //targetAll()

    // To enable targets based on properties/environment variables
    //targetDefault()

    // To selectively enable targets

    targetJvm()
    targetJs()
    //targetDesktop()
    //targetIos()
    //targetAndroidIndirect() // targetAndroidDirect()

    serializationJson()
    //targetAndroidDirect()
}


dependencies {
    add("commonMainApi", project(":deps"))
    //add("commonMainApi", project(":korge-dragonbones"))
}