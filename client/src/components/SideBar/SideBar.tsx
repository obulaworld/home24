import React from 'react';

import SideBarMenu from './SideBarMenu';
import { Category } from '../../types';

interface ISideBarProps {
  categories: Category[];
}

const SideBar = ({ categories }: ISideBarProps) => {
  return (
    <div className='sidebar'>
      <h3>Kategorien</h3>
      {categories.length ? (
        <ul>
          {categories[0].childrenCategories.map(({ name, urlPath }) => {
            return <SideBarMenu name={name} urlPath={urlPath} />;
          })}
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default SideBar;
