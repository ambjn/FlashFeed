import { View, StyleSheet, Dimensions } from "react-native";
import { useContext, useState } from "react";
import { NewsContext } from "../api/Context";
import Carousel from "react-native-snap-carousel";
import SingleNews from "../components/SingleNews";

const NewsScreen = () => {
  const {
    news: { articles },
  } = useContext(NewsContext);
  
  const windowHeight = Dimensions.get("window").height;

  const [activeIndex, setActiveIndex] = useState();
  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          vertical={true}
          layout={"stack"}
          data={articles.slice(0, 15)}
          sliderHeight={300}
          itemHeight={windowHeight}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: { flex: 1, backgroundColor: "black" },
});
export default NewsScreen;
