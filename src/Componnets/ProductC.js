import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const CategoryProducts = ({ route, navigation }) => {
  const { category, data } = route.params;
  const products = data.products[category.name];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => {
        navigation.navigate("ProductDetails", { product: item });
      }}
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Price: ₹{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>{category.name} Products</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    //justifyContent: "space-evenly",
    //alignItems: "center",
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#ececec",
    borderRadius: 8,
    width: "50%",
    padding: 16,
    marginVertical: 8,
    margin: 5,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    borderRadius: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 16,
  },
});

export default CategoryProducts;
