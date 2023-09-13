
import Profile from "../screens/Profile";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeRoutes from "./HomeRoutes";
import PriceRoute from "./PriceRoute";
import PostRoutes from "./PostRoutes";
const Tab = createMaterialBottomTabNavigator();

const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#7ed957"
      shifting={true}
      //barStyle={{ backgroundColor: "rgba(0, 255, 0, 0.04)" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name=" Price"
        component={PriceRoute}
        options={{
          tabBarLabel: "Prices",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="finance" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostRoutes}
        options={{
          tabBarLabel: "Post",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="leaf" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="emoticon-happy"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
