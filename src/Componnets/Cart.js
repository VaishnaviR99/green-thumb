import {
  View,
  Text,
  Button,
  StyleSheet,
  PermissionsAndroid,
} from "react-native";
import { useCart } from "../context/Context";
import { useState } from "react";
import call from "react-native-phone-call";

// const Cart = () => {
//   const { cart, dispatch } = useCart();

//   const removeFromCart = (item) => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: item });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.cartTitle}>Your Cart:</Text>
//       {cart.map((item) => (
//         <View key={item.id} style={styles.cartItem}>
//           <Text>{item.name}</Text>
//           <Text>Price: ${item.price}</Text>
//           <Button
//             title="Remove from Cart"
//             onPress={() => removeFromCart(item)} // Remove the item from the cart
//             style={styles.button}
//           />
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
//   cartTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   cartItem: {
//     marginBottom: 16,
//   },
//   button: {
//     width: 200,
//   },
// });

//export default Cart;
import React from "react";

const Cart = () => {
  const [input, setInput] = useState('9944148015');

  const request = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Green Thumb App Call Permission",
          message:
            "Green Thumb App needs access to your calls " +
            "so you can coonect to customer care.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the calls");

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
      <Button title="CALL" onPress={request} style={{ fontSize: 50 }} />
    </View>
  );
};

export default Cart;
