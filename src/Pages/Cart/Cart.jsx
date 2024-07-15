import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    // Sample cart items
    {
      id: 1,
      name: "T-shirt",
      image:
        "https://static.zara.net/photos///2023/I/0/2/p/4087/325/527/2/w/1920/4087325527_2_1_1.jpg?ts=1691571266595",
      size: "M",
      quantity: 2,
      price: 25
    },
    {
      id: 2,
      name: "T-shirt",
      image:
        "https://static.zara.net/photos///2023/I/0/2/p/0962/322/615/2/w/750/0962322615_2_1_1.jpg?ts=1688718276217",
      size: "L",
      quantity: 1,
      price: 30
    }
  ]);
  const [promoCode, setPromoCode] = useState("");
  const [shippingAddress] = useState("123 Shipping St, City, Country");
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxes = 0.1 * subtotal;
  const discount = 10;
  const handleQuantityChange = (itemId, newQuantity) => {
    // Update quantity for the given item in the cartItems state
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="cart-header-left">
          <div className="cart-title">SHOPPING CART</div>
          <div className="cart-item-count">{cartItems.length} Items</div>
        </div>
      </div>
      <hr className="divider" />
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                {item.name}
              </td>
              <td>{item.size}</td>
              <td>
                <button
                  className="minus-button"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="plus-button"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-header-right">
        <div className="cart-totals">
          <div className="totals-row">
            <div>Subtotal:</div>
            <div>${subtotal.toFixed(2)}</div>
          </div>
          <div className="totals-row">
            <div>Taxes:</div>
            <div>${taxes.toFixed(2)}</div>
          </div>
          <div className="totals-row">
            <div>Discount:</div>
            <div>${discount.toFixed(2)}</div>
          </div>
          <div className="totals-row total">
            <div>Total:</div>
            <div>${(subtotal + taxes - discount).toFixed(2)}</div>
          </div>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
      <div className="promo-code">
        <input
          type="text"
          placeholder="Enter Promo Code"
          value={promoCode}
          onChange={(event) => setPromoCode(event.target.value)}
        />
        <button>Apply</button>
      </div>
      <div className="shipping-address">
        <div className="address-title">Shipping Address</div>
        <div className="address">{shippingAddress}</div>
        <button className="change-address-button">Change Address</button>
      </div>
      <div className="items-you-loved">{/* recommended items */}</div>
    </div>
  );
};

export default Cart;
