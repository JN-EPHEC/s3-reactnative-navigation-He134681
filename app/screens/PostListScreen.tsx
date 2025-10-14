import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../_layout";
import { useNavigation } from "@react-navigation/native";

const posts = [
  {
    postId: "1",
    title: "React Native is Awesome",
    content: "React Native lets you build mobile apps using JavaScript and React.",
  },
  {
    postId: "2",
    title: "State Management Tips",
    content: "Use Context, Redux, or Zustand for scalable state management.",
  },
  {
    postId: "3",
    title: "UI Design Principles",
    content: "Consistency, simplicity, and feedback are key to great UI design.",
  },
];

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "PostList">;

export default function PostListScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blog Posts</Text>
      {posts.map((post) => (
        <View key={post.postId} style={styles.postItem}>
          <Button
            title={post.title}
            onPress={() =>
              navigation.navigate("PostDetail", {
                postId: post.postId,
                title: post.title,
                content: post.content,
              })
            }
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  postItem: { marginBottom: 12 },
});
