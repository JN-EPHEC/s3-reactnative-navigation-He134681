import "react-native-reanimated";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

// Import all the main navigators for each exercise
import BlogStackNavigator from "./BlogStackNavigator";
import SocialAppNavigator from "./SocialAppNavigator";
import ECommerceNavigator from "./ECommerceNavigator";
import CoursesNavigator from "./CoursesNavigator"; // This is the Drawer from the assignment

const RootTab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <RootTab.Navigator
      screenOptions={{
        headerShown: false, // Each tab will manage its own header
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <RootTab.Screen
        name="Ex1: Blog"
        component={BlogStackNavigator}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>📝</Text>,
        }}
      />
      <RootTab.Screen
        name="Ex2: Social"
        component={SocialAppNavigator}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>👥</Text>,
        }}
      />
      <RootTab.Screen
        name="Ex3: E-commerce"
        component={ECommerceNavigator}
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>🛒</Text>,
        }}
      />
      <RootTab.Screen
        name="Assign: Courses"
        component={CoursesNavigator} // This component is the DrawerNavigator
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 20 }}>🎓</Text>,
        }}
      />
    </RootTab.Navigator>
  );
}
