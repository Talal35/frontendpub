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

export default function Profile({navigation}) {
    const onPressHandler=()=>{
      navigation.navigate('Profile');
    
    }
    <Image style={styles.imageprofile} source={{ uri: IMG_URI }} />
    
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
        animated={true}
        backgroundColor="#318eab"
       
        />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                   
                  
                </View>

                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <View style={styles.profile}>
                    <Image style={styles.imageprofile} source={{ uri: IMG_URI }} />
                    </View>
                    </View>
                 
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Abdul Samad</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Healthy Mouth</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>55</Text>
                        <Text style={[styles.text, styles.subText]}>Tests</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>45</Text>
                        <Text style={[styles.text, styles.subText]}>Safe</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>10</Text>
                        <Text style={[styles.text, styles.subText]}>Further Checkup Required</Text>
                    </View>
                </View>

                <View style={{ marginTop: 32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.mediaImageContainer}>
                        <Image style={styles.imageprofile} source={{ uri: IMG_URI }} />
                           
                        </View>
                        <View style={styles.mediaImageContainer}>
                        <Image style={styles.imageprofile} source={{ uri: IMG_URI }} />
                           
                        </View>
                        <View style={styles.mediaImageContainer}>
                        <Image style={styles.imageprofile} source={{ uri: IMG_URI }} />
                           
                        </View>
                    </ScrollView>
                    <View style={styles.mediaCount}>
                        <Text style={[styles.text, { fontSize: 24, color: "#DFD8C8", fontWeight: "300" }]}>70</Text>
                        <Text style={[styles.text, { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }]}>Total</Text>
                    </View>
                </View>
                <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Diagnosed <Text style={{ fontWeight: "400" }}>Ulcer</Text> and <Text style={{ fontWeight: "400" }}>Misalignment</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.recentItem}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Diagnosed <Text style={{ fontWeight: "400" }}>tooth decay</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

      















      // <View style={styles.Hbody}>
        
      //   <View style={styles.picview}>
      //     {/* <View style={styles.textview}>
      //       <Text style={styles.testtxt}>sexo?</Text>
      //     </View> */}
      //   <Image style={styles.imageprofile} source={{ uri: IMG_URI }} />
      //   </View>
        
      // {/* <Text style={styles.text}>Profile</Text> */}
      //   {/* <Pressable 
      //   onPress={onPressHandler}
      //   style={({pressed})=>({backgroundColor:pressed ?'red':'#0ff'})}
      //   >
          
      //   </Pressable> */}
      // </View>
   
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
},
text: {
    fontFamily: "sans-serif",
    color: "#52575D"
},
image: {
    flex: 1,
    height: undefined,
    width: undefined
},
titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
},
imageprofile:{
      width:100,
      height:100,
      borderRadius:150,
    
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500"
},
profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
},
dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
},
active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
},
add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
},
infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
},
statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
},
statsBox: {
    alignItems: "center",
    flex: 1
},
mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
},
mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1
},
profile:{
    paddingTop:80,
    paddingLeft:30
},
recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
},
recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
},
activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
}
















      // Hbody:{
      //   flex:1,
      //   // alignItems:'center',
      //   // justifyContent:'center',
      
      // },
      // text:{
      //   fontSize:45,
      
      
      // },
      // imageprofile:{
      //     width:100,
      //     height:100,
      //     borderRadius:150,
        
      // },
      // picview:{
      //   paddingTop:30,
      //   alignItems:'flex-start',
      
      // },
      // testtxt:{
      //   alignItems:'center',
      //   justifyContent:'center',
      // },
      // textview:{
      //     alignItems:'center',
      // },

      
      
      
      
      });