import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room, checkInDate, checkOutDate } = location.state;
  const totalPrice = room.price; // Calculate total price if needed

  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = {
      name: e.target.name.value,
      address: e.target.address.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zip: e.target.zip.value,
    };
    navigate('/order-completion', { state: { room, customer, checkInDate, checkOutDate } });
  };

  return (
    <div className="payment-container">
      <div className="payment-form">
        <h2>Customer Address Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
          <label>
            City:
            <input type="text" name="city" required />
          </label>
          <label>
            State:
            <input type="text" name="state" required />
          </label>
          <label>
            Zip Code:
            <input type="text" name="zip" required />
          </label>
          <h2>Payment Method</h2>
          <label>
            Card Number:
            <input type="text" name="cardNumber" required />
          </label>
          <label>
            Expiration Date:
            <input type="month" name="expiryDate" required />
          </label>
          <label>
            CVV:
            <input type="text" name="cvv" required />
          </label>
          <button type="submit" className="payment-button">Proceed to Payment</button>
        </form>
      </div>
      <div className="checkout-details">
        <h2>Checkout Details</h2>
        <p>Room Type: {room.name}</p>
        <p>Price: ${room.price} per night</p>
        <p>Check-in Date: {checkInDate}</p>
        <p>Check-out Date: {checkOutDate}</p>
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default Payment;
