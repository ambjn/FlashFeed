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
import React, { useContext } from "react";
import { NewsContext } from "../api/Context";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const SingleNews = ({ item }) => {
  const { darkTheme } = useContext(NewsContext);
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
      }}>
      <Image
        source={{ uri: item.urlToImage }}
        style={{ height: "40%", width: windowWidth }}
        resizeMode='cover'
      />
      <View
        style={{
          ...styles.description,
          backgroundColor: darkTheme ? "#282C35" : "white",
        }}>
        <Text style={{ ...styles.title, color: darkTheme ? "white" : "black" }}>
          {item.title}
        </Text>
        <Text
          style={{ ...styles.content, color: darkTheme ? "white" : "black" }}>
          {item.description}
        </Text>
        <Text
          style={{
            color: darkTheme ? "white" : "black",
            paddingVertical: 20,
            opacity: 0.75,
          }}>
          FlashFeed By:
          <Text
            style={{
              color: darkTheme ? "white" : "black",
            }}>
            {`  ${item.author}` ?? "unknown"}
          </Text>
        </Text>
        <ImageBackground
          blurRadius={100}
          style={styles.footer}
          source={{ uri: item.urlToImage }}>
          <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
            <Text
              style={{ fontSize: 15, color: darkTheme ? "white" : "black" }}
              numberOfLines={2}>
              {item?.content}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: darkTheme ? "white" : "black",
                paddingVertical: 5,
              }}>
              Read More....
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
    fontSize: 22,
    fontWeight: "400",
    paddingBottom: 10,
  },
  content: { fontSize: 18, paddingVertical: 10,opacity:0.8 },
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
  description: { padding: 15, flex: 1,},
});
