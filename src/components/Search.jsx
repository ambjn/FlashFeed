import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "../api/Context";
import { Entypo } from "@expo/vector-icons";
import SingleNews from "../components/SingleNews";

const Search = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);

  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState();

  const handleModal = (n) => {
    setModalVisible(true);
    setCurrentNews(n);
  };

  const handleSearch = (text) => {
    if (!text) {
      setSearchResults([]);
      return;
    }
    setSearchResults(articles.filter((query) => query.title.includes(text)));
  };
  return (
    <View style={{ width: "100%", position: "relative" }}>
      <TextInput
        style={{ ...styles.search, backgroundColor: "black", color: "white" }}
        onChangeText={(text) => handleSearch(text)}
        placeholder='search for news on FlashFeed⚡'
        placeholderTextColor={"white"}
      />
      <View style={styles.searchResults}>
        {searchResults.slice(0, 3).map((n) => (
          <TouchableOpacity
            key={n.title}
            activeOpacity={0.7}
            onPress={() => handleModal(n)}>
            <Text
              style={{
                ...styles.singleResult,
                backgroundColor: "transparent",
                color: "white",
              }}>
              {n.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            position: "absolute",
            zIndex: 1,
            right: 0,
            margin: 20,
          }}>
          <Entypo name='circle-with-cross' size={30} color='white' />
        </TouchableOpacity>
        <View style={{ height: "100%" }}>
          <SingleNews item={currentNews} />
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  searchResults: {
    position: "absolute",
    zIndex: 1,
    top: 50,
  },
  singleResult: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: "black",
    elevation: 5,
  },
});
export default Search;