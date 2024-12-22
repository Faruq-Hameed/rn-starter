import React from "react";
import BillItem from "../components/BillComponents";
import { TouchableOpacity } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

const BillComponents = ({ navigation }) => {
  return (
    <View>
      <BillItem
        screen="List"
        name="To List"
        icon="image.com"
        navigation={navigation}
      />
      <BillItem
        screen="List"
        name="To Payment"
        icon="image.com"
        navigation={navigation}
      />
      <BillItem
        screen="List"
        name="To Loan"
        icon="image.com"
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default BillComponents;
