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

const Articles = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={ArticleData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ArticleCard article={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const ArticleCard = ({ article, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => {
        navigation.navigate("ViewArticle", { article: article });
      }}
    >
      <View style={styles.card}>
        <Image source={article.image} style={styles.image} />
        <Text style={styles.caption}>{article.caption}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    //flexWrap: "wrap",
    // flexDirection:"row",
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: 180,
    borderRadius: 8,
    padding: 8,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  image: {
    //width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  caption: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Articles;

// const ArticleData = [
//   {
//     id: 1,
//     image: {
//       uri: "https://www.asiafarming.com/wp-content/uploads/2016/07/Health-Benefits-Of-Apple..jpg",
//     },
//     caption: "Apple",
//     month: "anuary - February",
//     temp: "21-24C",
//     description:
//       "An apple is a round, edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found. Apples have been grown for thousands of years in Asia and Europe and were introduced to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.Apples grown from seed tend to be very different from those of their parents, and the resultant fruit frequently lacks desired characteristics. Generally, apple cultivars are propagated by clonal grafting onto rootstocks. Apple trees grown without rootstocks tend to be larger and much slower to fruit after planting. Rootstocks are used to control the speed of growth and the size of the resulting tree, allowing for easier harvesting.",
//     weight: "200gm",
//     height: "7.5 – 10 m",
//     time: "4-5 months",
//     soil:"Apples grow best on a well-drained, loam soils having a depth of 45 cm and a pH range of pH 5.5-6.5. The soil should be free from hard substrata and water-logged conditions. Soils with heavy clay or compact subsoil are to be avoided. "

//   },
//   {
//     id: 2,
//     image: {
//       uri: "https://img.theculturetrip.com/1200x675/wp-content/uploads/2018/03/origins-of-the-word-orange.jpg",
//     },
//     caption: "Orange",
//     blog: [
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
//     image: {
//       uri: "https://img.etimg.com/thumb/width-640,height-480,imgsize-56196,resizemode-75,msid-95423731/magazines/panache/5-reasons-why-tomatoes-should-be-your-favourite-fruit-this-year/tomatoes-canva.jpg",
//     },
//     caption: "Tomato",
//     blog: [
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
//   {
//     id: 4,
//     image: {
//       uri: "https://s3g2u3k4.rocketcdn.me/wp-content/uploads/sites/4/2022/11/sunflower.jpg",
//     },
//     caption: "Sunflower",
//     blog: [
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
//   {
//     id: 5,
//     image: {
//       uri: "https://m.media-amazon.com/images/I/51lTK6iktYL._AC_UF1000,1000_QL80_.jpg",
//     },
//     caption: "Potato",
//     blog: [
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

const ArticleData = [
  {
    id: 1,
    image: {
      uri: "https://www.asiafarming.com/wp-content/uploads/2016/07/Health-Benefits-Of-Apple..jpg",
    },
    caption: "Apple",
    title: "The  Apple Tree",
    months: " December to February",
    height: " 6 to 30 feet ",
    weight: "150 g and 250 g.",
    temperature: " 0°C to 24°C.",
    soil: "They require well-drained, slightly acidic to neutral soil.",
    description:
      "Apple trees, a beloved fruit-bearing tree, are cultivated across India for their juicy and flavorful fruits.",
    process:
      "To cultivate apple trees in India, choose a well-drained location, plant during the winter months, provide regular care, and protect against common diseases.",
    diseases:
      "Common apple tree diseases in India include apple scab, powdery mildew, and fire blight.",
    state:
      "In India, apple cultivation is most prominent in Himachal Pradesh, especially in regions like Shimla, Kinnaur, and Kullu.",
  },
  {
    id: 2,
    image: {
      uri: "https://img.theculturetrip.com/1200x675/wp-content/uploads/2018/03/origins-of-the-word-orange.jpg",
    },
    caption: "Orange",
    title: "The  Orange Tree",
    months: "June to August.",
    height: " up to 30 feet.",
    weight: "150-200 grams",
    temperature: " 15°C to 35°C.",
    soil: "They prefer well-drained, sandy loam soil with good organic matter.",
    description:
      "Oranges are a popular citrus fruit grown in India, known for their sweet and tangy flavor.",
    process:
      "To cultivate orange trees in India, select a sunny location, plant during the monsoon season, provide adequate irrigation, and protect against pests.",
    diseases:
      "Common diseases affecting Indian orange trees include citrus canker and greening disease.",
    state:
      "Nagpur in Maharashtra is famous for its orange orchards and is often referred to as the 'Orange City of India.'",
  },
  {
    id: 3,
    image: {
      uri: "https://img.etimg.com/thumb/width-640,height-480,imgsize-56196,resizemode-75,msid-95423731/magazines/panache/5-reasons-why-tomatoes-should-be-your-favourite-fruit-this-year/tomatoes-canva.jpg",
    },
    caption: "Tomato",
    title: "The  Tomato Plant",
    months: " October to February.",
    height: "3 to 5 feet.",
    weight: "70 to 150 gram",
    temperature: " 20°C to 30°C.",
    soil: "They require well-drained, fertile soil with good moisture retention.",
    description:
      "Tomatoes are a widely cultivated vegetable in India, known for their versatility in Indian cuisine.",
    process:
      "To grow tomatoes in India, choose a sunny spot, plant during the cool season, provide regular water, and support the plants with stakes.",
    diseases:
      "Common tomato plant diseases in India include early blight and late blight.",
    state:
      "Karnataka, Andhra Pradesh, and Maharashtra are among the top tomato-producing states in India.",
  },
  {
    id: 4,
    image: {
      uri: "https://s3g2u3k4.rocketcdn.me/wp-content/uploads/sites/4/2022/11/sunflower.jpg",
    },
    caption: "Sunflower",
    title: "The  Sunflower",
    months: " November to January.",
    height: " 5 to 10 feet.",
    weight: " depends on size and seed production.",
    temperature: " 20°C to 30°C.",
    soil: "They prefer well-drained soil with good organic content.",
    description:
      "Sunflowers are cultivated in India for their vibrant blooms and nutritious seeds.",
    process:
      "To cultivate sunflowers in India, choose a sunny location, plant during the cool season, provide ample water, and protect from birds.",
    diseases:
      "Common sunflower diseases in India include downy mildew and rust.",
    state:
      "Karnataka and Maharashtra are known for their sunflower cultivation in India.",
  },
  {
    id: 5,
    image: {
      uri: "https://m.media-amazon.com/images/I/51lTK6iktYL._AC_UF1000,1000_QL80_.jpg",
    },
    caption: "Potato",
    title: "The  Potato Plant",
    months: "December to February.",
    height: " 1 to 2 feet.",
    weight: "140-280 g ",
    temperature: " 15°C to 25°C.",
    soil: "They require well-drained, sandy loam soil with good organic matter.",
    description:
      "Potatoes are a staple crop in India, used in various culinary preparations.",
    process:
      "To grow potatoes in India, select a well-drained location, plant during the cool season, provide hilling, and protect against pests.",
    diseases:
      "Common potato diseases in India include late blight and early blight.",
    state:
      "Uttar Pradesh is one of the leading potato-producing states in India.",
  },
];
