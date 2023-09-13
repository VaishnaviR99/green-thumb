import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, Image, Button } from "react-native";
import Category from "../Componnets/Category";
import ProductC from "../Componnets/ProductC";
import ProductDetails from "../Componnets/PrductDetails";
import Cart from "../Componnets/Cart";
import Payment from "../Componnets/Payment";
import Weather from "../Componnets/Weather";
import Hometab from "./Hometab";
import Avatarcomp from "../Componnets/Avatar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CustomerCare from "../Componnets/CustomerCare";

const Stack = createNativeStackNavigator();

const LogoTitle = () => {
  return (
    <View>
      <Image
        source={require("../assets/small_logo.png")}
        style={{ height: 70, width: 150, resizeMode: "cover" }}
      />
    </View>
  );
};

const HomeRoutes = ({ navigation }) => {
  return (
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
          headerTitle: " ",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="cart"
                color="black"
                size={28}
                onPress={() => navigation.navigate("Cart")}
              />

              {/* <MaterialCommunityIcons
                name="phone"
                color="green"
                size={23}
                onPress={() => CustomerCare}
                backgroundColor="rgba(0, 255, 0, 0.03)"
                style={{
                  borderWidth: 1,
                  borderRadius: 18,
                  padding: 4,
                  borderColor: "rgba(0, 255, 0, 0.3)",
                  marginLeft: 15,
                  marginRight: 5,
                }}
              /> */}
              <CustomerCare />
            </View>
          ),
          headerLeft: () => (
            <View>
              <Avatarcomp size={50} />
            </View>
          ),
        }}
      />
      <Stack.Screen name="Categories" component={Category} />
      <Stack.Screen name="CategoryProducts" component={ProductC} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Weather" component={Weather} />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
