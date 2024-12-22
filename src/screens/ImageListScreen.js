import React from "react";
import { Text, FlatList, StyleSheet, View, Image } from "react-native";
// Import images statically
const beachImage = require("../../assets/beach.jpg");
const forestImage = require("../../assets/forest.jpg");
const mountainImage = require("../../assets/mountain.jpg");

const ImageListComponents = () => {
    const places = [
      { title: "beach", image:beachImage },
      { title: "forest", image:forestImage  },
      { title: "mountain", image:mountainImage  },
    ];
    return (
      <FlatList
        //   horizontal
        // horizontal={true}
        // scrollEnabled={true}
        style={styles.container}
        data={places}
        keyExtractor={(place) => place.title}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, width: 200, height: 200 }}>
              <Text style={styles.testStyles}>{item.title}</Text>
              <Image
                source={item.image}
                // style={{ width: "100%", height: "100%" }}
              />
            </View>
          );
        }}
      />
    );
  };

  const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: "#fff",
    //   alignItems: "center",
    //   justifyContent: "center",
    },
    testStyles: {
      fontSize: 20,
      padding: 10,
    //   marginTop: 10,
    },
  });

  export default ImageListComponents;

//   // If you want to display the images in a vertical list