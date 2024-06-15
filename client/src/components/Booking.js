import React, { useState } from 'react';
import RoomList from './RoomList';
import rooms from '../data/rooms';
import './Booking.css'; // Import the CSS file for styling

const Booking = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [availableRooms, setAvailableRooms] = useState([]);

  const handleSearch = () => {
    // Logic to filter available rooms based on the check-in and check-out dates
    // Here, we're assuming all rooms are available for simplicity
    setAvailableRooms(rooms);
  };

  return (
    <div className="booking-container">
      <h1>Book Your Stay</h1>
      <div className="date-selection">
        <label>
          Check-in Date:
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </label>
        <label>
          Check-out Date:
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSearch} className="search-button">Search</button>
      
      {availableRooms.length > 0 && (
        <div className="available-rooms">
          <h2>Available Rooms</h2>
          <RoomList rooms={availableRooms} checkInDate={checkInDate} checkOutDate={checkOutDate} />
        </div>
      )}
    </div>
  );
};

export default Booking;
