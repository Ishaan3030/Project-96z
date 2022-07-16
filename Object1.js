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
import firebase from "firebase";

export default class Object1 extends Component{
   constructor() {
    super();
    this.state = {
      text: '',
      answer:'Pumpkin',
      score: []
    };
  }
  showTeamRanks = () => {
    var answers = [];
    var answerRef = firebase.ref('answers/');
    answerRef.on('value', (data) => {
      var answerList = data.val();
      for (var answer in answerList) {
        if (answerList[answer]['isButtonPressed'] === true) {
          answerList[answer]['answerName'] = answer;
          answers.push(answerList[answer]);
        }
      }
      answers.sort(function (answer1, answer2) {
        return answer1.timestamp - answer2.timestamp;
      });
      this.setState({ answersRank: answers });
      answers = [];
    });
  };

  render(){
    return(
      <View style={styles.container}>
      <View>
    <Text style={styles.text}>What is this object?</Text></View>
<View>
    <Text style={styles.descriptionText}>* This an object that is something orange </Text>
      <Text style={styles.descriptionText}>* It has triangle eyes, and square mouth </Text>
      <Text style={styles.descriptionText}>* It is something that we use for Halloween </Text>
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
                        this.props.navigation.navigate("A1")
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