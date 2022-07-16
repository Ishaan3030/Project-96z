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

export default class Object2 extends Component{
   constructor() {
    super();
    this.state = {
      text: '',
      answer: "Pumpkin"
    };
  }
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
  <TextInput
  style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}/>
</View>
<View>
    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("A2")
                    }>
                        <Text style={styles.routeText}>Answer</Text>
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
      backgroundColor:"white",
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