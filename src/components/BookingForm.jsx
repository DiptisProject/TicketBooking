import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ bookSeats }) => {
  const [seatCount, setSeatCount] = useState('');

  const handleBook = () => {
    const num = parseInt(seatCount);
    if (!isNaN(num) && num > 0 && num <= 7) {
      bookSeats(num);
      setSeatCount('');
    }
  };

  return (
    <div className="booking-form">
      <input
        type="number"
        value={seatCount}
        placeholder="Enter number of seats"
        onChange={(e) => setSeatCount(e.target.value)}
        min="1"
        max="100"
      />
      <button onClick={handleBook}>Book</button>
    </div>
  );
};

export default BookingForm;
