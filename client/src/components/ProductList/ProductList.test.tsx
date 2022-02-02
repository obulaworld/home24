import React from 'react';
import { render } from '@testing-library/react';
import { getCategories } from '../../utils/test-utils';
import ProductList from './ProductList';

test('renders the ProductList', () => {
  const { getByText } = render(<ProductList articles={getCategories()[0]?.categoryArticles.articles} />);
  expect(getByText('Premium Komfortmatratze Smood')).toBeInTheDocument();
  expect(getByText('Schlafsofa Latina')).toBeInTheDocument();
});
