import React from 'react';

import { Article } from '../../types';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import './ProductList.css';

interface IProductListProps {
  articles: Article[];
}

export default function ProductList({ articles }: IProductListProps) {
  const articlesList = articles.map((article: Article, index: number) => {
    return <ArticleCard key={index} article={article} />;
  });

  return (
    <div className='content'>
      <div className='articles'>{articlesList}</div>
    </div>
  );
}
