// CandySquare.js
import React from 'react';

const CandySquare = ({ candyColor, index, onDragStart, onDragOver, onDragEnter, onDragLeave, onDrop, onDragEnd }) => {
  return (
    <img
      src={candyColor}
      alt={candyColor}
      data-id={index}
      draggable={true}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
    />
  );
};

export default CandySquare;
