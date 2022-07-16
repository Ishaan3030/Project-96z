import React,{Component} from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Home from "../components/Home"
import A1 from "../components/A1"
import A2 from "../components/A2"
import A3 from "../components/A3"
import Object1 from "../components/Object1"
import Object2 from "../components/Object2"
import Object3 from "../components/Object3"

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component{
  render(){
    return(
      <Drawer.Navigator
     drawerContentOptions={{
       activeTintColor:"#008080",
       inactiveTintColor:"white",
       itemStyle: {marginVertical:5},
     }} 
     >
     <Drawer.Screen
     name="Home"
     component={Home}
     option={{unmountOnBlur: true}}
     />
     <Drawer.Screen
     name="A1"
     component={A1}
     option={{unmountOnBlur: true}}
     />
     <Drawer.Screen
     name="A2"
     component={A2}
     option={{unmountOnBlur: true}}
     />
     <Drawer.Screen
     name="A3"
     component={A3}
     option={{unmountOnBlur: true}}
     />

     </Drawer.Navigator>
    )
  }
}