import { StyleSheet, Text, View, StatusBar } from "react-native";
import FlashFeedTabs from "./src/components/FlashFeedTabs";
import Context, { NewsContext } from "./src/api/Context";
import { useContext,useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

function App() {
  const { darkTheme } = useContext(NewsContext);
  const [fontsLoaded] = useFonts({
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#282c35" : "white",
      }}
      onLayout={onLayoutRootView}>
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
