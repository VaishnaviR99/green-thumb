import React, { useState } from "react";
import call from "react-native-phone-call";
import {
  View,
  Text,
  Button,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CustomerCare = () => {
  const [input, setInput] = useState("9944148015");

  const RequestCall = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Phone Call Permission",
          message: "App needs access to phone call ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the dialer");

        const args = {
          number: input,
          prompt: true,
        };
        call(args).catch(console.error);
      } else {
        console.log("Call permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={RequestCall}>
        <MaterialCommunityIcons
          name="phone"
          color="green"
          size={23}
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
      </TouchableOpacity>
    </View>
  );
};

export default CustomerCare;
