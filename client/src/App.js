import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RoomList from './components/RoomList';
import RoomDetail from './components/RoomDetail';
import Booking from './components/Booking';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Payment from './components/Payment';
import OrderCompletion from './components/OrderCompletion';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<RoomList rooms={[]} />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/:id" element={<BookingForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-completion" element={<OrderCompletion />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
