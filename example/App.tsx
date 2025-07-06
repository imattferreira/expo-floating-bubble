import * as ExpoFloatingBubble from "expo-floating-bubble";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Theme: {ExpoFloatingBubble.getTheme()}</Text>
    </View>
  );
}
