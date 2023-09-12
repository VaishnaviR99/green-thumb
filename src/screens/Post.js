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
const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();
const Post = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="posts"
          component={PostTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    </View>
  );
};
const Article = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Articles"
          component={Articles}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ViewArticle" component={Art} />
      </Stack.Navigator>
    </View>
  );
};

const Art = () => {
  return (
    <View>
      <Text>articles</Text>
    </View>
  );
};

const TopNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Post} />
      <Tab.Screen name="Articles" component={Article} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TopNavigation;

// const postData = [
//   {
//     id: 1,
//     username: "Nagarjuna",
//     profile: {
//       uri: "https://i.pinimg.com/1200x/06/29/8d/06298d548430d752925da79fdc2f8f32.jpg",
//     },
//     image: {
//       uri: "https://img.hobbyfarms.com/wp-content/uploads/2019/03/22190424/sugarbeets-vegetable-crops-KWS-Group-Flickr.jpg",
//     },
//     caption: "Beautiful sunset at the beach 🌅",
//     likes: 1024,
//     comments: [
//       {
//         id: 101,
//         username: "user2",
//         text: "Wow, amazing shot!",
//       },
//       {
//         id: 102,
//         username: "user3",
//         text: "I wish I was there!",
//       },
//     ],
//   },
//   {
//     id: 2,
//     username: "Sourabh Lowanshi",
//     profile: {
//       uri: "https://images.unsplash.com/photo-1609770653328-a4d1dd377970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww&w=1000&q=80",
//     },
//     image: {
//       uri: "https://gumlet.assettype.com/newslaundry%2F2023-03%2F80af77e7-bc04-4f41-9ab6-7ac5fb622644%2FAI_5_.jpg?auto=format%2Ccompress&fit=max&format=webp&w=480&dpr=2.6",
//     },
//     caption: "Exploring the mountains today ⛰️",
//     likes: 768,
//     comments: [
//       {
//         id: 201,
//         username: "user1",
//         text: "That view is breathtaking!",
//       },
//       {
//         id: 202,
//         username: "user3",
//         text: "I love hiking!",
//       },
//     ],
//   },
//   {
//     id: 3,
//     username: "Rajat Gnagwar",
//     profile: {
//       uri: "https://i.pinimg.com/736x/5d/a8/76/5da8768c07eb3db7dbf5f394ab4444a6--indian-man-asian-men.jpg",
//     },
//     image: {
//       uri: "https://d1u4oo4rb13yy8.cloudfront.net/article/67477-kzbcuulqqr-1504449150.jpg",
//     },
//     caption: "Trying out a new recipe 🍝",
//     likes: 563,
//     comments: [
//       {
//         id: 301,
//         username: "user1",
//         text: "Looks delicious!",
//       },
//       {
//         id: 302,
//         username: "user2",
//         text: "Recipe please!",
//       },
//     ],
//   },
// ];
