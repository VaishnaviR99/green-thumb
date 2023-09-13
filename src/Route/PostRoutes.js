import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, Image, Button } from "react-native";

import Hometab from "./Hometab";
import Avatarcomp from "../Componnets/Avatar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Prices from "../screens/Prices";
import TopNavigation from "./TopNvigation";

const Stack = createNativeStackNavigator();



const PostRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostRoute" component={TopNavigation} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

export default PostRoutes;
