import React from 'react';
import { Category } from '../../types';

import Header from '../Header/Header';
import './BreadCrumb.css';

interface IBreadCrumbProps {
  categories: Category[];
}

const BreadCrumb = ({ categories }: IBreadCrumbProps) => {
  const currentCategory = categories[0]?.childrenCategories?.find((category) =>
    window.location.pathname.includes(category.name.toLowerCase()),
  );
  return (
    <div className='breadcrumb'>
      <div className='breadCrumbHeaderContainer'>
        <div className='breadCrumbLocation'>
          <div>
            <span className='breadCrumbLocationText'>Heimat</span>
            <span>{currentCategory ? currentCategory.name : 'Möbel'}</span>
          </div>
          <span className='breadCrumbLocationResult'>
            {categories[0]?.articleCount} items
          </span>
        </div>
        {categories.length ? <Header categories={categories} /> : 'Loading...'}
      </div>
    </div>
  );
};

export default BreadCrumb;
