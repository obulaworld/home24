import React, { Dispatch, SetStateAction } from 'react';
import _ from 'lodash';
import Home24Logo from '../../assets/images/home-24-logo.svg';
import { Article, SORT_TYPE } from '../../types';
import './NavigationBar.css';

interface INavigationBarProps {
  copyArticles: Article[];
  setArticles: Dispatch<SetStateAction<Article[]>>;
  setSortType: Dispatch<SetStateAction<SORT_TYPE | null>>;
}

const NavigationBar = ({ copyArticles, setArticles, setSortType }: INavigationBarProps) => {
  const searchArticle = (value: string) => {
    setSortType(null);
    let newArticles = _.cloneDeep(copyArticles);
    if (value && value.trim() !== '') {
      let filteredArticles = newArticles.filter((article: Article) => {
        return (
          article.name &&
          article.name.toLowerCase().includes(value.toLowerCase())
        );
      });
      setArticles(filteredArticles);
    } else {
      let filteredArticles = newArticles.filter((article: Article) => {
        return article.name;
      });
      setArticles(filteredArticles);
    }
  };

  return (
    <div className='navBar'>
      <div className='navBarContent'>
        <div className='logoContainer'>
          <a href='/'>
            <img data-testid='test-logo' src={Home24Logo} alt='home24 logo' />
          </a>
        </div>
        <div className='searchContainer' data-testid='search-container'>
          <input
            onChange={(e) => searchArticle(e.target.value)}
            data-testid='test-search-input'
            className='searchInput'
            placeholder='Search for products, brands and categories...'
          />
          <button className='searchButton'>Go</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
