import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostTab from "../Componnets/PostTab";
import CreatePost from "../Componnets/CreatePost";

const Stack = createNativeStackNavigator();
const Post = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="posts" component={PostTab} />
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Post;

const postData = [
  {
    id: 1,
    username: "user1",
    image: require("../assets/Tlogo.png"),
    caption: "Beautiful sunset at the beach 🌅",
    likes: 1024,
    comments: [
      {
        id: 101,
        username: "user2",
        text: "Wow, amazing shot!",
      },
      {
        id: 102,
        username: "user3",
        text: "I wish I was there!",
      },
    ],
  },
  {
    id: 2,
    username: "user2",
    image: require("../assets/Tlogo.png"),
    caption: "Exploring the mountains today ⛰️",
    likes: 768,
    comments: [
      {
        id: 201,
        username: "user1",
        text: "That view is breathtaking!",
      },
      {
        id: 202,
        username: "user3",
        text: "I love hiking!",
      },
    ],
  },
  {
    id: 3,
    username: "user3",
    image: require("../assets/Tlogo.png"),
    caption: "Trying out a new recipe 🍝",
    likes: 563,
    comments: [
      {
        id: 301,
        username: "user1",
        text: "Looks delicious!",
      },
      {
        id: 302,
        username: "user2",
        text: "Recipe please!",
      },
    ],
  },
];
