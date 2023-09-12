import React from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";
const Avatarcomp = ({size}) => {
  return (
    <Avatar.Text
      size={size}
      label="A"
      backgroundColor="rgba(0, 255, 0, 0.03)"
      color="green"
      style={{
        borderWidth: 2,
        borderRadius: 18,
        borderColor: "green",
        marginLeft: 8,
        alignSelf:"center",
          color: "green",
        
        
      }}
    />
  );
};

export default Avatarcomp;
