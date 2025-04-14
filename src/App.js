import React, { useState } from 'react';
import SeatGrid from './components/SeatGrid';
import BookingForm from './components/BookingForm';
import './App.css';

const App = () => {
  const initializeSeats = () => {
    const seats = [];
    for (let i = 1; i <= 80; i++) {
      seats.push({ number: i, status: 'available' });
    }
    return seats;
  };

  const [seats, setSeats] = useState(initializeSeats());

  const bookSeats = (count) => {
    const updatedSeats = [...seats];
    const available = updatedSeats.filter(s => s.status === 'available');

    if (available.length < count) {
      alert('Not enough seats available');
      return;
    }

    let booked = false;
    for (let i = 0; i <= 77 - count + 1; i++) {
      const rowStart = Math.floor((updatedSeats[i].number - 1) / 7) * 7;
      const rowSeats = updatedSeats.slice(rowStart, rowStart + 7);
      const freeInRow = rowSeats.filter(s => s.status === 'available');

      if (freeInRow.length >= count) {
        let bookedCount = 0;
        for (let j = rowStart; j < rowStart + 7 && bookedCount < count; j++) {
          if (updatedSeats[j].status === 'available') {
            updatedSeats[j].status = 'booked';
            bookedCount++;
          }
        }
        booked = true;
        break;
      }
    }

    if (!booked) {
      let bookedCount = 0;
      for (let i = 0; i < updatedSeats.length && bookedCount < count; i++) {
        if (updatedSeats[i].status === 'available') {
          updatedSeats[i].status = 'booked';
          bookedCount++;
        }
      }
    }

    setSeats(updatedSeats);
  };

  const resetSeats = () => {
    setSeats(initializeSeats());
  };

  return (
    <div className="app">
      <h1>Ticket Booking</h1>
      <div className="main">
        <SeatGrid seats={seats} handleSeatClick={() => {}} />
        <div className="sidebar">
          <BookingForm bookSeats={bookSeats} />
          <button className="reset-btn" onClick={resetSeats}>Reset Booking</button>
          <div className="stats">
            <span>Booked Seats = {seats.filter(s => s.status === 'booked').length}</span>
            <span>Available Seats = {seats.filter(s => s.status === 'available').length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
