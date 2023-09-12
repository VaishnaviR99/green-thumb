import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import TocButton from "../Componnets/Toc";

export default function OtpVerification({ length = 4 , navigation}) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const otpInputs = useRef([]);

  const handleOtpChange = (text, index) => {
    if (isNumeric(text) || text === "") {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      handleFocus(index, text);
    }
  };

  const isNumeric = (text) => /^[0-9]+$/.test(text);

  const handleFocus = (index, text) => {
    if (text !== "") {
      focusNextInput(index);
    } else {
      focusPreviousInput(index);
    }
  };

  const focusNextInput = (index) => {
    if (index < length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const focusPreviousInput = (index) => {
    if (index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  const isOtpComplete = () => {
    return otp.every((digit) => digit !== "");
  };

  const handleSubmitOtp = () => {
    if (isOtpComplete()) {
      const otpValue = otp.join("");
      alert("OTP submitted: " + otpValue);
      navigation.navigate("Home")

    } else {
      alert("Please fill in all OTP fields.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.optText}>Verify OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.inputStyle}
            maxLength={1}
            keyboardType="numeric"
            value={otp[index]}
            onChangeText={(text) => handleOtpChange(text, index)}
            ref={(input) => (otpInputs.current[index] = input)}
          />
        ))}
      </View>

      <TocButton
        title="Submit OTP"
        onPress={handleSubmitOtp}
        disabled={!isOtpComplete()}
        backgroundColor={"#7ed957"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  optText: {
    marginBottom: 30,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "800",
  },
  otpContainer: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    width: "100%",
    gap: 30,
    marginBottom: 40,
  },
  inputStyle: {
    borderWidth: 2,
    width: 40,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 10,

    borderColor: "#7ed957",
  },
  buttonContainer: {
    width: "80%",
    paddingVertical: 10,
    borderRadius: 6,
    alignSelf: "center",
    backgroundColor: "#2089dc",
  },
  enabledBackground: {
    backgroundColor: "#2089dc",
  },
  disabledBackground: {
    backgroundColor: "#e5e5e5",
  },
  textt: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
