import React, {useState} from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";

const ColourScreen = ()=>{
    const [colours, setColours] = useState([]);

    return (
      <View>
        <Button title="Add Random Colour" onPress={()=> {
            const mutableColours = [...colours]
            const newColour = rgbGenerator() 
            mutableColours.push(newColour)
            setColours(mutableColours)
            //easiest setColours([...colours,rgbGenerator() ])
            }}/>
        <FlatList
          data={colours}
          keyExtractor={(item) => item} //each item is assumed to be unique
          renderItem={({ item }) => {
              return <View style={[styles.box, { backgroundColor: item }]} />
          }}
        />
      </View>
    );
}

const rgbGenerator = ()=>{
    const red = Math.floor(Math.random() * 256) 
    const green = Math.floor(Math.random() * 256) 
    const blue = Math.floor(Math.random() * 256) 
    return`rgb(${red}, ${green}, ${blue})`
}
const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 101,
    }
})

export default ColourScreen;