import { render, screen } from '@testing-library/react';
import React from 'react';
import { Article } from '../../types';
import NavigationBar from './NavigationBar';

const copyArticles: Article[] = [];
const setArticles = jest.fn();
const setSortType = jest.fn();

test('renders navigation bar component', () => {
  render(
    <NavigationBar
      setSortType={setSortType}
      copyArticles={copyArticles}
      setArticles={setArticles}
    />,
  );
  expect(screen.getByText('Go')).toBeInTheDocument();
  expect(screen.getByTestId('test-logo')).toBeInTheDocument();
  expect(screen.getByTestId('test-search-input')).toBeInTheDocument();
});
