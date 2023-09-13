import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostTab from "../Route/PostTab";
import CreatePost from "../Componnets/CreatePost";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Articles from "../Componnets/Article";
import ViewArticle from "../Componnets/ViewArticle";
const Tab = createMaterialTopTabNavigator();
import FeedRoutes from "./FeedRoutes";
import ArticleRoutes from "./ArticleRoutes";



const TopNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      backBehavior="initialRoute"
      swipeVelocityImpact={0.3}
      tabBarOptions={{
        activeTintColor: "#7ed957",
        inactiveTintColor: "#f0f0f0",
      }}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        tabBarItemStyle: { borderBlockColor: "red" },
      }}
    >
      <Tab.Screen name="Feed" component={FeedRoutes} />
      <Tab.Screen name="ArticleRoutes" component={ArticleRoutes} options={{title:"Article"}}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TopNavigation;
