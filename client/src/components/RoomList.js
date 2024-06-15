import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import ImageSlider from './ImageSlider';
import './RoomList.css';

const RoomList = ({ rooms, checkInDate, checkOutDate }) => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = (room) => {
    navigate('/payment', { state: { room, checkInDate, checkOutDate } });
  };

  const handleMoreView = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null);
  };

  return (
    <div className="room-list">
      {rooms.map(room => (
        <div key={room.id} className="room-card">
          <img src={room.image} alt={room.name} className="room-image" />
          <div className="room-info">
            <div className="room-details">
              <h2>{room.name}</h2>
              <p>{room.description}</p>
              <p>Price: ${room.price} per night</p>
              <button 
                onClick={() => handleMoreView(room)} 
                className="more-view-button"
              >
                More View
              </button>
            </div>
            <div className="room-select">
              <button 
                onClick={() => handleSelect(room)} 
                className="select-button"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedRoom && <ImageSlider images={selectedRoom.images} />}
      </Modal>
    </div>
  );
};

export default RoomList;
