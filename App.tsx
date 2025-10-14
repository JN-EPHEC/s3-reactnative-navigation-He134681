import "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}