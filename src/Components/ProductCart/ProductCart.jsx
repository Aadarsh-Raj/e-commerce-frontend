import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "./ProductCart.css";

const ProductCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      product: "Product 1",
      quantity: 1,
      price: 100,
      image:
        "https://template.annimexweb.com/optimal-rtl/assets/images/products/product-6-1.jpg",
    },
    {
      id: 2,
      product: "Product 2",
      quantity: 2,
      price: 150,
      image:
        "https://template.annimexweb.com/optimal-rtl/assets/images/products/product-9-1.jpg",
    },
    {
      id: 3,
      product: "Product 3",
      quantity: 1,
      price: 200,
      image:
        "https://template.annimexweb.com/optimal-rtl/assets/images/products/product-15.jpg",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="cartContainerMain">
      <div className="cartContainer">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="cartProduct">
                  <div className="cartProductNane">{item.product}</div>
                  <div className="cartProductImage">
                    <img src={item.image} alt="top" />
                  </div>
                </td>
                <td>
                  <button
                    className="cartProductDecBtn"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <FaMinus />
                  </button>
                  {item.quantity}
                  <button
                    className="cartProductIncBtn "
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <FaPlus />
                  </button>
                </td>
                <td>${item.price}</td>
                <td>${item.quantity * item.price}</td>
                <td>
                  <p className="deleteBtn" onClick={() => removeItem(item.id)}>
                    <MdDeleteOutline />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total">Total: ${calculateTotal()}</div>
      </div>
      <div className="cartShipping"></div>
    </div>
  );
};

export default ProductCart;