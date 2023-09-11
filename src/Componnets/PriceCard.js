import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

import React from "react";

const PriceCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={require("../assets/w3.jpg")} style={styles.productImage} />
      <Text style={styles.productName}>{product.product}</Text>
      <View style={styles.priceCard}>
        <Text style={styles.currentPrice}>₹ {product.current_price}/Q</Text>
        <Text style={styles.cityName}>{product.city}</Text>
        <Text style={styles.priceChange}>{product.decrease_price}/Q</Text>
        <Text style={styles.priceChange}>{product.increase_price}/Q</Text>
      </View>
    </View>
  );
};

export default PriceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    width: 250,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  priceCard: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 8,
    padding: 8,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cityName: {
    fontSize: 14,
    marginTop: 8,
  },
  priceChange: {
    fontSize: 14,
    marginTop: 8,
  },
});
