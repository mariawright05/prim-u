import React from 'react';
import { useState } from 'react';
import './ProgressBar.css';

function ProgressBar({ items, prev, next, position }) {
  return (
    <div className="slider__container">
      <button
        className="slider__button_back"
        disabled={position === 0}
        onClick={prev}
      ></button>
      <div className="slider__main-line">
        <div
          className="slider__progress-line"
          style={{
            width: 100 / items + '%',
            marginLeft: (100 / items) * position + '%',
          }}
        ></div>
      </div>
      <button
        className="slider__button_forward"
        onClick={next}
        disabled={position === items - 1}
      ></button>
    </div>
  );
}
export default ProgressBar;
