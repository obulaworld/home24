import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import './Loader.css';

const Loader = () => {
  return (
    <div className='loader'>
      <BeatLoader size={15} color='#f45334' css='margin-right: 1rem' />
    </div>
  );
};

export default Loader;
