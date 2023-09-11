import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CreatePost = ({ navigation }) => {
  const [caption, setCaption] = useState("");

  const handleCreatePost = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Create New Post</Text>
      <TextInput
        placeholder="Enter caption"
        value={caption}
        onChangeText={(text) => setCaption(text)}
      />
      <TouchableOpacity style={styles.createPostButton}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  createPostButton: {
    backgroundColor: "#7ed957",
    padding: 8,
    borderRadius: 8,
  },
});
