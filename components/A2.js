import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Alert,
    FlatList,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    TextInput
} from "react-native";

export default class A2 extends Component{
  render(){
    return(
      <View style={styles.container}>
      <View>
    <Text style={styles.text}>What is this object?</Text></View>
<View>
    <Text style={styles.descriptionText}>* This an object that has wheels </Text>
      <Text style={styles.descriptionText}>* It has 2 seats at the front and 3 seats at the back </Text>
      <Text style={styles.descriptionText}>* One seat at the front is the driver seat </Text>
</View>
<View>
    <Text style={styles.text}>A car </Text>
</View>
<View>
    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Object3")
                    }>
                        <Text style={styles.routeText}>Correct</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>or</Text>
    <TouchableOpacity style={styles.routeCard2} onPress={() =>
                        this.props.navigation.navigate("Object3")
                    }>
                        <Text style={styles.routeText}>Wrong</Text>
                    </TouchableOpacity></View></View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
flex: 1,
backgroundColor:"green"
  },
    image: {
        flex: 1,
        alignSelf:"center",
        height: 40,
        width: 180,     
    },
    descriptionText:{
      color:"black",
      fontSize: 20,
    },
    text: {
      color: "black",
      fontSize: 30,
      alignSelf:"center"
    },
    routeText: {
      color: "black",
      fontSize: 30,
      alignSelf:"center",
      borderRadius:"black",
    },
    routeCard: {
      backgroundColor:"lime",
      width: 180,
      alignSelf: "center",
      marginTop: 20,
    },
    routeCard2: {
      backgroundColor:"red",
      width: 180,
      alignSelf: "center",
      marginTop: 20,
    },
    inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
});