import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View,ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function History({navigation}) {
    // const onPressHandler=()=>{
    //   navigation.navigate('Home');
    
    // }
  
    return (
    
      <SafeAreaView style={styles.Hbody}>
       <View style={styles.header}>
        <Text style={styles.text}>Your test history</Text>
        </View>

        
        <View style={styles.box}>
        <View style={styles.inner}>
            <Text style={styles.innerheading}> Test for Caries</Text>
            <Text style={styles.innertext}>Detection:Positive</Text>
            <Text style={styles.innertext}>Date:</Text>
        </View>
        </View>

        <View style={styles.box}>
        <View style={styles.inner}>
            <Text style={styles.innerheading}> Test for Caries</Text>
            <Text style={styles.innertext}>Detection:Negative</Text>
            <Text style={styles.innertext}>Date:</Text>
        </View>
        </View>

        <View style={styles.box}>
        <View style={styles.inner}>
            <Text style={styles.innerheading}> Test for Caries</Text>
            <Text style={styles.innertext}>Detection:Positive</Text>
            <Text style={styles.innertext}>Date:</Text>
        </View>
        </View>

       
        
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({

    Hbody:{
    flexDirection:"column",
    flexWrap:'wrap',
  flex:1
    },
    box:{
width:"100%",
height:"20%",
padding:5,

    },
    inner:{
      flex:1,
     
     backgroundColor:'#e8e8e8',
    borderColor:'#C17FC7', 
    borderWidth:0.5,
    borderRadius:20,
    shadowColor:'#C17FC7',
    elevation:20,
    },
    header:{
  
      alignItems:'center',
      justifyContent:'center',

    },
    text:{
      fontSize:25,
    },
    innerheading:{
      fontSize:25,
      fontWeight:'900',
      textAlign:'center'
    },
    innertext:{
      fontSize:18,
    },

    
    
    
    
    })

    