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

const PostTab = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Postt post={item} />}
      />
      <TouchableOpacity
        style={styles.createPostButton}
        onPress={() => navigation.navigate("CreatePost")}
        //onPress={() => console.log("pressed")}
      >
        <MaterialCommunityIcons
          name="plus"
          size={24}
          color="white"
          style={styles.createPostButton}
        />
      </TouchableOpacity>
    </View>
  );
};

const Postt = ({ post }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.username}>{post.username}</Text>
      <Image source={post.image} style={styles.image} />
      <Text style={styles.caption}>{post.caption}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  caption: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#7ed957",
    padding: 8,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  createPostButton: {
    position: "absolute",
    right: 30,
    bottom: 30,
    backgroundColor: "#7ed957",
    padding: 8,
    borderRadius: 8,
  },
});

export default PostTab;

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
