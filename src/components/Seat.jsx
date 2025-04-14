// Seat.js
import React from 'react';
import './Seat.css';

const Seat = ({ seatNumber, status, onClick }) => {
  const handleClick = () => {
    onClick(seatNumber); // pass seat number when clicked
  };

  return (
    <div
      className={`seat ${status}`}
      onClick={handleClick}
    >
      {seatNumber}
    </div>
  );
};

export default Seat;
