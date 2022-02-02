import { render, screen } from '@testing-library/react';
import React from 'react';
import { getCategories } from '../../utils/test-utils';
import { SORT_TYPE } from '../../types';
import Header from './Header';

const setSortType = jest.fn();

test('renders header component', () => {
  render(
    <Header
      sortType={SORT_TYPE.ALPHABETICALLY}
      setSortType={setSortType}
      categories={getCategories()}
    />,
  );
  expect(screen.getByText('Sortiere nach:')).toBeInTheDocument();
  expect(screen.getByText('Möbel')).toBeInTheDocument();
  expect(screen.getByText('Alphabetisch')).toBeInTheDocument();
  expect(screen.getByText('Preis - Hoch zu Niedrig')).toBeInTheDocument();
  expect(screen.getByText('Preis - Niedrig zu Hoch')).toBeInTheDocument();
});
