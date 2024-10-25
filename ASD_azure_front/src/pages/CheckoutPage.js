import React, { useState } from 'react';
import './CheckoutPage.css';  // Import the CSS for styling

const CheckoutPage = () => {
  // State variables
  const [paymentMethod, setPaymentMethod] = useState('CreditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Margherita Pizza', price: 15.99, quantity: 2 },
    { id: 2, name: 'Caesar Salad', price: 10.99, quantity: 1 },
    { id: 3, name: 'Lemonade', price: 4.50, quantity: 3 }
  ]);

  const validCoupons = {
    'DISCOUNT10': 10,  // 10% discount
    'DISCOUNT20': 20,  // 20% discount
  };

  // Handlers for input changes, ensuring inputs are controlled
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');  // Only allow digits
    setCardNumber(value.slice(0, 16));  // Limit to 16 digits
  };

  const handleExpirationDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');  // Only allow digits
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);  // Auto-insert slash after MM
    }
    setExpirationDate(value.slice(0, 5));  // Limit to MM/YY format
  };

  const handleSecurityCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');  // Only allow digits
    setSecurityCode(value.slice(0, 3));  // Limit to 3 digits
  };

  const handleNameOnCardChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase();  // Only allow letters and uppercase
    setNameOnCard(value);
  };

  // Coupon and order handling (unchanged)
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (total - (total * (discount / 100))).toFixed(2);
  };

  const applyCoupon = () => {
    if (validCoupons[couponCode]) {
      setDiscount(validCoupons[couponCode]);
      alert(`Coupon applied! You got ${validCoupons[couponCode]}% off.`);
    } else {
      alert('Invalid coupon code.');
      setDiscount(0);
    }
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout-page">
      <h1>Order Checkout</h1>
      <div className="checkout-container">
        <div className="cart-summary">
          <h2>Your Order</h2>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total: </strong> ${calculateTotal()}
          </div>
        </div>

        <div className="coupon-section">
          <h2>Coupon Code</h2>
          <input 
            type="text" 
            value={couponCode} 
            onChange={(e) => setCouponCode(e.target.value)} 
            placeholder="Enter coupon code"
          />
          <button onClick={applyCoupon} className="apply-coupon-button">Apply Coupon</button>
        </div>

        <div className="checkout-details">
          <h2>Payment Method</h2>
          <div className="payment-method">
            <label className={`payment-option ${paymentMethod === 'CreditCard' ? 'active' : ''}`}>
              <input 
                type="radio" 
                value="CreditCard" 
                checked={paymentMethod === 'CreditCard'} 
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              Credit or debit card
              <div className="credit-card-info">
                <input
                  type="text"
                  placeholder="Card number"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  maxLength="16"
                  className="card-input"
                />
                <input
                  type="text"
                  placeholder="Expiration date (MM / YY)"
                  value={expirationDate}
                  onChange={handleExpirationDateChange}
                  maxLength="5"
                  className="card-input"
                  disabled={cardNumber.length !== 16}  // Enable when card number is valid
                />
                <input
                  type="text"
                  placeholder="Security code"
                  value={securityCode}
                  onChange={handleSecurityCodeChange}
                  maxLength="3"
                  className="card-input"
                />
                <input
                  type="text"
                  placeholder="Name on card"
                  value={nameOnCard}
                  onChange={handleNameOnCardChange}
                  className="card-input"
                />
              </div>
            </label>
            <label className={`payment-option ${paymentMethod === 'PayPal' ? 'active' : ''}`}>
              <input 
                type="radio" 
                value="PayPal" 
                checked={paymentMethod === 'PayPal'} 
                onChange={(e) => setPaymentMethod(e.target.value)} 
              />
              PayPal
              {paymentMethod === 'PayPal' && (
                <div className="paypal-info">
                  <p>After clicking "Pay with PayPal", you will be redirected to PayPal to complete your purchase.</p>
                </div>
              )}
            </label>
          </div>

          <button onClick={handlePlaceOrder} className="place-order-button">
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
