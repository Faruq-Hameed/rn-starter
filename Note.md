- 
- Generally for shared states, we create state variables in the most parent component that needs to read or change a state value.
- if a child needs to read a state from parent, it can be passed down as prop
- hook(e.g useState, useReducer) generally add some addition functionality or capability to a functional component
- Anytime we managing states either we are using a reducer(manage them together) or we use useState hook (to manage them individually)
- We can never have state changes being managed by both useState hook and reducer at the same time
- anytime we want to change the state in the state object, we are going to rebuild the state object

- for all primitive components the margin, padding and border are all zero (0)

## @expo/vector-icons directory (used for generating icons in react native)
- You will need to search for the icon get it name and library it comes from
e.g import {Feather} from @expo/vector-icons
- <Feather name="AntDesign" size={30}/>


- Default text font size is 14
- Anytime a TextInput is used, it is advisable to set autoCapitalize ={"none"} and autoCorrect = {false}
- onEndEditing can be used to know when a user complete an edit also onSubmitEditing can handle that