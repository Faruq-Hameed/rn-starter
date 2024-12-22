import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageDetails = ({image, title, score}) => {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default ImageDetails;
