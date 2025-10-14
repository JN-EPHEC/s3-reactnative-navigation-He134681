import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "./ProductListScreen";
import ProductDetailScreen from "./ProductDetailScreen";

export type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { productId: string; name: string; description: string };
};

const Stack = createNativeStackNavigator<ShopStackParamList>();

export default function ShopStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: "Products" }} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
}