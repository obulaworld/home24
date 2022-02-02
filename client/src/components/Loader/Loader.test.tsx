import { render, screen } from '@testing-library/react';
import React from 'react';
import Loader from './Loader';

test('renders loader component', () => {
  render(<Loader />);
  expect(screen.getByTestId('test-loader')).toBeInTheDocument();
});
