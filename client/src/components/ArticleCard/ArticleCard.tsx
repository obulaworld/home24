import React from 'react';
import { Article } from '../../types';
import { formatter } from '../../utils/utils';
import SaveLogo from '../../assets/images/save.svg';
import './ArticleCard.css';

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className='article'>
      <div className='articleIconsContainer'>
        <img src={SaveLogo} />
      </div>
      <div className='articleImageContainer'>
        <img src={article.images[0].path} />
      </div>
      <div className='articleName'>
        <h3>{article.name}</h3>
      </div>
      <div className='articlePrice'>
        <span>{formatter.format(article.prices.regular.value / 100)}</span>
      </div>
      <div className='addToCartButtonContainer'>
        <button className='addToCartButton'>Add to cart</button>
      </div>
    </div>
  );
};

export default ArticleCard;
