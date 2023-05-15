import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Detector from './screens/tooth';
import History from './screens/pastresult';
import startpage from './assets/startpage';
import Profile from './screens/Profile';
import User from './screens/User';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();

function App() {
  return (

   
<SafeAreaProvider>
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="User" component={User} />
      </Stack.Navigator>
  
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
