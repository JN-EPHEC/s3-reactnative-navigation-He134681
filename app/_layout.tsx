import "react-native-reanimated";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostListScreen from "./screens/PostListScreen";
import PostDetailScreen from "./screens/PostDetailScreen";

export type RootStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
};

export default function RootLayout() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="PostList">
      <Stack.Screen
        name="PostList"
        component={PostListScreen}
        options={{ title: "Blog Posts" }} "Blog Posts" }}
      />
      <Stack.Screen
        name="PostDetail"me="PostDetail"
        component={PostDetailScreen}stDetailScreen}
        options={{ title: "Post Details" }}Post Details" }}
      />
    </Stack.Navigator>
  );
}
