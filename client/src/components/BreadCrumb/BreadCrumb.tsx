import React, { Dispatch, SetStateAction } from 'react';
import { Category, SORT_TYPE } from '../../types';

import Header from '../Header/Header';
import './BreadCrumb.css';

interface IBreadCrumbProps {
  categories: Category[];
  sortType: SORT_TYPE | null;
  setSortType: Dispatch<SetStateAction<SORT_TYPE | null>>;
}

const BreadCrumb = ({
  categories,
  sortType,
  setSortType,
}: IBreadCrumbProps) => {
  const currentCategory = categories[0]?.childrenCategories?.find((category) =>
    window.location.pathname.includes(category.name.toLowerCase()),
  );
  return (
    <div className='breadcrumb'>
      <div className='breadCrumbHeaderContainer'>
        <div className='breadCrumbLocation'>
          <div>
            <span className='breadCrumbLocationText'>Heimat</span>
            <span data-testid='test-mobel'>
              {currentCategory ? currentCategory.name : 'Möbel'}
            </span>
          </div>
          <span className='breadCrumbLocationResult'>
            {categories[0]?.articleCount} items
          </span>
        </div>
        {categories.length ? (
          <Header
            sortType={sortType}
            setSortType={setSortType}
            categories={categories}
          />
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  );
};

export default BreadCrumb;
