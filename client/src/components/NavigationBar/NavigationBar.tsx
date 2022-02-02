import React from 'react';

import Home24Logo from '../../assets/images/home-24-logo.svg';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className='navBar'>
      <div className='navBarContent'>
        <div className='logoContainer'>
          <img data-testid='test-logo' src={Home24Logo} alt='home24 logo' />
        </div>
        <div className='searchContainer' data-testid='search-container'>
          <input data-testid='test-search-input' className='searchInput' placeholder='Search for products, brands and categories...' />
          <button className='searchButton'>Go</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
