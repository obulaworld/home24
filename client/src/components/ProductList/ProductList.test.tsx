import React from 'react';
import { render } from '@testing-library/react';
import ProductList from '../../views/ProductsView/ProductsView';

test('renders the ProductList', () => {
  const { getByText } = render(<ProductList />);
  const linkElement = getByText(/home24/i);
  expect(linkElement).toBeInTheDocument();
});
