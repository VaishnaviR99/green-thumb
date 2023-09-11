import React from "react";

import PriceCard from "../Componnets/PriceCard";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

const ProductList = ({ product }) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.productHeader}>
        <Image
          source={require("../assets/Tlogo.png")}
          style={styles.productImage}
        />
        <Text style={styles.productName}>{product.product}</Text>
      </View>
      <FlatList
        data={product.prices}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <PriceCard product={item} />}
        horizontal
      />
    </View>
  );
};

const Prices = () => {
  return (
    <ScrollView style={styles.container}>
      {data.data.map((product, index) => (
        <ProductList key={index} product={product} />
      ))}
    </ScrollView>
  );
};

export default Prices;

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

const data = {
  data: [
    {
      product: "Apple",
      prices: [
        {
          city: "Ganuar",
          current_price: 8500,
          increase_price: 9000,
          decrease_price: 8000,
        },
        {
          city: "Kangra",
          current_price: 6000,
          increase_price: 9000,
          decrease_price: 5000,
        },
        {
          city: "Kulgam",
          current_price: 2647,
          increase_price: 2764,
          decrease_price: 2352,
        },
        {
          city: "Puducherry",
          current_price: 8000,
          increase_price: 9000,
          decrease_price: 7000,
        },
      ],
    },
    {
      product: "Mango",
      prices: [
        {
          city: "Ganuar",
          current_price: 7500,
          increase_price: 8000,
          decrease_price: 7000,
        },
        {
          city: "Kangra",
          current_price: 6500,
          increase_price: 7500,
          decrease_price: 6000,
        },
        {
          city: "Kulgam",
          current_price: 2890,
          increase_price: 3200,
          decrease_price: 2700,
        },
        {
          city: "Puducherry",
          current_price: 7200,
          increase_price: 8000,
          decrease_price: 7000,
        },
      ],
    },
    {
      product: "Orange",
      prices: [
        {
          city: "Ganuar",
          current_price: 9200,
          increase_price: 9500,
          decrease_price: 9000,
        },
        {
          city: "Kangra",
          current_price: 5500,
          increase_price: 6000,
          decrease_price: 5000,
        },
        {
          city: "Kulgam",
          current_price: 2352,
          increase_price: 2764,
          decrease_price: 2200,
        },
        {
          city: "Puducherry",
          current_price: 9000,
          increase_price: 9500,
          decrease_price: 8800,
        },
      ],
    },
    {
      product: "Rice",
      prices: [
        {
          city: "Ganuar",
          current_price: 2500,
          increase_price: 2800,
          decrease_price: 2400,
        },
        {
          city: "Kangra",
          current_price: 2200,
          increase_price: 2400,
          decrease_price: 2100,
        },
        {
          city: "Kulgam",
          current_price: 2800,
          increase_price: 3000,
          decrease_price: 2600,
        },
        {
          city: "Puducherry",
          current_price: 2450,
          increase_price: 2700,
          decrease_price: 2400,
        },
      ],
    },
    {
      product: "Wheat",
      prices: [
        {
          city: "Ganuar",
          current_price: 2200,
          increase_price: 2400,
          decrease_price: 2100,
        },
        {
          city: "Kangra",
          current_price: 2000,
          increase_price: 2200,
          decrease_price: 1900,
        },
        {
          city: "Kulgam",
          current_price: 2600,
          increase_price: 2800,
          decrease_price: 2500,
        },
        {
          city: "Puducherry",
          current_price: 2150,
          increase_price: 2300,
          decrease_price: 2100,
        },
      ],
    },
    {
      product: "Corn",
      prices: [
        {
          city: "Ganuar",
          current_price: 3200,
          increase_price: 3500,
          decrease_price: 3100,
        },
        {
          city: "Kangra",
          current_price: 2800,
          increase_price: 3000,
          decrease_price: 2700,
        },
        {
          city: "Kulgam",
          current_price: 3300,
          increase_price: 3600,
          decrease_price: 3200,
        },
        {
          city: "Puducherry",
          current_price: 3100,
          increase_price: 3300,
          decrease_price: 3000,
        },
      ],
    },
  ],
};
