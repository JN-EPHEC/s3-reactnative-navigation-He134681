import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { BlogStackParamList } from "../BlogStackNavigator";

type PostDetailScreenRouteProp = RouteProp<BlogStackParamList, "PostDetail">;

export default function PostDetailScreen() {
  const route = useRoute<PostDetailScreenRouteProp>();
  const { title, content } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
});