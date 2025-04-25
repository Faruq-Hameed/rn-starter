import React, {useState} from 'react'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const PasswordScreen = () =>{
const [password, setPassword] = useState<string>("")
    return (
      <View>
        <Text>Enter Password:</Text>
        <TextInput
          style={style.input}
          onEndEditing={(value) => setPassword(password + value)}
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

export default PasswordScreen