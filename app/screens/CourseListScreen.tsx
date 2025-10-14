import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CourseListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Course List Screen</Text>
      <Text>Here you will see a list of courses.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});