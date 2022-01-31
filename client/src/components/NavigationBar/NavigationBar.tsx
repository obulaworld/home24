import React from 'react';

import Home24Logo from '../../assets/images/home-24-logo.svg';

const NavigationBar = () => {
  return (
    <div className='header'>
      <div className='logoContainer'>
        <img src={Home24Logo} alt='home24 logo' />
      </div>
      <input placeholder='Search' />
    </div>
  );
};

export default NavigationBar;
