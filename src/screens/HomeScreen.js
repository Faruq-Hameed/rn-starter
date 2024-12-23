import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity,Image } from "react-native";
import ImageDetails from "../components/ImageDetails";


const HomeScreen = ({ navigation }) => {
  const name = "Faruq";
  return (
    <View>
      <ImageDetails title="Beach" />

      <Image source={require("../../assets/beach.jpg")} />
      {/* <Text style={styles.headerText}></Text>; */}
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("Component")}
      />

      <Button
        title="Go to Bill Demo"
        onPress={() => navigation.navigate("Bill")}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />

      <Button
        title="Go to Image List Demo"
        onPress={() => navigation.navigate("ImageList")}
      />

      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        title="Go to Colour Demo"
        onPress={() => navigation.navigate("Colour")}
      />
      <Button
        title="Go to Square Colour Demo"
        onPress={() => navigation.navigate("SquareColour")}
      />

      {/* <Text style={styles.subText}>My name is {name}</Text>; */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 45,
    padding: 10,
  },
  subText: {
    fontSize: 20,
    padding: 10,
  },
});

export default HomeScreen;
