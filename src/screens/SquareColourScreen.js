import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColourCounter from "../components/ColourCounter";

const SquareColourScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
console.log(`rbg(${red}, ${green}, ${blue})`)
  return (
    <View>
      <ColourCounter
        colour="Red"
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
      />
      <ColourCounter
        colour="Green"
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}
      />

      <ColourCounter
        colour="Blue"
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}
      />
      <Text
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rbg(${red}, ${green}, ${blue})`,
        }}
      ></Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareColourScreen;
