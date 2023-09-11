import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <View>
          <Image source={user.profile} style={styles.profileImage} />
        </View>
        <View>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <FlatList
        data={user.posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={item.image} style={styles.postImage} />
            <Text style={styles.postCaption}>{item.caption}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileInfo: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#EAEAEA",
    marginVertical: 16,
  },
  postContainer: {
    marginBottom: 16,
  },
  postImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  postCaption: {
    fontSize: 16,
  },
});

export default Profile;

const user = {
  username: "user123",
  email: "user123@example.com",
  profile: require("../assets/Tlogo.png"),
  posts: [
    {
      id: 1,
      caption: "My first post",
      image: require("../assets/second.png"),
      likes: 10,
      comments: [
        {
          id: 101,
          username: "user456",
          text: "Great post!",
        },
      ],
    },
    {
      id: 2,
      caption: "Another post",
      image: require("../assets/second.png"),
      likes: 15,
      comments: [
        {
          id: 201,
          username: "user789",
          text: "Awesome!",
        },
      ],
    },
    {
      id: 3,
      caption: "My first post",
      image: require("../assets/second.png"),
      likes: 10,
      comments: [
        {
          id: 101,
          username: "user456",
          text: "Great post!",
        },
      ],
    },
    {
      id: 4,
      caption: "My first post",
      image: require("../assets/second.png"),
      likes: 10,
      comments: [
        {
          id: 101,
          username: "user456",
          text: "Great post!",
        },
      ],
    },
    {
      id: 5,
      caption: "My first post",
      image: require("../assets/second.png"),
      likes: 10,
      comments: [
        {
          id: 101,
          username: "user456",
          text: "Great post!",
        },
      ],
    },
  ],
};
