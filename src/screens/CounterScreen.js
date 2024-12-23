import React, {useState, useReducer, use, act} from "react";
import { View, Text, Button, StyleSheet, Alert} from "react-native";

//USING useState HOOK
// const CounterScreen = () =>{
// const [count, setCount] = useState(0)
// return (
//     <View>
//         <Button title="increase" onPress={()=>setCount(count + 1)}/>
//         <Button title="decrease" onPress={()=>{
//             if(count > 0){ 
//             return setCount(count - 1)
//             }
//             Alert.alert("Error","cannot decrease count again!") //limit count to minimum of 0
//             }}/>
        
//         <Text>Current count</Text>
//         <Text>{count}</Text>
//     </View>
// )
// }


//USING useReducer HOOK
const reducer = (state, action) => {
  switch (action.type) {
    case "increase_count":
      return {...state, count: state.count + action.payload };
    case "decrease_count":
      return state.count + action.payload < 0
        ? state
        : {...state, count: state.count + action.payload };
        default: return state
  }
  //   return state.type === "increase_count"
  //     ? { count: state.count + action.payload }
  //     : { count: state.count - action.payload };
};
const CounterScreen = ()=>{
const [state, dispatch] = useReducer(reducer, {count: 0})
    return(
        <View>
            <Button title= "Increase Count"onPress={()=>dispatch({type: "increase_count", payload: 1})}/>
            <Button  title= "Decrease Count" onPress={()=> dispatch({type: "decrease_count", payload: -1 })}/>
            <Text>Current Count:</Text>
            <Text style={{backgroundColor: "green", width: 40, margin:"auto"}}>{state.count}</Text>
        </View>
    )
}
const styles = StyleSheet.create({});

export default CounterScreen;