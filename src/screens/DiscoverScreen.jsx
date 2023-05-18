import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "../api/Context";
import { categories, sources } from "../api/Api";
import Search from "../components/Search";


const DiscoverScreen = () => {
  const { setCategory, setSource, darkTheme } = useContext(NewsContext);
  const [currentCategory, setCurrentCategory] = useState("General");

  return (
    <ScrollView>
      <View style={{ ...styles.discoverContainer, flex: 1 }}>
        {/* search */}
        <Search />
        {/* categories */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              ...styles.subtitle,
              color: darkTheme ? "white" : "black",
            }}>
            Categories
          </Text>
          <View style={styles.categoriesContainer}>
            {categories.map((item, index) => (
              <TouchableOpacity
                style={styles.category}
                onPress={() => {
                  setCurrentCategory(item);
                  setCategory(item.name);
                }}>
                <Image
                  source={{ uri: item.pic }}
                  style={{ ...styles.categoryImage, index }}
                  resizeMode='contain'
                />
                <Text
                  style={{
                    ...styles.name,
                    color: darkTheme ? "white" : "black",
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* sources */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              ...styles.subtitle,
              color: darkTheme ? "white" : "black",
            }}>
            Sources
          </Text>
          <ScrollView
            horizontal
            style={{ paddingTop: 30 }}
            showsHorizontalScrollIndicator={false}>
            {sources.map((source) => (
              <TouchableOpacity
                onPress={() => setSource(source.id)}
                key={source.id}
                style={{ height: 175, width: 175, paddingRight: 20 }}>
                <Image
                  source={{ uri: source.pic }}
                  style={styles.sourceImage}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  discoverContainer: { padding: 10, alignItems: "center" },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    paddingTop:20,
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
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceImage: { height: "100%", borderRadius: 15, resizeMode: "contain" },
});

export default DiscoverScreen;
