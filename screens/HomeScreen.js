import { Pressable,SafeAreaView, StyleSheet,Button, Text, View,Image,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import Background from "../assets/Background";
import Btn from '../assets/btn';


const IMG_URI ="https://img.icons8.com/fluency/512/user-male-circle.png";

export default function HomeScreen(props) {
    // const onPressHandler=()=>{
    //   navigation.navigate('Profile');
    
    // }
    
      return (
        <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
      <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Dentistry</Text>
      <Btn bgColor="#318eab" textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor="#318eab" btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>


     




      );
    }







const styles = StyleSheet.create({

       
        
        })