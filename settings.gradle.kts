pluginManagement { repositories {  mavenLocal(); mavenCentral(); google(); gradlePluginPortal()  }  }

plugins {
    id("com.soywiz.kproject.settings") version "0.0.4"
}

kproject("./deps")
