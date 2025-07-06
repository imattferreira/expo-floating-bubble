import { registerWebModule, NativeModule } from 'expo';

import { ExpoFloatingBubbleModuleEvents } from './ExpoFloatingBubble.types';

class ExpoFloatingBubbleModule extends NativeModule<ExpoFloatingBubbleModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoFloatingBubbleModule, 'ExpoFloatingBubbleModule');
