import React, {useState} from "react";
import { View, Text, Button, StyleSheet, Alert} from "react-native";

const CounterScreen = () =>{
const [count, setCount] = useState(0)
return (
    <View>
        <Button title="increase" onPress={()=>setCount(count + 1)}/>
        <Button title="decrease" onPress={()=>{
            if(count > 0){ 
            return setCount(count - 1)
            }
            Alert.alert("Error","cannot decrease count again!") //limit count to minimum of 0
            }}/>
        
        <Text>Current count</Text>
        <Text>{count}</Text>
    </View>
)
}

const styles = StyleSheet.create({});

export default CounterScreen;