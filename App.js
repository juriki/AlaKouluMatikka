import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{ title: "AlaKouluMatikka" }} />
        <Stack.Screen name="Game" component={GameScreen} options={{ title: "Harjoitukset" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
