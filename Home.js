import React, {Component} from 'react';
import {
  View,
  Text, 
  StyleSheet,
  SafeAreaView, 
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image
} from 'react-native';

export default class Home extends Component{
  render(){
    return(
      <View style= {styles.container}>
      <ImageBackground source={{
        uri:"https://m.media-amazon.com/images/I/610Zi6ZSXSL._AC_SS450_.jpg"
      }}
      style={styles.backgroundImage}>
      <SafeAreaView style= {styles.droidSafeArea}/>
      <View style={styles.titleBar}>
      <Text style={styles.titleText}>Guess the object</Text>
      </View>
      <Text style={styles.text}>I want you to guess three objects by reading their descriptions</Text>
      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Object1")
                    }>
                        <Text style={styles.routeText}>Start</Text>
                    </TouchableOpacity>
                    </ImageBackground>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1
  },
  droidSafeArea:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
    marginTop: -20
  },
  routeCard:{
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    marginBottom: 250,
    borderRadius: 30,
    backgroundColor: 'red'
  },

  titleBar: {
    flex: 0.15,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 50
  },
  titleText:{
    fontSize: 40,
    fontWeight: "bold",
    color:"orange"
  },
  text:{
    fontSize: 20,
    color:"#CC7722",
    alignSelf:"center",
  },
  routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'red',
        justifyContent: "center",
        alignItems: "center"
    }
})