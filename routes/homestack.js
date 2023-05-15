import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Reviewdetails from '../screens/Reviewdetails';
const screens={
Home: {
    screen:Home

},
Reviewdetails:{
    screen:Reviewdetails
}


}

const HomeStack =createNativeStackNavigator();
export default NavigationContainer(HomeStack);