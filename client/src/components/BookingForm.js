import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import rooms from '../data/rooms';

const BookingForm = () => {
  const { id } = useParams();
  const room = rooms.find(r => r.id === parseInt(id));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} in room ${room.name}`);
  };

  return (
    <div>
      <h1>Book Room: {room.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
