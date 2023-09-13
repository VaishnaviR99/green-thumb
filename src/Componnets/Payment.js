import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Payment = ({ navigation }) => {
  const handleRedirect = () => {
    // Navigate to the home screen after payment confirmation
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Payment Successful!</Text>
      <TouchableOpacity onPress={handleRedirect} style={styles.button}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Payment;
