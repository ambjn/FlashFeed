import { StyleSheet, useWindowDimensions } from "react-native";
import { useState } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import DiscoverScreen from "../screens/DiscoverScreen";
import NewsScreen from "../screens/NewsScreen";
import TopNavigation from "./TopNavigation";

const FlashFeedTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);
  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default FlashFeedTabs;

const styles = StyleSheet.create({});
