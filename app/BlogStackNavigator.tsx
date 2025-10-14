import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostListScreen from "./screens/PostListScreen";
import PostDetailScreen from "./screens/PostDetailScreen";

// This is the type definition for the parameters of each screen in this stack
export type BlogStackParamList = {
  PostList: undefined; // No params expected for the list screen
  PostDetail: { postId: string; title: string; content: string };
};

const Stack = createNativeStackNavigator<BlogStackParamList>();

export default function BlogStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="PostList">
      <Stack.Screen
        name="PostList"
        component={PostListScreen}
        options={{ title: "Blog Posts" }}
      />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} options={{ title: "Post Details" }} />
    </Stack.Navigator>
  );
}