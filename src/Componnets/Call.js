import React, { useState } from "react";
import call from "react-native-phone-call";
import { View, Text, Button } from "react-native";
const Calls = () => {
  const [input, setInput] = useState(9944148015);
  const args = {
    number: input,
    prompt: true,
  };
  call(args).catch(console.error);
};

const Call = () => {
  return (
    <View>
      <Button title="call" onPress={Calls} />
    </View>
  );
};

export default Calls;
