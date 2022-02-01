import React from 'react';
import { Category } from '../../types';
import './Header.css';

interface IHeaderProps {
  categories: Category[];
}

const Header = ({ categories }: IHeaderProps) => {
  const currentCategory = categories[0]?.childrenCategories?.find((category) =>
    window.location.pathname.includes(category.name.toLowerCase()),
  );
  return (
    <div className='breadCrumbheadeContainer'>
      <div>
        <span className='breadCrumbheaderText'>
          {currentCategory ? currentCategory.name : 'Möbel'}
        </span>
      </div>
      <div className='breadCrumbSorterContainer'>
        <div className='breadCrumbSorterText'>Sortiere nach:</div>
        <div className='breadCrumbSorter'>Relevanz</div>
        <div className='breadCrumbSorter'>Preis - Hoch zu Niedrig</div>
        <div className='breadCrumbSorter'>Preis - Niedrig zu Hoch</div>
      </div>
    </div>
  );
};

export default Header;
