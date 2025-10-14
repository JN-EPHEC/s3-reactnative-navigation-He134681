import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.info}>John Doe</Text>
      <Text style={styles.label}>Username:</Text>
      <Text style={styles.info}>@johndoe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
  },
  info: {
    fontSize: 16,
  },
});