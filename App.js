import { StyleSheet, Text, View, StatusBar } from "react-native";
import FlashFeedTabs from "./src/components/FlashFeedTabs";

export default function App() {
  return (
    <View style={styles.container}>
      <FlashFeedTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
