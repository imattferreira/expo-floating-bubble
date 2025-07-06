import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoFloatingBubbleViewProps } from './ExpoFloatingBubble.types';

const NativeView: React.ComponentType<ExpoFloatingBubbleViewProps> =
  requireNativeView('ExpoFloatingBubble');

export default function ExpoFloatingBubbleView(props: ExpoFloatingBubbleViewProps) {
  return <NativeView {...props} />;
}
