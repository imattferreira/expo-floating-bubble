// Reexport the native module. On web, it will be resolved to ExpoFloatingBubbleModule.web.ts
// and on native platforms to ExpoFloatingBubbleModule.ts
export { default } from './ExpoFloatingBubbleModule';
export { default as ExpoFloatingBubbleView } from './ExpoFloatingBubbleView';
export * from  './ExpoFloatingBubble.types';
