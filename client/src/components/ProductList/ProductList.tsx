import React from 'react';

import { Category, Article } from '../../types';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import './ProductList.css';

interface IProductListProps {
  categories: Category[];
}

export default function ProductList({ categories }: IProductListProps) {
  const articles = categories.map((category: Category) => {
    return category.categoryArticles.articles.map((article: Article, index: number) => {
      return <ArticleCard key={index} article={article} />;
    });
  });

  return (
    <div className='content'>
      <div className='articles'>{articles}</div>
    </div>
  );
}
