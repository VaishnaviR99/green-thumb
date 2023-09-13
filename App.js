import { StyleSheet, Text, View, StatusBar } from "react-native";
import Route from "./src/Route/Route";
import BottomTab from "./src/Route/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import ProductC from "./src/Componnets/ProductC";
import ProductDetails from "./src/Componnets/PrductDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "./src/Componnets/Category";

import CategoryProducts from "./src/Componnets/ProductC";
import { CartProvider } from "./src/context/Context";
const Stack = createNativeStackNavigator();
export default function App() {
  const [auth, setAuth] = useState(true);

  return (
    <CartProvider>
      <View style={styles.container}>
        <StatusBar />
        <NavigationContainer>
          {/* {auth ? <BottomTab /> : <Route />} */}
          <Route/>
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
