import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View} from "react-native"
import PostTab from "./PostTab";
import CreatePost from "../Componnets/CreatePost";
const Stack = createNativeStackNavigator();

const FeedRoutes = () => {
  return (
    <View style={{ flex: 1,}}>
     
      <Stack.Navigator>
        <Stack.Screen
          name="posts"
          component={PostTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    </View>
  );
};

export default FeedRoutes;
