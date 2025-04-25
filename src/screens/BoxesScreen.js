import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxesScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.textStyle}>App</Text>
      <View style={styles.subParentStyle}>
        <View style={styles.childAStyle}></View>
        <View style={styles.childBStyle}></View>
        <View style={styles.childCStyle}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    parentStyle: {
        height: 200,
    },
    textStyle: {
        borderWidth: 1,
        textAlign: "center",
        flex: 0.8,
        fontSize: 30,
        lineHeight:85,
    },
    subParentStyle:{
        flex: 1,
        flexDirection: "row",
        columnGap: 10,
        // paddingBottom:20
    },
    childAStyle: {
        backgroundColor: "orange",
        flex:1,
    },
    childBStyle: {
        flex:1,
        backgroundColor: "green",
        top:'110%'
    },
    childCStyle: {
        flex: 1,
        backgroundColor: "purple",

    },

})

export default BoxesScreen