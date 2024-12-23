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
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
