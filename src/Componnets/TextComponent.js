import { useState, useCallback } from "react";
import { View, Text, StyleSheet,FlatList } from "react-native";

const PostTextContent = ({caption, index}) => {
  const [textShown, setTextShown] = useState(-1); 
    const [lengthMore, setLengthMore] = useState(false); 
    
    const toggleNumberOfLines = (index) => {
        if (textShown === index) {
          setTextShown(-1)
        }
        else {
            setTextShown(index)
        }
       
  };

//   const onTextLayout = useCallback((e) => {
//     setLengthMore(e.nativeEvent.lines.length >= 4); //to check the text is more than 4 lines or not
   
//   }, []);

  return (
    <View style={styles.container}>
     
       
          <View style={styles.flatListCell}>
            <Text
              numberOfLines={textShown === index ? undefined : 3}
              style={styles.description}
            >
              {caption}
            </Text>
            <Text
              onPress={() => toggleNumberOfLines(index)}
              style={{ color: "gray" }}
            >
              {textShown === index ? "read less..." : "read more..."}
            </Text>
          </View>
      
    </View>
  );
};

const styles = StyleSheet.create({

})

export default PostTextContent;

const longtext="First, gather your spinach seeds, gardening tools and let’s head out into the garden. Ensure that the area where you are planning to plant the seeds is a balance of light and shade. Also, make sure that the soil is well-drained with a pH level of 6.5 to 7. You can also make the soil extra rich by additional nutrients in the form of compost or manure. Pre-prep the soil with aged manure at least a week before planting the seeds. It is advisable to sow the seeds half an inch deep into the soil with at least 3” - 4” of space between each seed. This will give the plants room to grow and expand their roots. During the germination process, ensure that the soil is moist to accelerate the process.As soon as the seedlings reach a height of 2”, thin the plants to about 2” - 3”.Always monitor the amount of water you are giving your plants. You have to ensure that the soil remains moist. Do not overwater them. It is advisable to water early in the morning so that the plants can absorb the water throughout the day. Keep an eye on the growth of your plants. You don’t want pests and diseases affecting them. Besides pests and diseases, bolting is another common problem with spinach plants. If your spinach plants are going to seed, they are bolting. This might occur due to too little water, too much sun, or too much heat during the final stages of the growth process. To overcome bolting, you can either pull out the plants immediately otherwise the leaves will become bitter and inedible. Or better yet, you can let your spinach plants to flower, enjoy the beautiful spring blooms and collect the seeds for the next season. If maintained properly, your spinach should be ready for the first harvest in about 60 days 45-50 days."