import { StyleSheet, Text, View, StatusBar } from "react-native";
import FlashFeedTabs from "./src/components/FlashFeedTabs";
import Context from "./src/api/Context";

function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
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

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
