import "react-native-reanimated";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
      <View style={styles.container}>
        <Text style={styles.text}>App Settings</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20 },
});