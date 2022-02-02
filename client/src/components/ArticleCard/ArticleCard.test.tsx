
import { render, screen } from '@testing-library/react';
import React from 'react';
import { getCategories } from '../../utils/test-utils';
import ArticleCard from './ArticleCard';

test('renders article card component', () => {
  render(<ArticleCard article={getCategories()[0].categoryArticles.articles[0]} />);
  expect(screen.getByText('Premium Komfortmatratze Smood')).toBeInTheDocument();
  expect(screen.getByText('Add to cart')).toBeInTheDocument();
});