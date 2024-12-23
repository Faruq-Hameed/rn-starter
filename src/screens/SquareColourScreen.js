import React, { useState, useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColourCounter from "../components/ColourCounter";

// /**USING useState HOOK TO MANAGE STATES */
// const SquareColourScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   const COLOUR_CONSTANT = {
//     INCREMENT :10,
//     MIN: 0,
//     MAX: 255
//   }

//   const setColour = (colour, change) =>{
// switch (colour) {
//   case "red":
//     red + change > 255 || red + change < 0 ? null : setRed(red + change);
//     break;
//   case "green":
//     green + change > 255 || green + change < 0 ? null : setGreen(green + change);
//     break;
//   case "blue":
//     blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
//     break;
//     default:
//         break;
// }
//   }
//   console.log({red, green, blue})

//   return (
//     <View>
//       <ColourCounter
//         colour="Red"
//         onIncrease={() => setColour("red", COLOUR_CONSTANT.INCREMENT)}
//         onDecrease={() => setColour("red", -1 * COLOUR_CONSTANT.INCREMENT)}
//       />
//       <ColourCounter
//         colour="Green"
//         onIncrease={() => setColour("green", COLOUR_CONSTANT.INCREMENT)}
//         onDecrease={() => setColour("green", -1 * COLOUR_CONSTANT.INCREMENT)}
//       />

//       <ColourCounter
//         colour="Blue"
//         onIncrease={() => setColour("blue", COLOUR_CONSTANT.INCREMENT)}
//         onDecrease={() => setColour("blue", -1 * COLOUR_CONSTANT.INCREMENT)}
//       />
//       <Text
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: `rgb(${red}, ${green}, ${blue})`,
//         }}
//       ></Text>
//     </View>
//   );
// };

const COLOUR_CONSTANT = {
  INCREMENT: 10,
  MIN: 0,
  MAX: 255,
};
const reducer = (state, action) => {
  //state === {{red: 0, green:0, blue:0}} i.e initial state
  //action === {type : 'change_red'|'change_green' | 'change_blue', payload: 15 | -15}
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    // return { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

/**USING REDUCER TO MANAGE STATES */
const SquareColourScreen = () => {
  //a better name for dispatch is runMyReducer
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  console.log({state})
  return (
    <View>
      <ColourCounter
        colour="Red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOUR_CONSTANT.INCREMENT })
        }
        onDecrease={() =>
          dispatch({
            type: "change_red",
            payload: -1 * COLOUR_CONSTANT.INCREMENT,
          })
        }
      />
      <ColourCounter
        colour="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOUR_CONSTANT.INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOUR_CONSTANT.INCREMENT })
        }
      />

      <ColourCounter
        colour="Blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOUR_CONSTANT.INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOUR_CONSTANT.INCREMENT })
        }
      />
      <Text
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareColourScreen;
