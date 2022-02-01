import React from 'react';

import SideBarMenu from './SideBarMenu';
import { Category } from '../../types';
import './SideBar.css';

interface ISideBarProps {
  categories: Category[];
}

const SideBar = ({ categories }: ISideBarProps) => {
  return (
    <div className='sidebar'>
      <h3 className='sidbarHeader'>Kategorien</h3>
      {categories.length ? (
        <ul>
          {categories[0].childrenCategories.map(({ name, urlPath }, index) => {
            return <SideBarMenu key={index} name={name} urlPath={urlPath} />;
          })}
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default SideBar;
