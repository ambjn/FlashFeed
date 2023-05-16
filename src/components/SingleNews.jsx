import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const SingleNews = ({ item, index }) => {
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        // transform: [{ scaleY: -1 }], //to inverse the news
      }}>
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "40%", width: windowWidth, resizeMethod: "cover" }}
      />
      <View style={{ ...styles.description, backgroundColor: "#282C35" }}>
        <Text style={{ ...styles.title, color: "white" }}>{item.title}</Text>
        <Text style={{ ...styles.content, color: "white" }}>
          {item.description}
        </Text>
        <Text style={{ color: "white" }}>
          FlashFeed By:
          <Text style={{ color: "white" }}>
            {`  ${item.author}` ?? "unknown"}
          </Text>
        </Text>
        <ImageBackground
          blurRadius={30}
          style={styles.footer}
          source={{ uri: item.urlToImage }}>
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Text style={{ fontSize: 15, color: "white" }}>
              {item?.content?.slice(0, 45)}
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
    color: "white",
  },
  content: { fontSize: 18, paddingBottom: 10 },
  footer: {
    height: 100,
    width: windowWidth,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  description: { padding: 15, flex: 1 },
});
