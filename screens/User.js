import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detector from './tooth';
import History from './pastresult'
import Profile from './Profile'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Tab =  createMaterialBottomTabNavigator();

export  function User(navigation) {
  return (
   
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon: ({focused,size,color})=>{
          let iconName;
          if(route.name =='Profile')
          {
            iconName='house-user';
            size=focused ? 22: 15;
            //color=focused ? '#39E9EB':'black';
           
          }
          else if(route.name== 'Detector'){
            iconName='tooth';
            size=focused ? 22: 15;
            //color=focused ? '#39E9EB':'black';
           
          }
          else if(route.name== 'History'){
            iconName='file-medical';
            size=focused ? 22: 15;
          }
          return(
            <FontAwesome5
            name={iconName}
            size={size}
            color={color}
            
            />

          )
        }

      })}
      
      activeColor='#C17FC7'
      inactivecolor='black'
      barStyle={{ backgroundColor: '#318eab' }}
     
      //shifting={true}
      >
        {/* <Tab.Screen name="Home" component={Home}/> */}
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Detector" component={Detector} />
        <Tab.Screen name="History" component={History}/>
      </Tab.Navigator>
  
  );
}

export default User;