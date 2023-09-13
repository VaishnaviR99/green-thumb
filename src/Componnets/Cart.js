import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useCart } from "../context/Context";

const Cart = ({ navigation }) => {
  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } =
    useCart();

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
          <MaterialCommunityIcons name="minus" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
          <MaterialCommunityIcons name="plus" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <MaterialCommunityIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2);
  };

  const renderCartItems = () => {
    if (!cartItems || cartItems.length === 0) {
      return (
        <View style={styles.emptyCart}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "gray",
              textAlign: "center",
              marginBottom: 60,
            }}
          >
            Your cart is empty.
          </Text>
          <MaterialCommunityIcons
            name="cart-arrow-down"
            color="#7ed957"
            size={80}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("homee")}
            style={styles.button}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCartItem}
        />
        <Text style={styles.totalAmount}>Total: ₹{calculateTotal()}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Payment", { totalAmount: calculateTotal() });
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Payment</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return <View style={styles.container}>{renderCartItems()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 80,
    borderBottomLeftRadius: 80,
    padding: 30,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#7ed957",
    padding: 18,
    width: 300,
    marginTop: 33,
    borderTopEndRadius: 50,
    borderBottomLeftRadius: 50,
    alignSelf: "center",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 8,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    marginRight: 8,
  },
  productInfo: {
    flex: 1,
    marginRight: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 18,
    color: "gray",
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 8,
    color: "#FFFFFF",
    backgroundColor: "#7ed957",
    paddingHorizontal: 8,
    borderRadius:5,
  },
});

export default Cart;
