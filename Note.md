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

- useEffect allows us to run code snippet one time when our component first render to screen
- if we only pass the first argument i.e the callback function only to the useEffect, the callback will be called every time the component is rendered which might not be what we want at every render.
- if we pass the second argument (an empty array []) the useEffect will be only call the callback function once and that will be in the first rendered.
- if the second argument contains elements in it the array, the useEffect will be called again when any value in the array changes though that is wield

- useNavigation hook(in functional component) can be used directly navigation instead of it being passed by the parent component to the child as prop that cares about it

- centralizing data at the root level of our application is called global state management

- props is used to pass data from direct parent to the immediate child components while context can be used to pass data from a parent to a deeply nested child component

- the app.js of any react native app must always return a react component

- usually when we create a context in react, we usually have one copy of it floating around

- context system is technically just a system for communicating information. We are not actually using it to manage state rather than using it to move things(information) around. How Context Delivers Updates
React ensures that:
Any state change in the context's value triggers a re-render of all components consuming the context.
Only the components that directly use the context will re-render. Others are unaffected.
This makes context efficient for delivering changes without manually passing props to every component.

- A reducer no matter what must always return a value

-Automated function to set u p Context and Provider 
 * reusable context-based state management
 * can use this function to create multiple contexts for different parts of your application, 
 * each with its own reducer and initial state.

 - Even though we have a centralizing state manager with context, we can still have small state in a component.

 - process of adding some state into a test input is called TURNING THAT THING INTO CONTROL INPUT
- whenever we are getting data from  api we should rely on it as is it the total source of truth and 100% reliable

- React Stack Navigator allows us to go back and forth between different screens.

- There are other Navigators available to us that we can use for other forms of common types of navigation. We can find doc on them on reactnavigation.org/docs/en/api-reference.html

- Bottom Tab Navigator shows a collection of different screens that are tied together with a tab bar at the bottom of the screen of the device with buttons to navigate between screens

- Switch Navigator e.g when user go from sign in screen to the dashboard screen (after successful login) we abruptly switch the screen to Dashboard without a way to switch back

-Drawer Navigator give a flyout menu from either from left side or right side and inside that flyout window, there will be different links that user can tap to go to different screens in the application

- It is advisable that navigation to and from different screens should be setup first when creating application

- react-native-element is a library that has a lot of pre-built common components inside of it that already have some default stylings applied to it.

- we can use Async storage to store small information like json data and persisted across the application. We should only store small information not big data like image or other big data

- SafeAreaView ensure that no content on the screen is rendered behind the device status bar

- MapView component too is like image, it has no default hight or width so u have to add them so you can see it 
- By default google map will set lat and long to zero whereas on apple it gonna try to set to your local country

- Tracking user foreground location while the application is visible on the screen we that is foreground location tracking. It is easier to set up.

- Background tracking is enabled at all time even if the user is not using the app. It consumes battery. More complicated to set up

-  The cleanup function you return from a useEffect hook is called when the component is unmounted or before the effect is re-run (if the dependency array changes).

- useFocusEffect (from React Navigation)
Purpose:
Runs when the screen comes into focus.
Runs its cleanup when the screen goes out of focus (loses focus).

