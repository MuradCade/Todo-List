import React from 'react'
import {ImageBackground,StyleSheet,View,Image,Text} from "react-native";

export default function WelcomeScreen() {
  return (
    // source={require('../assets/bg2.jpg')}
   <ImageBackground style={styles.image} source={require('../assets/bg2.jpg')}>
      <View style={styles.logoContainer}>
      <Image  style={styles.logo} source={require('../assets/eelo.png')}></Image>
    <Text style={styles.text}>Welcome To Eelo University</Text>
    <Text style={styles.subtext}>Home Of Technology & Annovation</Text>
      </View>
  
     <View style={styles.contnue}>
        <Text style={styles.btnText} onPress={click}>Continue</Text>
     </View>
   </ImageBackground>
  )
}

const click = () =>{
    // this.props.navigation.navigate("Screen.js");
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent:"flex-end",
        alignItems:"center",
        backgroundColor:'white',
      
    },
    contnue:{
        width:'100%',
        height:70,
        backgroundColor:"#fc5c65",
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
    },
  
    // register:{
    //     width:'60%',
    //     height:70,
    //     backgroundColor:"#4ecdc4",
    // },
    logo:{
        width:100,
        height:100,
        // position:'absolute',
        // top:70,
    },
    logoContainer: {
        position:'absolute',
        top:70,
        alignItems:'center'
    },
    text: {
        fontSize:20,
        fontWeight:'200',
        margin:20,
        color:'white',
        // color
    },
    subtext:{
    fontSize:14,
    margin:-10,
    color:'#D3D3D3'
    },
    btnText:{
        color:'white',
        fontSize:20,
        fontWeight:'800'         
    }
  });
  