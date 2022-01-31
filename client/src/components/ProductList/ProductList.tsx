import React from 'react';

import { Category, Article } from '../../types';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Header from '../../components/Header/Header';
import './ProductList.css';

interface IProductListProps {
  categories: Category[];
}

export default function ProductList({ categories }: IProductListProps) {
  const articles = categories.map((category: Category) => {
    return category.categoryArticles.articles.map((article: Article) => {
      return <ArticleCard article={article} />;
    });
  });

  return (
    <div className='content'>
      {categories.length ? <Header categories={categories} /> : 'Loading...'}
      <div className='articles'>{articles}</div>
    </div>
  );
}
