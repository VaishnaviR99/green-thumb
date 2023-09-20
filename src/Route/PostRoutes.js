import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, Image, Button } from "react-native";


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
