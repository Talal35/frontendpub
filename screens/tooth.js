import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View,PermissionsAndroid,Image,ImageBackground,ScrollView,Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';
import { useState,useEffect } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Button } from 'react-native-paper';

const testurl="https://privacy.microsoft.com/en-ca";
const backimage={uri:"https://cdn-icons-png.flaticon.com/512/4982/4982352.png"};


export default function Detector({}) {
  ///const [galleryphoto,setGalleryphoto]=useState();

  // const  Gallery=()=>{
    
  //   let Options={
  //     saveToPhotos:true,
  //     mediaType:'photo',
  //   }
  //   OpenGallery();
  // } 


  // const OpenGallery=  ()=>{
  //     const granted = PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.Gallery,
  //     )
  //     if(granted== PermissionsAndroid.RESULTS.granted){
  //       const result=  launchImageLibrary(Options);
  //       setGalleryphoto(result.assets[0].uri);
  //     }
    
  //   }
  const [image, setImage] = useState(null);
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    Linking.canOpenURL(testurl).then((supported)=>{
      supported && Linking.openURL(testurl);
    });
     result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
   
  };


    return (
    
      <View style={styles.Hbody}>
      
       
       <View style={styles.header}>
        <Text style={styles.text}>Dental dieases detection</Text>
        
    
        </View>
              <View style={styles.Buttonview} opacity={1.0} >
            
            <Pressable onPress={pickImage} 
            android_ripple={{'color':'black'}}
            style={styles.buttonstyles}
            
            >
              {/* <FontAwesome5 icon="fal fa-image-polaroid" style={styles.iconbutton}/> */}
              <Text style={styles.buttontext}>Open </Text>
              
            </Pressable> 
            <Image style={styles.tempimage} source={{ uri: image }}  />
          
        
        </View>

        <ImageBackground source={backimage} resizeMode="center" style={styles.bimage}>
      
         
     </ImageBackground>   
      
        
        {/* <ImageBackground source={backimage} resizeMode="contain" style={styles.bimage} >
      
      </ImageBackground> */}
       
      </View>
    );
  }

  const styles = StyleSheet.create({

    Hbody:{
      flex : 1,
   
    // alignItems : 'center', // Vertically
    // justifyContent : 'center', // Horizontally  
   

    
    },
    header:{
      paddingTop:60,
      alignItems:'center',
      justifyContent:'center',

    },
    text:{
      fontSize:25,
      
    },
    Buttonview:{
     // marginTop:40,
     alignItems:'center',
     justifyContent:'center'
   
     
    },
    buttontext:{
      fontSize:20,
      
    },
    buttonstyles:{
    padding:10,
    backgroundColor:"#C17FC7",
    borderRadius:10,
    top:200,
    right:130
    
   
  

    },
    bimage:{
      
      flex:.5,
     opacity:0.3,
      justifyContent:'center',
      marginLeft:100,
      marginRight:100,
      // backgroundColor:"red"
      
    

  
    },
    tempimage:{
      width:100,
      height:100,
     
    },
    iconbutton:{
    
    }
    
    
    
    })
