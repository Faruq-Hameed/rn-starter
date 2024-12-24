import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const TextScreen = () =>{
const [password, setPassword] = useState("")
    return (
      <View>
        <Text>Enter Password:</Text>
        <TextInput
          style={style.input}
          onEndEditing={() => setPassword(password + value)}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(newValue) => setPassword(newValue)}
        />
        {password.length < 5 ? (
          <Text>Password must be greater than 5 characters</Text>
        ) : null}
      </View>
    );
}

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        margin: 15,
        // borderBlockColor: 'black',
    }
})

export default TextScreen