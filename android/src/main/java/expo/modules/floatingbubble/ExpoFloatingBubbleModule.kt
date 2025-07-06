package expo.modules.floatingbubble

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.net.URL

class ExpoFloatingBubbleModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoFloatingBubble")

    Function("getTheme") {
      return@Function "system"
    }
  }
}
