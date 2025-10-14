import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ShopStackParamList } from "./ShopStackNavigator";

const FAKE_PRODUCTS = [
  { id: "p1", name: "Laptop", description: "A powerful laptop for all your needs." },
  { id: "p2", name: "Mouse", description: "A high-precision wireless mouse." },
  { id: "p3", name: "Keyboard", description: "A mechanical keyboard with RGB lighting." },
];

type ProductListNavigationProp = NativeStackNavigationProp<ShopStackParamList, "ProductList">;

export default function ProductListScreen() {
  const navigation = useNavigation<ProductListNavigationProp>();

  const renderProduct = ({ item }: { item: (typeof FAKE_PRODUCTS)[0] }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate("ProductDetail", { productId: item.id, name: item.name, description: item.description })}
    >
      <Text style={styles.productName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={FAKE_PRODUCTS} keyExtractor={(item) => item.id} renderItem={renderProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  productName: {
    fontSize: 18,
  },
});