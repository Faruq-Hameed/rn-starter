import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={[styles.childOneStyle, {backgroundColor: 'orange'}, {borderColor: "orange"}]}>Child 1</Text>
      <View style={[styles.childTwoStyle, {backgroundColor: 'rgb(213, 233, 236)'}, {borderColor: 'rgb(4, 141, 146)'}]}>
        <Text style={styles.childAStyle }>Child 2A</Text>
        <Text style={styles.childCStyle }>HELLO WORLD!</Text>
        <Text style={styles.childBStyle}>Child B</Text>
      </View>
      <Text style={[styles.childThreeStyle, {backgroundColor: 'rgb(33, 209, 106)'}, {borderColor: 'rgb(33, 209, 106)'}]}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    // flexDirection: "row",
    // alignItems: "flex-start", 
    // justifyContent: "space-between",
    height: 200,
  },
childOneStyle: {
    borderWidth: 1,
    flex: 1,
    textAlign: "center",
},
childTwoStyle: {
  borderWidth: 1,
  flex: 2,
  flexDirection:"row",
  justifyContent:"space-between",
  display:"flex"
  // textAlign: "center",
  // alignSelf: "flex-end",
},
childThreeStyle: {
  borderWidth: 1,
  flex: 1,
  textAlign: "center",
  // position: "absolute",
  // ...StyleSheet.absoluteFill // child component to fill the entire parent container
  // ...StyleSheet.absoluteFillObject //child component to fill the entire parent container

},
childAStyle: {
  // borderWidth: 1,
  flex: 0.2,
  textAlign: "center",
  // textAlignVertical:"center", //WORKS ONLY ON ANDROID
  paddingTop: 40,
  
  backgroundColor: "rgb(196, 187, 61)"
},
childBStyle: {
  flex: 0.2,
  textAlign: "center",
  paddingTop: 40,
  backgroundColor: "rgb(61, 196, 187)"
},
childCStyle: {
  flex: 0.6,
  textAlign: "center",
  paddingTop: 40,
  backgroundColor: "rgb(56, 160, 24)",
  // position:"absolute",
  // top:-25,
  
},
});

export default BoxScreen;