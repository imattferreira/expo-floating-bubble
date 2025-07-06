import ExpoModulesCore

public class ExpoFloatingBubbleModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoFloatingBubble")

    Function("getTheme") { () -> String in
      "system"
    }
  }
}
