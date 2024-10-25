import React from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom'; // Hook for navigation

export default function CartPage() {
  const { cart, updateCartItemQuantity, removeFromCart } = useUser();
  const navigate = useNavigate(); // Hook for navigating between pages

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Calculate the total quantity
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleQuantityChange = (productId, quantity) => {
    updateCartItemQuantity(productId, quantity);
  };

  // Navigate to CheckoutPage on button click
  const handleProcessClick = () => {
    navigate('/checkout'); // Navigate to the checkout page
  };

  return (
    <div className="container my-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map((product) => (
              <li className="list-group-item" key={product.id}>
                <h5>{product.name}</h5>
                <p><strong>Price:</strong> ${product.price}</p>
                <div className="d-flex align-items-center">
                  <label htmlFor={`quantity-${product.id}`} className="me-2"><strong>Quantity:</strong></label>
                  <input
                    type="number"
                    id={`quantity-${product.id}`}
                    value={product.quantity}
                    min="1"
                    className="form-control w-25"
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                  />
                </div>
                <p className="mt-2"><strong>Subtotal:</strong> ${product.price * product.quantity}</p>
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4>Total Quantity: {totalQuantity}</h4>
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
      )}

      {/* Process Button: Navigate to Checkout Page */}
      <div className="text-end mt-4">
        <button className="btn btn-primary" onClick={handleProcessClick}>
          Process
        </button>
      </div>
    </div>
  );
}
