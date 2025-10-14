import "react-native-reanimated";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}