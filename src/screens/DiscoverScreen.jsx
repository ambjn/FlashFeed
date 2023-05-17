import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useContext } from "react";
import { NewsContext } from "../api/Context";
import { categories, sources } from "../api/Api";
import Carousel from "react-native-snap-carousel";

const windowWidth = Dimensions.get("window").width;
const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

const DiscoverScreen = () => {
  const { setCategory, setSource } = useContext(NewsContext);
  return (
    <View style={styles.discoverContainer}>
      {/* search */}
      {/* categories */}
      <Text style={{ ...styles.subtitle, color: "#ffffff" }}>Categories</Text>
      <Carousel
        layout='default'
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCategory(item.name)}>
            <Image
              source={{ uri: item.pic }}
              style={styles.categoryImage}
              resizeMode='contain'
            />
            <Text style={{ ...styles.name, color: "#ffffff" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment='start'
        inactiveSlideScale={1}
        inactiveSlideOpacity={0.5}
      />
      {/* sources */}
      <Text style={{ ...styles.subtitle, color: "#ffffff" }}>Sources</Text>
      <View style={styles.sources}>
        {sources.map((source) => (
          <TouchableOpacity
            onPress={() => setSource(source.id)}
            key={source.id}
            style={styles.sourceContainer}>
            <Image source={{ uri: source.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discoverContainer: { padding: 10, alignItems: "center" },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  categoryImage: { height: "60%", width: "100%" },
  name: { fontSize: 14, textTransform: "capitalize" },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceContainer: {height:150,width:"40%",borderRadius:10,margin:10,backgroundColor:"#cc313d"},
  sourceImage: { height: "100%", borderRadius: 10, resizeMode: "cover" },
});

export default DiscoverScreen;
