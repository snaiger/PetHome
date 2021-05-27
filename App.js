import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground,  StyleSheet,  View,Button, Alert, TouchableOpacity, Touchable } from 'react-native';
import { Text } from 'react-native-elements';

export default function App() {
  return (
    <ImageBackground 
    style={{flex :1 }}
    source={require('./assets/index.jpg')}>


    
    <View style={styles.container}>
      
      
     

    
    <TouchableOpacity
        
        onPress={()=> Alert.alert("Bienvenido")}
        style={styles.Button}
      >
        <Text style={styles.ButtonText}>Ingresar</Text>
      </TouchableOpacity>

    </View>
    </ImageBackground>
  );
}




























const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : "column",
    marginTop : 20,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
    
  },
  Button :{
       backgroundColor: "black",
       padding : 10,
       margin: 100,
       top:500,
       borderRadius: 50,
       height: 50

  },
  ButtonText :{
    color: "#fff",
    fontSize : 20,
    textAlign: 'center',
    fontFamily: 'monospace'
    

  },
 
});
