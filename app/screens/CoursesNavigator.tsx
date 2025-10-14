import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import CourseListScreen from "./CourseListScreen";
import WishlistScreen from "./WishlistScreen";

const Tab = createBottomTabNavigator();

export default function CoursesNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // The header will be handled by the parent Drawer/Stack
      }}
    >
      <Tab.Screen
        name="All Courses"
        component={CourseListScreen}
        options={{ tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>📚</Text> }}
      />
      <Tab.Screen
        name="My Wishlist"
        component={WishlistScreen}
        options={{ tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>⭐</Text> }}
      />
    </Tab.Navigator>
  );
}