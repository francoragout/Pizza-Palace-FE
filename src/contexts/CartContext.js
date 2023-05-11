import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item._id === product._id);

    if (existingProduct) {
      const updatedCartItems = cartItems.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            count: item.count + 1,
            totalPrice: item.totalPrice + product.price,
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      
    } else {
      setCartItems([...cartItems, {
        ...product,
        count: 1,
        totalPrice: product.price,
      }]);
    }
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  const itemCount = cartItems.reduce((acc, item) => acc + item.count, 0);

  const removeFromCart = (product) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item._id !== product._id)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal, itemCount }}>
      {children}
    </CartContext.Provider>
  );
};


