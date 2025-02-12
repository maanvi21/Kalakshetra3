import React, { useState } from 'react';
import productItems from '../data/ProductData'
import Header from '../components/Header';
import "./Cart.css";

const Cart = () => {
  const [isCartView, setIsCartView] = useState(true);

  

  const handleQuantityChange = (id, delta) => {
    console.log(`Change quantity for item ${productItems.id} by ${delta}`);
  };

  const handleRemove = (id) => {
    console.log(`Remove item ${id}`);
  };

  const calculateTotal = () => {
    return productItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div >
      <Header/>
      <div className="container">
          <h1 className="title">View Cart</h1>
          <button 
            className="toggle-button"
            onClick={() => setIsCartView(!isCartView)}
          >
            {isCartView ? "View Wishlist" : "View Cart"}
          </button>
        

        {isCartView ? (
          <div>
            {productItems.length > 0 ? (
              <div className="item-grid">
                {productItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                      <h2 className="item-name">{item.name}</h2>
                      <p className="item-price">₹{item.price}</p>
                      <div className="quantity-controls">
                        <button 
                          className="quantity-button"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          className="quantity-button"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      className="action-button" 
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-message">Your cart is empty.</p>
            )}

            {productItems.length > 0 && (
              <div className="total-container">
                <p className="total-label">Total: ₹{calculateTotal()}</p>
                <button className="checkout-button">Checkout</button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {productItems.length > 0 ? (
              <div className="item-grid">
                {productItems.map((item) => (
                  <div className="wishlist-item" key={item.id}>
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                      <h2 className="item-name">{item.name}</h2>
                      <p className="item-price">₹{item.price}</p>
                    </div>
                    <button 
                      className="action-button"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-message">Your wishlist is empty.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
