import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { FontAwesome } from "@expo/vector-icons";
import { Input } from "@rneui/themed";
import TocButton from "../Componnets/Toc";
import { OTP_URL } from "../constants/constants";
import { NUMBER_PATTERN } from "../constants/constants";

const Login = ({ navigation }) => {
  const [number, setNumber] = useState("");

  const handleNumber = (data) => {
    if (NUMBER_PATTERN.test(data) || data.length === 0) {
      const userNumber = data;
      setNumber(userNumber);
    }
    // if (data.length === 10) {
    //   if (!NUMBER_PATTERN.test(data)) {
    //     alert("Pattern Enter Number Only!");
    //   }
    // }
  };
  const handleSubmit = () => {
    navigation.navigate("Otp");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/w3.jpg")}
        style={styles.img}
      />
      <View style={styles.form}>
        <KeyboardAwareScrollView>
          <Image source={require("../assets/Tlogo.png")} style={styles.logo} />

          <Text style={styles.loginText}>Log In</Text>

          <Input
            placeholder="Enter your phone number"
            placeholderTextColor="white"
            inputStyle={{ color: "white", fontSize: 25 }}
            keyboardType="numeric"
            maxLength={10}
            leftIcon={
              <FontAwesome name="mobile" size={43} style={styles.icon} />
            }
            containerStyle={styles.inputContainer}
            value={number}
            onChangeText={(text) => handleNumber(text)}
          />
          {number.length === 10 ? (
            <TocButton
              title="Get OTP"
              onPress={handleSubmit}
              backgroundColor={"#7ed957"}
            />
          ) : null}
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  logo: {
    width: "70%",
    resizeMode: "contain",
    alignSelf: "center",
    //marginBottom: 10,
    position: "absolute",
  },
  form: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    //justifyContent: "center",
    //paddingHorizontal: 40,
  },

  loginText: {
    //position: "absolute",
    alignSelf: "center",
    marginTop: 400,
    fontSize: 25,
    fontWeight: "bold",
    color: "#7ed957",
  },
  inputContainer: {
    //textShadowColor: "#6aa81a",
    //position: "absolute",
    //alignSelf: "center",
    // width: "80%",
    //marginBottom: 280,
    color: "#6aa81a",
    //borderWidth: 1,
    //borderColor: "#6aa81a",
    width: 280,
    marginTop: 50,
  },
  icon: {
    marginRight: 18,
    marginLeft: 5,
    color: "#7ed957",
  },
});
