import { render, screen } from '@testing-library/react';
import React from 'react';
import { getCategories } from '../../utils/test-utils';
import Header from './Header';

test('renders header component', () => {
  render(<Header categories={getCategories()} />);
  expect(screen.getByText('Sortiere nach:')).toBeInTheDocument();
  expect(screen.getByText('Möbel')).toBeInTheDocument();
  expect(screen.getByText('Relevanz')).toBeInTheDocument();
  expect(screen.getByText('Preis - Hoch zu Niedrig')).toBeInTheDocument();
  expect(screen.getByText('Preis - Niedrig zu Hoch')).toBeInTheDocument();
});
