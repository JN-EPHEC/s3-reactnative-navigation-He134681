import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BlogStackParamList } from "../BlogStackNavigator";

const FAKE_POSTS = [
  {
    id: "1",
    title: "React Native is Awesome",
    content: "Discover why React Native is a great choice for building cross-platform mobile applications.",
  },
  {
    id: "2",
    title: "State Management Tips",
    content: "A deep dive into managing state effectively in your React Native apps, from useState to Redux.",
  },
  {
    id: "3",
    title: "UI Design Principles",
    content: "Learn the core principles of UI design to make your apps not only functional but also beautiful.",
  },
];

// Define the type for the navigation prop
type PostListScreenNavigationProp = NativeStackNavigationProp<BlogStackParamList, "PostList">;

export default function PostListScreen() {
  const navigation = useNavigation<PostListScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <FlatList
        data={FAKE_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.postItem}
            onPress={() =>
              navigation.navigate("PostDetail", {
                postId: item.id,
                title: item.title,
                content: item.content,
              })
            }
          >
            <Text style={styles.postTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  postItem: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  postTitle: { fontSize: 18 },
});