import React from "react";
import { ScrollView, Text, View, Image, Button } from "react-native";
import Category from "../Componnets/Category";
import Weather from "../Componnets/Weather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductC from "../Componnets/ProductC";
import ProductDetails from "../Componnets//PrductDetails";
import Hometab from "../Componnets/Hometab";
import Cart from "../Componnets/Cart";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

const LogoTitle = () => {
  return (
    <View>
      <Image
        source={require("../assets/small_logo.png")}
        style={{ height: 70, width: 200, resizeMode: "cover" }}
      />
    </View>
  );
};
const Home = ({ navigation }) => {
  return (
    // <View style={{ flex: 1 }}>
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <View>
            <MaterialCommunityIcons
              name="cart"
              color="black"
              size={26}
              onPress={() => navigation.navigate("Cart")}
            />
          </View>
        ),
      }}
    >
      <Stack.Screen
        name="homee"
        component={Hometab}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <View>
              <MaterialCommunityIcons
                name="cart"
                color="black"
                size={26}
                onPress={() => navigation.navigate("Cart")}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen name="Categories" component={Category} />
      <Stack.Screen name="CategoryProducts" component={ProductC} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
    // </View>
  );
};

export default Home;

const data = {
  categories: [
    {
      id: 1,
      name: "Herbicides",
      image: require("../assets/Tlogo.png"),
    },
    {
      id: 2,
      name: "Growth Promoters",
      image: require("../assets/Tlogo.png"),
    },
    {
      id: 3,
      name: "FarmMachinerys",
      image: require("../assets/Tlogo.png"),
    },
    {
      id: 4,
      name: "Viricides",
      image: require("../assets/Tlogo.png"),
    },
    {
      id: 5,
      name: "Farm Machinery",
      image: require("../assets/Tlogo.png"),
    },
    {
      id: 6,
      name: "Nutrients",
      image: require("../assets/Tlogo.png"),
    },
    {
      id: 7,
      name: "Insecticides",
      image: require("../assets/Tlogo.png"),
    },
    {
      id: 8,
      name: "Pesticides",
      image: require("../assets/Tlogo.png"),
    },
    {
      id: 9,
      name: "Crop Insecticides",
      image: require("../assets/Tlogo.png"),
    },
  ],
  products: {
    Herbicides: [
      {
        id: 1,
        name: "Herbicide 1",
        price: 10,
        image: require("../assets/Tlogo.png"),
        description: "Description for Herbicide 1",
      },
      {
        id: 2,
        name: "Herbicide 2",
        price: 15,
        image: require("../assets/Tlogo.png"),
        description: "Description for Herbicide 2",
      },
      {
        id: 3,
        name: "Herbicide 3",
        price: 12,
        image: require("../assets/Tlogo.png"),
        description: "Description for Herbicide 3",
      },
      {
        id: 4,
        name: "Herbicide 4",
        price: 18,
        image: require("../assets/Tlogo.png"),
        description: "Description for Herbicide 4",
      },
    ],
    "Growth Promoters": [
      {
        id: 5,
        name: "Growth Promoter 1",
        price: 20,
        image: require("../assets/Tlogo.png"),
        description: "Description for Growth Promoter 1",
      },
      {
        id: 6,
        name: "Growth Promoter 2",
        price: 25,
        image: require("../assets/Tlogo.png"),
        description: "Description for Growth Promoter 2",
      },
      {
        id: 7,
        name: "Growth Promoter 3",
        price: 22,
        image: require("../assets/Tlogo.png"),
        description: "Description for Growth Promoter 3",
      },
      {
        id: 8,
        name: "Growth Promoter 4",
        price: 28,
        image: require("../assets/Tlogo.png"),
        description: "Description for Growth Promoter 4",
      },
    ],
    FarmMachinerys: [
      {
        id: 9,
        name: "FarmMachinery 1",
        price: 12,
        image: require("../assets/Tlogo.png"),
        description: "Description for FarmMachinery 1",
      },
      {
        id: 10,
        name: "FarmMachinery 2",
        price: 18,
        image: require("../assets/Tlogo.png"),
        description: "Description for FarmMachinery 2",
      },
      {
        id: 11,
        name: "FarmMachinery 3",
        price: 15,
        image: require("../assets/Tlogo.png"),
        description: "Description for FarmMachinery 3",
      },
      {
        id: 12,
        name: "FarmMachinery 4",
        price: 20,
        image: require("../assets/Tlogo.png"),
        description: "Description for FarmMachinery 4",
      },
    ],
    Viricide: [
      {
        id: 13,
        name: " Viricide 1",
        price: 12,
        image: require("../assets/Tlogo.png"),
        description: "Description for FarmMachinery 1",
      },
      {
        id: 14,
        name: "Viricide 2",
        price: 18,
        image: require("../assets/Tlogo.png"),
        description: "Description for Fungicide 2",
      },
      {
        id: 15,
        name: "Viricide  3",
        price: 15,
        image: require("../assets/Tlogo.png"),
        description: "Description for Fungicide 3",
      },
      {
        id: 16,
        name: "Viricide  4",
        price: 20,
        image: require("../assets/Tlogo.png"),
        description: "Description for Fungicide 4",
      },
    ],
    Fungicides: [
      {
        id: 17,
        name: "Fungicides 1",
        price: 12,
        image: require("../assets/Tlogo.png"),
        description: "Description for Fungicides 1",
      },
      {
        id: 18,
        name: "Fungicides 2",
        price: 18,
        image: require("../assets/Tlogo.png"),
        description: "Description for Fungicides 2",
      },
      {
        id: 19,
        name: "Fungicides 3",
        price: 15,
        image: require("../assets/Tlogo.png"),
        description: "Description for Fungicides 3",
      },
      {
        id: 20,
        name: "Fungicides 4",
        price: 20,
        image: require("../assets/Tlogo.png"),
        description: "Description for Fungicides 4",
      },
    ],

    Nutrients: [
      {
        id: 21,
        name: "Nutrients 1",
        price: 12,
        image: require("../assets/Tlogo.png"),
        description: "Description for Nutrients 1",
      },
      {
        id: 22,
        name: "Nutrients 2",
        price: 18,
        image: require("../assets/Tlogo.png"),
        description: "Description for Nutrients 2",
      },
      {
        id: 23,
        name: "Nutrients 3",
        price: 15,
        image: require("../assets/Tlogo.png"),
        description: "Description for Nutrients 3",
      },
      {
        id: 24,
        name: "Nutrients 4",
        price: 20,
        image: require("../assets/Tlogo.png"),
        description: "Description for Nutrients 4",
      },
    ],

    Seeds: [
      {
        id: 25,
        name: "Seeds 1",
        price: 12,
        image: require("../assets/Tlogo.png"),
        description: "Description for Seeds 1",
      },
      {
        id: 26,
        name: "Seeds 2",
        price: 18,
        image: require("../assets/Tlogo.png"),
        description: "Description for Seeds 2",
      },
      {
        id: 27,
        name: "Seeds 3",
        price: 15,
        image: require("../assets/Tlogo.png"),
        description: "Description for Seeds 3",
      },
      {
        id: 28,
        name: "Seeds 4",
        price: 20,
        image: require("../assets/Tlogo.png"),
        description: "Description for Seeds 4",
      },
    ],
    Insecticides: [
      {
        id: 29,
        name: "Insecticides 1",
        price: 12,
        image: require("../assets/Tlogo.png"),
        description: "Description for Insecticides 1",
      },
      {
        id: 30,
        name: "Insecticides 2",
        price: 18,
        image: require("../assets/Tlogo.png"),
        description: "Description for Insecticides 2",
      },
      {
        id: 31,
        name: "Insecticides 3",
        price: 15,
        image: require("../assets/Tlogo.png"),
        description: "Description for Insecticides 3",
      },
      {
        id: 32,
        name: "Insecticides 4",
        price: 20,
        image: require("../assets/Tlogo.png"),
        description: "Description for Insecticides 4",
      },
    ],

    Pesticides: [
      {
        id: 33,
        name: "Pesticides 1",
        price: 12,
        image: require("../assets/Tlogo.png"),
        description: "Description for Pesticides 1",
      },
      {
        id: 34,
        name: "Pesticides 2",
        price: 18,
        image: require("../assets/Tlogo.png"),
        description: "Description for Pesticides 2",
      },
      {
        id: 35,
        name: "Pesticides 3",
        price: 15,
        image: require("../assets/Tlogo.png"),
        description: "Description for Pesticides 3",
      },
      {
        id: 36,
        name: "Pesticides 4",
        price: 20,
        image: require("../assets/Tlogo.png"),
        description: "Description for Pesticides 4",
      },
    ],
  },
};
