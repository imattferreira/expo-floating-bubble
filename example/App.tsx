import * as ExpoFloatingBubble from "expo-floating-bubble";
import { useEffect, useRef, useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  AppStateStatus,
  AppState,
} from "react-native";

export default function App() {
  const appState = useRef<AppStateStatus>(AppState.currentState);
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);

  useEffect(() => {
    const isGranted = ExpoFloatingBubble.hasPermission();

    if (isGranted) {
      setIsPermissionGranted(isGranted);
      return;
    }

    ExpoFloatingBubble.requestPermission();

    const subscription = AppState.addEventListener(
      "change",
      async (nextAppState) => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
          const isGranted = ExpoFloatingBubble.hasPermission();
          if (!isGranted) {
            await ExpoFloatingBubble.requestPermission();
            return;
          }
          setIsPermissionGranted(isGranted);
        }
        appState.current = nextAppState;
      }
    );

    return () => {
      subscription.remove?.();
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Permission: {String(isPermissionGranted)}</Text>
      {/* <TouchableOpacity onPress={onRequestPermission}>
        <Text>Request</Text>
      </TouchableOpacity> */}
    </View>
  );
}
