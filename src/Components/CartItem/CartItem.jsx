import React from "react";

const CartItem = ({ item }) => {
  const { product, quantity, price } = item;

  const getTotalPrice = () => {
    return quantity * price;
  };

  return (
    <tr>
      <td>{product}</td>
      <td>{quantity}</td>
      <td>${price.toFixed(2)}</td>
      <td>${getTotalPrice().toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
