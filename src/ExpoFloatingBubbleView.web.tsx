import * as React from 'react';

import { ExpoFloatingBubbleViewProps } from './ExpoFloatingBubble.types';

export default function ExpoFloatingBubbleView(props: ExpoFloatingBubbleViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
