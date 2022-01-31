import React from 'react';
import { Category } from '../../types';

interface IHeaderProps {
  categories: Category[];
}

const Header = ({ categories }: IHeaderProps) => {
  return (
    <h1>
      {categories[0].name}
      <small> ({categories[0].articleCount} items)</small>
    </h1>
  );
};

export default Header;
