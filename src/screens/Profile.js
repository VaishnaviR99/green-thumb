import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Avatarcomp from "../Componnets/Avatar";
import PostTextContent from "../Componnets/TextComponent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = ({ route }) => {
  const [posts, setPosts] = useState(user.posts);
  const [userPost, setUserPost] = useState({});
  const [liked, setLiked] = useState(true);

  //const { userPost } = route.params;
  useEffect(() => {
    if (route.params && route.params.userPost) {
      setUserPost(route.params.userPost);
      setPosts([...posts, route.params.userPost]);
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <View>
          {/* <Image source={user.profile} style={styles.profileImage} /> */}
          <Avatarcomp size={90} color={ "white"} />
        </View>
        <View>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <FlatList
        extraData={userPost}
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        inverted
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View>
              <Image source={item.image} style={styles.postImage} />
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>setLiked(!liked)} >
                 
                    <MaterialCommunityIcons
                      name="thumb-up"
                      size={22}
                      color="#7ed957"
                    />
               
                  <Text style={styles.buttonText}>{liked? item.likes:((item.likes)+1)}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <MaterialCommunityIcons
                    name="text"
                    size={22}
                    color="#7ed957"
                  />
                  <Text style={styles.buttonText}>Reply</Text>
                </TouchableOpacity>
              </View>
            </View>

            <PostTextContent caption={item.caption} />
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
    justifyContent: "space-between",
    backgroundColor: "#7ed957",
    padding: 50,
    //borderTopRightRadius: 150,
    //borderBottomLeftRadius: 150,
    borderTopEndRadius: 100,
    //borderBottomEndRadius:500,
    borderBottomStartRadius: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
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
    color: "white",
  },
  email: {
    fontSize: 16,
    color: "white",
    marginTop: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "#EAEAEA",
    marginVertical: 16,
  },
  postContainer: {
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  postImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 8,
    marginBottom: 8,
  },
  postCaption: {
    fontSize: 16,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    //backgroundColor: "#7ed957",
    borderColor: "#7ed957",
    borderWidth: 2,
    padding: 6,
    justifyContent: "space-evenly",
    borderRadius: 8,
    width: "30%",
    alignItems: "center",
  },
  buttonText: {
    color: "#7ed957",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  likeAnimation: {
    position: "absolute",
  },
});

export default Profile;

const user = {
  username: "Aviya",
  email: "Aviya@example.com",
  profile: require("../assets/Tlogo.png"),
  posts: [
    {
      id: 1,
      caption:
        "Tips for selecting soil and location for flower farming: \n\n Selection of site: The location of your flowerbed should be of the front view of your garden & not hidden somewhere in the background. Choose the sunniest spot in your garden as seasonal flowers do best in full sun. Flower beds look good when placed beside or in-between lawn. \n\n Soil: In general, flowering annuals thrive best in deep, well-drained & well-cultivated soil which is not acidic in nature. The beds should be worked up thoroughly to a depth of 30 cm before plantation when soil is not wet. \n\n Annuals & flowering season: In India, the flowering annual plants are classified according to the season when they are grown. Viz. Winter annuals, summer annuals, & rainy season annuals. Choose your flowerbed plants accordingly.",
      image: {
        uri: "https://cdn.shopify.com/s/files/1/0579/7924/0580/t/18/assets/shutterstock_210065338.jpgv1661860827?v=1661860895",
      },
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
      caption:
        "Marigold is one of the most popular, annual, free flowering and short duration flowering crops. These flowers are known for their vibrant orange and yellow blooms, which add a cheerful touch to gardens and landscapes. Marigolds are native to Mexico and Central America but are now grown worldwide. In India, major marigold growing states are Tamil Nadu, Karnataka, Andhra Pradesh, Karnataka, Madhya Pradesh and Maharashtra. They are widely grown for their use in various religious and cultural ceremonies. In addition to their ornamental value, marigolds are also known for their medicinal and culinary uses. Commonly cultivated marigold species are African marigold (Tall) and French marigold (Dwarf). Marigold cultivation is an important source of income for many farmers in India. ",
      image: {
        uri: "https://www.planetayurveda.com/pa-wp-images/marigold.jpg",
      },
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
      caption:
        "Rose crop loves to grow on well drained, fertile loamy soil that have good moisture holding capacity. Agriculturist have reported that rose grow better in soils having pH range of 6 to 6.5.Soil with pH level more than 7.5 is not suitable for farming of rose. As rose crop will be unable to uptake phosphorus, manganese, and iron in soil with higher pH than 7.5.",
      image: {
        uri: "https://media.licdn.com/dms/image/C5112AQGfzKh5BQbs0w/article-cover_image-shrink_720_1280/0/1568624652329?e=2147483647&v=beta&t=qvuo93m2ksmS-mAwCnUtl47U-CERoEDB3HVXRdCVvTg",
      },
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
      caption:
        "Tips for selecting soil and location for flower farming: \n\n Selection of site: The location of your flowerbed should be of the front view of your garden & not hidden somewhere in the background. Choose the sunniest spot in your garden as seasonal flowers do best in full sun. Flower beds look good when placed beside or in-between lawn. \n\n Soil: In general, flowering annuals thrive best in deep, well-drained & well-cultivated soil which is not acidic in nature. The beds should be worked up thoroughly to a depth of 30 cm before plantation when soil is not wet. \n\n Annuals & flowering season: In India, the flowering annual plants are classified according to the season when they are grown. Viz. Winter annuals, summer annuals, & rainy season annuals. Choose your flowerbed plants accordingly.",
      image: {
        uri: "https://cdn.shopify.com/s/files/1/0579/7924/0580/t/18/assets/shutterstock_210065338.jpgv1661860827?v=1661860895",
      },
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
      caption:
        "Marigold is one of the most popular, annual, free flowering and short duration flowering crops. These flowers are known for their vibrant orange and yellow blooms, which add a cheerful touch to gardens and landscapes. Marigolds are native to Mexico and Central America but are now grown worldwide. In India, major marigold growing states are Tamil Nadu, Karnataka, Andhra Pradesh, Karnataka, Madhya Pradesh and Maharashtra. They are widely grown for their use in various religious and cultural ceremonies. In addition to their ornamental value, marigolds are also known for their medicinal and culinary uses. Commonly cultivated marigold species are African marigold (Tall) and French marigold (Dwarf). Marigold cultivation is an important source of income for many farmers in India. ",
      image: {
        uri: "https://www.planetayurveda.com/pa-wp-images/marigold.jpg",
      },
      likes: 15,
      comments: [
        {
          id: 201,
          username: "user789",
          text: "Awesome!",
        },
      ],
    },
  ],
};
