import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

import ViewArticle from "../Componnets/ViewArticle";
import Articles from "../Componnets/Article";
const Stack = createNativeStackNavigator();

const ArticleRoutes = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="ArticleCards"
          component={Articles}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ViewArticle" component={ViewArticle} />
      </Stack.Navigator>
    </View>
  );
};

export default ArticleRoutes;
