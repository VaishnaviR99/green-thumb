import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CreatePost = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [Id, setId] = useState(8);

  useFocusEffect(
    useCallback(() => {
      setImage(null);
      setText("");
    }, [])
  );

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.assets[0].uri);
      } else {
        console.log("Image selection cancelled");
      }
    } catch (error) {
      console.error("Error picking an image: ", error);
    }
  };
  const CameraImage = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.assets[0].uri);
      } else {
        console.log("Image selection cancelled");
      }
    } catch (error) {
      console.error("Error picking an image: ", error);
    }
  };

  const handlePost = () => {
    const userPost = {
      id: Id + 1,
      caption: text,

      image: { uri: image },
      likes: 0,
      comments: [],
    };
    navigation.navigate("Profile", { userPost });

    console.log(text);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            multiline={true}
            numberOfLines={15}
            style={styles.textinput}
            onChangeText={(e) => setText(e)}
            value={text}
          />
          <View style={styles.picker}>
            <TouchableOpacity onPress={CameraImage}>
              <MaterialCommunityIcons name="camera" color="#7ed957" size={40} />
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImage}>
              <MaterialCommunityIcons name="image" color="#7ed957" size={40} />
            </TouchableOpacity>
          </View>

          {image && (
            <View style={styles.postImage}>
              <Image
                source={{ uri: image }}
                style={{ height: 200, width: 250 }}
                resizeMode="contain"
              />
            </View>
          )}

          <TouchableOpacity style={styles.button} onPress={handlePost}>
            <Text style={{ color: "white" }}>POST</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    height: "100%",
    padding: 30,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textinput: {
    borderWidth: 2,
    borderColor: "#7ed957",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: 200,
    marginTop: 20,
    padding: 20,
    fontSize: 16,
  },
  picker: {
    flexDirection: "row",
    marginTop: 30,
    alignSelf: "flex-end",
    gap: 25,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#7ed957",
    padding: 18,

    width: 300,
    marginTop: 22,
    borderTopEndRadius: 50,
    borderBottomLeftRadius: 50,
    alignSelf: "center",
  },
  postImage: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#7ed957",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    height: 250,
    marginTop: 10,
    padding: 20,
    fontSize: 16,
  },
});
