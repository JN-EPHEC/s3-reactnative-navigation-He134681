import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../_layout";

type PostDetailRouteProp = RouteProp<RootStackParamList, "PostDetail">;

export default function PostDetailScreen() {
  const route = useRoute<PostDetailRouteProp>();
  const { title, content } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  content: { fontSize: 16 },
});
