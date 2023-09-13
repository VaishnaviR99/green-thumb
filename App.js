import { StyleSheet, Text, View, StatusBar } from "react-native";
import Route from "./src/Route/Route";

import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { CartProvider } from "./src/context/Context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [auth, setAuth] = useState(true);

  return (
    <CartProvider>
      <View style={styles.container}>
        <StatusBar />
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </View>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
