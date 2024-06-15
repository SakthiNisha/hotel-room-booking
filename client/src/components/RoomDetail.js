import React from 'react';
import { useParams, Link } from 'react-router-dom';
import rooms from '../data/rooms';

const RoomDetail = () => {
  const { id } = useParams();
  const room = rooms.find(r => r.id === parseInt(id));

  if (!room) {
    return <h2>Room not found</h2>;
  }

  return (
    <div>
      <h1>{room.name}</h1>
      <p>{room.description}</p>
      <p>Price: ${room.price}</p>
      <Link to={`/booking/${room.id}`}>Book this room</Link>
    </div>
  );
};

export default RoomDetail;
