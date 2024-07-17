import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseQuantity: (id) => {},
  decreaseQuantity: (id) => {},
});

export default CartContext;
