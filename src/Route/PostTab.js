import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PostTextContent from "../Componnets/TextComponent";

const PostTab = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => <Postt post={item} index={index} />}
      />
      <TouchableOpacity
        style={styles.createPostButton}
        onPress={() => navigation.navigate("CreatePost")}
      >
        <MaterialCommunityIcons name="pen" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const Postt = ({ post, index }) => {
  const [liked, setLiked] = useState(true);
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", marginBottom: 15 }}>
        <Image source={post.profile} style={styles.profile} />
        <Text style={styles.username}>{post.username}</Text>
      </View>

      <Image source={post.image} style={styles.image} />
      {/* <Text style={styles.caption}>{post.caption}</Text> */}
      <PostTextContent
        style={styles.caption}
        caption={post.caption}
        index={index}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setLiked(!liked)}
        >
          <MaterialCommunityIcons name="thumb-up" size={24} color="#7ed957" />
          <Text style={styles.buttonText}>
            {liked ? post.likes : post.likes + 1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="text" size={24} color="#7ed957" />
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
  profile: {
    width: 40,
    height: 38,
    resizeMode: "cover",
    borderRadius: 20,
    marginRight: 15,
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
    flexDirection: "row",
    justifyContent: "center",
    //backgroundColor: "#7ed957",
    borderColor: "#7ed957",
    borderWidth: 2,
    padding: 8,
    justifyContent: "space-evenly",
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "#7ed957",
    fontSize: 16,
    fontWeight: "bold",
  },
  createPostButton: {
    flexDirection: "row",
    position: "absolute",
    right: 50,
    bottom: 30,
    backgroundColor: "orange",
    padding: 8,
    borderRadius: 8,
  },
});

export default PostTab;

const postData = [
  {
    id: 1,
    username: "Nagarjuna",
    profile: {
      uri: "https://breakawaybackpacker.com/wp-content/uploads/2012/06/DSC01472.jpg",
    },
    image: {
      uri: "https://img.hobbyfarms.com/wp-content/uploads/2019/03/22190424/sugarbeets-vegetable-crops-KWS-Group-Flickr.jpg",
    },
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
    username: "Sourabh Lowanshi",
    profile: {
      uri: "https://images.unsplash.com/photo-1609770653328-a4d1dd377970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww&w=1000&q=80",
    },
    image: {
      uri: "https://gumlet.assettype.com/newslaundry%2F2023-03%2F80af77e7-bc04-4f41-9ab6-7ac5fb622644%2FAI_5_.jpg?auto=format%2Ccompress&fit=max&format=webp&w=480&dpr=2.6",
    },
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
    username: "Rajat Gnagwar",
    profile: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvYG0MMJnx3TnQeQqKX7_mEYKLq_tAIF5OBmafE5sI3ez6GvssCEB1TY9ULgx2t7JxRs&usqp=CAU",
    },
    image: {
      uri: "https://d1u4oo4rb13yy8.cloudfront.net/article/67477-kzbcuulqqr-1504449150.jpg",
    },
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
  {
    id: 4,
    username: "Nagarjuna",
    profile: {
      uri: "https://breakawaybackpacker.com/wp-content/uploads/2012/06/DSC01472.jpg",
    },
    image: {
      uri: "https://img.hobbyfarms.com/wp-content/uploads/2019/03/22190424/sugarbeets-vegetable-crops-KWS-Group-Flickr.jpg",
    },
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
    id: 5,
    username: "Sourabh Lowanshi",
    profile: {
      uri: "https://images.unsplash.com/photo-1609770653328-a4d1dd377970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww&w=1000&q=80",
    },
    image: {
      uri: "https://gumlet.assettype.com/newslaundry%2F2023-03%2F80af77e7-bc04-4f41-9ab6-7ac5fb622644%2FAI_5_.jpg?auto=format%2Ccompress&fit=max&format=webp&w=480&dpr=2.6",
    },
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
    id: 6,
    username: "Rajat Gnagwar",
    profile: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvYG0MMJnx3TnQeQqKX7_mEYKLq_tAIF5OBmafE5sI3ez6GvssCEB1TY9ULgx2t7JxRs&usqp=CAU",
    },
    image: {
      uri: "https://d1u4oo4rb13yy8.cloudfront.net/article/67477-kzbcuulqqr-1504449150.jpg",
    },
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
