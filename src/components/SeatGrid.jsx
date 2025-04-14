import React from 'react';
import Seat from './Seat';
import './SeatGrid.css';

const SeatGrid = ({ seats, handleSeatClick }) => {
  return (
    <div className="seat-grid">
      {seats.map((seat, index) => (
        <Seat
          key={index}
          seatNumber={seat.number}
          status={seat.status}
          onClick={handleSeatClick}
        />
      ))}
    </div>
  );
};

export default SeatGrid;
