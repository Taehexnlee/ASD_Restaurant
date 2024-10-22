import React, { useState } from 'react';
import './OrderHistoryPage.css';
const OrderHistoryPage = () => {
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 101,
      date: '2024-09-15',
      total: 45.97,
      items: [
        { name: 'Pepperoni Pizza', quantity: 1 },
        { name: 'Garlic Bread', quantity: 1 },
        { name: 'Coke', quantity: 2 },
      ],
    },
    {
      id: 102,
      date: '2024-10-01',
      total: 30.48,
      items: [
        { name: 'Cheeseburger', quantity: 2 },
        { name: 'Fries', quantity: 1 },
        { name: 'Lemonade', quantity: 1 },
      ],
    },
  ]);

  const handleReorder = (orderId) => {
    alert(`Reordered items from Order #${orderId}`);
  };

  return (
    <div className="order-history-page">
      <h1>Order History</h1>
      <div className="order-history-container">
        {orderHistory.map(order => (
          <div key={order.id} className="order-card">
            <h2>Order #{order.id}</h2>
            <p>Date: {order.date}</p>
            <p>Total: ${order.total.toFixed(2)}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>{item.name} x {item.quantity}</li>
              ))}
            </ul>
            <button onClick={() => handleReorder(order.id)} className="reorder-button">
              Reorder
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistoryPage;