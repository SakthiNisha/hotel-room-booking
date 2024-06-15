import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderCompletion.css';

const OrderCompletion = () => {
  const location = useLocation();
  const { room, customer, checkInDate, checkOutDate } = location.state || {}; // Destructure the additional dates

  return (
    <div className="order-completion-container">
      <h1>Order Confirmation</h1>
      <p>Thank you for your booking!</p>
      <h2>Order Details</h2>
      {room && (
        <>
          <p>Room Type: {room.name}</p>
          <p>Price: ${room.price} per night</p>
          <p>Check-in Date: {checkInDate}</p>
          <p>Check-out Date: {checkOutDate}</p>
        </>
      )}
      {customer && (
        <>
          <h3>Customer Details</h3>
          <p>Name: {customer.name}</p>
          <p>Address: {customer.address}</p>
          <p>City: {customer.city}</p>
          <p>State: {customer.state}</p>
          <p>Zip Code: {customer.zip}</p>
        </>
      )}
    </div>
  );
};

export default OrderCompletion;
