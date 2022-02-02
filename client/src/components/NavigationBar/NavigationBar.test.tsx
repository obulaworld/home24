import { render, screen } from '@testing-library/react';
import React from 'react';
import NavigationBar from './NavigationBar';

test('renders navigation bar component', () => {
  render(<NavigationBar />);
  expect(screen.getByText('Go')).toBeInTheDocument();
  expect(screen.getByTestId('test-logo')).toBeInTheDocument();
  expect(screen.getByTestId('test-search-input')).toBeInTheDocument();
});
