import React from "react";
import {
  StyleSheet,
 
} from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
import FeedRoutes from "./FeedRoutes";
import ArticleRoutes from "./ArticleRoutes";

const TopNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      backBehavior="initialRoute"
      swipeVelocityImpact={0.3}
      // tabBarOptions={{
      //   activeTintColor: "#7ed957",
      //   inactiveTintColor: "#f0f0f0",
      // }}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        tabBarItemStyle: { borderBlockColor: "red" },
        tabBarActiveTintColor: "#7ed957",
        tabBarInactiveTintColor: "#f0f0f0",
      }}
    >
      <Tab.Screen name="Feed" component={FeedRoutes} />
      <Tab.Screen
        name="ArticleRoutes"
        component={ArticleRoutes}
        options={{ title: "Article" }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TopNavigation;
