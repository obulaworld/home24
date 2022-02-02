import React, { Dispatch, SetStateAction } from 'react';
import { Category, SORT_TYPE } from '../../types';
import './Header.css';

interface IHeaderProps {
  categories: Category[];
  sortType: SORT_TYPE | null;
  setSortType: Dispatch<SetStateAction<SORT_TYPE | null>>;
}

const Header = ({ categories, sortType, setSortType }: IHeaderProps) => {
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
        <div
          onClick={() => setSortType(SORT_TYPE.ALPHABETICALLY)}
          className={`breadCrumbSorter ${
            sortType === SORT_TYPE.ALPHABETICALLY ? 'breadCrumbSorterActive' : ''
          }`}
        >
          Alphabetisch
        </div>
        <div
          onClick={() => setSortType(SORT_TYPE.HIGH_TO_LOW)}
          className={`breadCrumbSorter ${
            sortType === SORT_TYPE.HIGH_TO_LOW ? 'breadCrumbSorterActive' : ''
          }`}
        >
          Preis - Hoch zu Niedrig
        </div>
        <div
          onClick={() => setSortType(SORT_TYPE.LOW_TO_HIGH)}
          className={`breadCrumbSorter ${
            sortType === SORT_TYPE.LOW_TO_HIGH ? 'breadCrumbSorterActive' : ''
          }`}
        >
          Preis - Niedrig zu Hoch
        </div>
      </div>
    </div>
  );
};

export default Header;
