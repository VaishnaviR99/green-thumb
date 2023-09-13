import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useCart } from "../context/Context";

const Payment = ({ navigation, route }) => {
  const { totalAmount } = route.params;
  const [paymentComplete, setPaymentComplete] = useState(false);

  const { clearCart } = useCart();
  useEffect(() => {
    setTimeout(() => {
      setPaymentComplete(true);
      clearCart();
    }, 900);
    setTimeout(() => {
      navigation.navigate("homee");
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {paymentComplete ? (
        <Animatable.View animation="rubberBand" style={styles.successContainer}>
          <MaterialCommunityIcons
            name="check-circle"
            size={80}
            color="#7ed957"
          />
          <Text style={styles.successText}>Payment Successful</Text>
        </Animatable.View>
      ) : (
        <Animatable.View animation="fadeIn" style={styles.pendingContainer}>
          <Text style={styles.amount}>₹{totalAmount}</Text>
        </Animatable.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  pendingContainer: {
    alignItems: "center",
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
  },
  successContainer: {
    alignItems: "center",
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7ed957",
    marginTop: 16,
  },
});

export default Payment;
