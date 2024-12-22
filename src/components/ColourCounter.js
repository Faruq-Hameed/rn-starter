import React, { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const ColourCounter = ({colour, onIncrease, onDecrease}) => {

  return (
    <View
      style={{
        marginBottom: 30,
        borderWidth: 1,
        borderColor: "black",
      }}
    >
      <Text>{colour}</Text>
      <Button
        title={`Increase ${colour} colour`}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Decrease ${colour} colour`}
        onPress={() => onDecrease()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // container:
});

export default ColourCounter;
