import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

// const ListComponents = function() {}
const ListComponents = () => {
  const friends = [
    { name: "Friend #1", age: "1" },
    { name: "Friend #2", age: "2" },
    { name: "Friend #3", age: "3" },
    { name: "Friend #4", age: "4" },
    { name: "Friend #5", age: "5" },
    { name: "Friend #6", age: "6" },
    { name: "Friend #7", age: "7" },
  ];
  return (
    <FlatList
    //   horizontal
      // horizontal={true}
      scrollEnabled={true}
      
      style={styles.container}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.testStyles}>
            {item.name} - Age {item.age}
          </Text>
        );
      }
    }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    //     flex: 1,
    //     // flexDirection: "row-reverse",
    //     alignContent: "center",
    //     justify: "space-between",
    //     height: "100%",
    borderWidth: 1,
    padding: 10,
    borderColor: "black",
  },
  testStyles: {
    marginVertical: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "black"
  },
});
export default ListComponents;
