import React from "react";
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const GreenButton = (props) => {
  return (
    <View style={styles.container}>
      {/* <TouchableNativeFeedback
        onPress={this.onPress}
        background={TouchableNativeFeedback.Ripple("#75E984")}
      >
        <View style={styles.button}>
          <Text>Touchable Native Feedback(Only Android)</Text>
        </View>
      </TouchableNativeFeedback> */}

      <TouchableHighlight
        style={styles.button}
        onPress={props.press}
        underlayColor="#75E984"
      >
        <Text>{props.title}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default GreenButton;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#6aa81a",
    padding: 30,
    width: 300,
    marginTop: 16,
    borderTopEndRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: "",
  },
});
