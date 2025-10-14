import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { ShopStackParamList } from "./ShopStackNavigator";

type ProductDetailRouteProp = RouteProp<ShopStackParamList, "ProductDetail">;

export default function ProductDetailScreen() {
  const route = useRoute<ProductDetailRouteProp>();
  const { name, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
  },
});