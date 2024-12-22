import React from "react";
import { Text,View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const name = 'Faruq'
  return (
    <View>
      <Text style={styles.headerText}>Hello from component screen!</Text>
      <Text style={styles.subText}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 45,
    padding: 10
  },
  subText: {
    fontSize: 20,
    padding: 10
  },
});

export default ComponentsScreen;
