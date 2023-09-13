import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const ViewArticle = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: article.image.uri }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{article.title}</Text>
          <View style={styles.detailContainer}>
            <MaterialCommunityIcons
              name="calendar-month"
              color="green"
              style={styles.icon}
            />
            <Text style={styles.detail}>{article.months}</Text>
          </View>
          <View style={styles.detailContainer}>
            <MaterialCommunityIcons
              name="human-male-height"
              color="green"
              style={styles.icon}
            />
            <Text style={styles.detail}>{article.height}</Text>
          </View>
          <View style={styles.detailContainer}>
            <MaterialCommunityIcons
              name="weight-kilogram"
              color="green"
              style={styles.icon}
            />
            <Text style={styles.detail}> {article.weight}</Text>
          </View>
          <View style={styles.detailContainer}>
            <MaterialCommunityIcons
              name="temperature-celsius"
              color="green"
              style={styles.icon}
            />
            <Text style={styles.detail}>{article.temperature}</Text>
          </View>
          <Text style={styles.detail}>Soil: {article.soil}</Text>
          <Text style={styles.description}>{article.description}</Text>
          <Text style={styles.detail}>
            Cultivation Process: {article.process}
          </Text>
          <Text style={styles.detail}>Common Diseases: {article.diseases}</Text>
          <Text style={styles.detail}>Cultivation State: {article.state}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// const ArticleCard = ({ blogPost }) => {
//   console.log(blogPost, "viewarticle");
//   return (
//     <View style={{ flex: 1 }}>
//       <Text>Blog Post ID: {blogPost.id}</Text>
//       <Text>Username: {blogPost.username}</Text>
//       <Text>Text: {blogPost.text}</Text>
//     </View>
//   );
// };
export default ViewArticle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 16,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 10,
  },
  icon: {
    fontSize: 35,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#7ed957",
    marginRight: 8,
    padding: 8,
    color: "#7ed957",
  },
  detail: {
    fontSize: 16,

    //color: "green",
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    color: "gray",
  },
});
