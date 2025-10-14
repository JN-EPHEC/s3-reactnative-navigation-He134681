import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import ShopStackNavigator from "./screens/ShopStackNavigator";
import CartScreen from "./screens/CartScreen";

const Tab = createBottomTabNavigator();

export default function ECommerceNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopStackNavigator}
        options={{ tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>🛍️</Text> }}
      />
      <Tab.Screen
        name="My Cart"
        component={CartScreen}
        options={{ headerShown: true, tabBarIcon: ({ color, size }) => <Text style={{ color, fontSize: size }}>🛒</Text> }}
      />
    </Tab.Navigator>
  );
}