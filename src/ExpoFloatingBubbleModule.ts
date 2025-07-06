import { NativeModule, requireNativeModule } from "expo";

import { ExpoFloatingBubbleModuleEvents } from "./ExpoFloatingBubble.types";

declare class ExpoFloatingBubbleModule extends NativeModule<ExpoFloatingBubbleModuleEvents> {
  hasPermission: () => boolean;
  requestPermission: () => Promise<boolean>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoFloatingBubbleModule>(
  "ExpoFloatingBubble"
);
