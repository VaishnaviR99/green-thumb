import React from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "../Route/BottomNavigation";
import Welcome from "../Auth/Welcome";
import Login from "../screens/Login";
import Signup from "../Componnets/Signup";
import Home from "../screens/Home";
import OtpVerification from "../Auth/OtpVerification";

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <>
      <StatusBar />
      <Stack.Navigator initialRouteName="HomeNavigation">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Otp"
          component={OtpVerification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeNavigation"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}
