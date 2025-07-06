import { NativeModule, requireNativeModule } from 'expo';

import { ExpoFloatingBubbleModuleEvents } from './ExpoFloatingBubble.types';

declare class ExpoFloatingBubbleModule extends NativeModule<ExpoFloatingBubbleModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoFloatingBubbleModule>('ExpoFloatingBubble');
