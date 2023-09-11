import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const PriceCard = ({ product }) => {
  return (
    <View style={styles.card}>
      
      <View style={styles.priceCard}>
        <Text style={styles.currentPrice}>₹ {product.current_price}/Q</Text>
        <Text style={styles.cityName}>{product.city}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.priceChange}>{product.decrease_price}/Q</Text>
            <MaterialCommunityIcons name="arrow-down" color="red" size={16} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.priceChange}>{product.increase_price}/Q</Text>
            <MaterialCommunityIcons name="arrow-up" color="green" size={16} />
          </View>
        </View>
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
    backgroundColor: "rgba(0, 255, 0, 0.03) ",
    borderRadius: 8,

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
    borderColor: "rgba(0, 255, 0, 0.3)",
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
    color: "#018900",
  },
  priceChange: {
    fontSize: 14,
    marginTop: 8,
    color:"gray",
  },
});
