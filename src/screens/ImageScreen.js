import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails title="Beach" image={require("../../assets/beach.jpg")} score={9}/>
      <ImageDetails title="Forest" image={require("../../assets/forest.jpg")} score={10} />
      <ImageDetails title="Mountain" image={require("../../assets/mountain.jpg")} score={12} />
    </View>
  );
};

export default ImageScreen;
