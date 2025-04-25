import React from "react";

import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";
const BillItem = ({ navigation, icon, name, screen }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <Image src={icon} />
      <Image source={require("../../assets/beach.jpg")} />

      <Text>{name} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default BillItem;
