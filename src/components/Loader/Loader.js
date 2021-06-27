import React from 'react';
import { CircleLoader } from 'react-spinners';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <CircleLoader color={'#683d83'} size={150} />
    </div>
  );
};

export default Loader;
