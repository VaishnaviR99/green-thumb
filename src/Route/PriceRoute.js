import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Prices from "../screens/Prices";
import CustomerCare from "../Componnets/CustomerCare";

const Stack = createNativeStackNavigator();

const PriceRoute = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="cart"
              color="black"
              size={28}
              onPress={() => navigation.navigate("Cart")}
            />
            <MaterialCommunityIcons
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
            />
          </View>
        ),
      }}
    >
      <Stack.Screen name="Mandi Prices" component={Prices} />
    </Stack.Navigator>
  );
};

export default PriceRoute;
