import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useCart } from "../context/Context";

const ProductDetails = ({ route, navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
 const { addToCart } = useCart(); 
  const { product } = route.params;

  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };
  const navigateToCart = () => {
     addToCart(product);
    navigation.navigate("Cart", { product });
  };
  

  const handleAddToCart = () => {
    addToCart(product);
     setIsAddingToCart(true);
  };

 
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity>
            
          </TouchableOpacity>
        </View>
        <Image source={product.image} style={styles.productImage} />
       
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>Price: ₹{product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>

        <TouchableOpacity
          style={[
            styles.addToCartButton,
            isAddingToCart ? styles.disabledButton : null,
          ]}
          onPress={handleAddToCart}
          disabled={isAddingToCart}
        >
          <Text style={styles.buttonText}>
            {isAddingToCart ? "Added to Cart..." : "Add to Cart"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buyNowButton}
          onPress={() => {
            addToCart(product);
            navigateToCart();
          }}
        >
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
  disabledButton: {
    backgroundColor: "gray",
  },
});

export default ProductDetails;
