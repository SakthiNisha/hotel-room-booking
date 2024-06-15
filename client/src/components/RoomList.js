import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoomList.css';

const RoomList = ({ rooms, checkInDate, checkOutDate }) => {
  const navigate = useNavigate();

  const handleAddToBag = (room) => {
    navigate('/payment', { state: { room, checkInDate, checkOutDate } });
  };

  return (
    <div className="room-list">
      {rooms.map(room => (
        <div key={room.id} className="room-card">
          <img src={room.image} alt={room.name} className="room-image" />
          <div className="room-info">
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p>Price: ${room.price} per night</p>
            <button 
              onClick={() => handleAddToBag(room)} 
              className="add-to-bag-button"
            >
              Add to Bag
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
