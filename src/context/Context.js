import React, { createContext, useContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedCart = [...state, action.payload];
     
      AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    case "REMOVE_FROM_CART":
      const filteredCart = state.filter(
        (item) => item.id !== action.payload.id
      );
      
      AsyncStorage.setItem("cart", JSON.stringify(filteredCart));
      return filteredCart;
    case "CLEAR_CART":
      
      AsyncStorage.removeItem("cart");
      return [];
    default:
      return state;
  }
};


export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

 
  useEffect(() => {
    const loadCartData = async () => {
      try {
        const savedCartData = await AsyncStorage.getItem("cart");
        if (savedCartData !== null) {
          dispatch({ type: "CLEAR_CART" }); 
          const parsedCartData = JSON.parse(savedCartData);
          dispatch({ type: "ADD_TO_CART", payload: parsedCartData });
        }
      } catch (error) {
        console.error("Error loading cart data from AsyncStorage:", error);
      }
    };

    loadCartData();
  }, []);

 

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};


