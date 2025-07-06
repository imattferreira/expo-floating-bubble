import ExpoFloatingBubbleModule from "./ExpoFloatingBubbleModule";
export * from "./ExpoFloatingBubble.types";

export function hasPermission(): boolean {
  return ExpoFloatingBubbleModule.hasPermission();
}

export function requestPermission(): Promise<boolean> {
  return ExpoFloatingBubbleModule.requestPermission();
}
