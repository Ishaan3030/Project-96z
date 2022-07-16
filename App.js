import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./components/Home";
import Object1 from "./components/Object1";
import A1 from "./components/A1";
import Object2 from "./components/Object2";
import A2 from "./components/A2";
import Object3 from "./components/Object3";
import A3 from "./components/A3";
import Result from "./components/Result";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Object1" component={Object1} />
        <Stack.Screen name="A1" component={A1} />
        <Stack.Screen name="Object2" component={Object2} />
        <Stack.Screen name="A2" component={A2} />
        <Stack.Screen name="Object3" component={Object3} />
        <Stack.Screen name="A3" component={A3} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;