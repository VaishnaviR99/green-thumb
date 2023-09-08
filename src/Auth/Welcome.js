import React from "react";
import {
  Text,
  TouchableNativeFeedback,
  TouchableHighlight,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Welcome = ({ navigation }) => {
  const press = () => {};
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/second.png")}
        style={styles.img}
      />

      <View style={styles.text}>
        <TouchableHighlight
          style={styles.button}
          onPress={press}
          underlayColor="#75E984"
        >
          <Text
            style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
            onPress={() => navigation.navigate("Login")}
          >
            LOGIN
          </Text>
        </TouchableHighlight>

        <View style={styles.singup}>
          <Text style={{ color: "white", width: 170 }}>
            Don't have an account ?
          </Text>
          <TouchableOpacity onPress={press}>
            <Text
              style={{ color: "#6aa81a", width: 100, fontWeight: "bold" }}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  img: {
    height: "100%",
    width: "100%",
  },
  text: {
    position: "absolute",
    bottom: 150,
    left: 50,
    fontSize: 20,
    padding: 2,
    width: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6aa81a",
    borderBlockColor: "green",

    borderWidth: 1,
    padding: 22,
    width: 300,
    marginTop: 16,
    borderTopEndRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: "",
  },
  singup: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 35,
  },
});
