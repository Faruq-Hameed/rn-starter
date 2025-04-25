import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListComponents from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import BillComponents from "./src/components/BillComponents";
import ImageListComponents from "./src/screens/ImageListScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColourScreen from "./src/screens/ColourScreen";
import SquareColourScreen from './src/screens/SquareColourScreen';
import TextScreen from './src/screens/TextScreen';
import PasswordScreen from "./src/screens/PasswordScreen";
import BoxScreen from "./src/screens/BoxScreen";
import BoxesScreen from "./src/screens/BoxesScreen";
console.log("hello")
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListComponents,
    Component: ComponentsScreen,
    Bill: BillComponents,
    Image: ImageScreen,
    ImageList: ImageListComponents,
    Counter: CounterScreen,
    Colour: ColourScreen,
    SquareColour: SquareColourScreen,
    Text: TextScreen,
    Password: PasswordScreen,
    Box:{navigationOptions:{
      title: "Box",
      headerTintColor: "green" //all header text colour for the screen
    } , screen: BoxScreen},
    Boxes: BoxesScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
