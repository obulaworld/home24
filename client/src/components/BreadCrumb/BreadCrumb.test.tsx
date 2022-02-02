import { render, screen } from '@testing-library/react';
import React from 'react';
import { getCategories } from '../../utils/test-utils';
import { SORT_TYPE } from '../../types';
import BreadCrumb from './BreadCrumb';

const setSortType = jest.fn();

test('renders breadcrumb component', () => {
  render(
    <BreadCrumb
      sortType={SORT_TYPE.ALPHABETICALLY}
      setSortType={setSortType}
      categories={getCategories()}
    />,
  );
  expect(screen.getByText('Heimat')).toBeInTheDocument();
  expect(screen.getByText('76567 items')).toBeInTheDocument();
  expect(screen.getByTestId('test-mobel')).toBeInTheDocument();
});
