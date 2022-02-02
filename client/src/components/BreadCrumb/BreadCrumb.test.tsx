import { render, screen } from '@testing-library/react';
import React from 'react';
import { getCategories } from '../../utils/test-utils';
import BreadCrumb from './BreadCrumb';

test('renders breadcrumb component', () => {
  render(<BreadCrumb categories={getCategories()} />);
  expect(screen.getByText('Heimat')).toBeInTheDocument();
  expect(screen.getByText('76567 items')).toBeInTheDocument();
  expect(screen.getByTestId('test-mobel')).toBeInTheDocument();
});
