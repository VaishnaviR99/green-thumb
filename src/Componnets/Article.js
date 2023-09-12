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

const Articles = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ArticleData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ArticleCard article={item} />}
      />
    </View>
  );
};

const ArticleCard = ({ article }) => {
  return (
    <View style={styles.card} >
      <Image source={article.profile} />
      <Text style={styles.username}>{article.username}</Text>
      <Image source={article.image} style={styles.image} />
      <Text style={styles.caption}>{article.caption}</Text>
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
    resizeMode: "contain",
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

export default Articles;

const ArticleData = [
  {
    id: 1,
    image: {
      uri: "https://www.asiafarming.com/wp-content/uploads/2016/07/Health-Benefits-Of-Apple..jpg",
    },
    caption: "Apple",
    blog: [
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
    image: {
      uri: "https://img.theculturetrip.com/1200x675/wp-content/uploads/2018/03/origins-of-the-word-orange.jpg",
    },
    caption: "Orange",
    blog: [
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
    image: {
      uri: "https://img.etimg.com/thumb/width-640,height-480,imgsize-56196,resizemode-75,msid-95423731/magazines/panache/5-reasons-why-tomatoes-should-be-your-favourite-fruit-this-year/tomatoes-canva.jpg",
    },
    caption: "Tomato",
    blog: [
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
    image: {
      uri: "https://s3g2u3k4.rocketcdn.me/wp-content/uploads/sites/4/2022/11/sunflower.jpg",
    },
    caption: "Sunflower",
    blog: [
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
    id: 5,
    image: {
      uri: "https://m.media-amazon.com/images/I/51lTK6iktYL._AC_UF1000,1000_QL80_.jpg",
    },
    caption: "Potato",
    blog: [
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
