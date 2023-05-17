import { StyleSheet, Text, View, StatusBar } from "react-native";
import FlashFeedTabs from "./src/components/FlashFeedTabs";
import Context, { NewsContext } from "./src/api/Context";
import { useContext } from "react";

function App() {
  const { darkTheme } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282c35" : "white",
      }}>
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
