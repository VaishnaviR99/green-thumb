import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>Price: ₹{product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    //alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
    borderRadius: 8,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
  },
  productPrice: {
    fontSize: 20,
  },
  productDescription: {
    fontSize: 16,
    marginTop: 16,
  },
  addToCartButton: {
    backgroundColor: "orange",
    padding: 16,
    borderRadius: 8,
    marginTop: 32,
  },
  buyNowButton: {
    backgroundColor: "green",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProductDetails;
