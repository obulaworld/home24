import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import _ from 'lodash';
import { AxiosResponse } from 'axios';
import { Category, Article, SORT_TYPE } from '../../types';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import ProductList from '../../components/ProductList/ProductList';
import { getCategoriesQuery } from '../../queries';
import { getCategories } from '../../services';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import './ProductsView.css';

export default function ProductsView() {
  const [categories, setCategories]: [
    Category[],
    Dispatch<SetStateAction<Category[]>>,
  ] = useState<Category[]>([]);

  const [articles, setArticles]: [
    Article[],
    Dispatch<SetStateAction<Article[]>>,
  ] = useState<Article[]>([]);

  const [copyArticles, setCopyArticles]: [
    Article[],
    Dispatch<SetStateAction<Article[]>>,
  ] = useState<Article[]>([]);

  const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState<boolean>(true);

  const [sortType, setSortType]: [
    SORT_TYPE | null,
    Dispatch<SetStateAction<SORT_TYPE | null>>,
  ] = useState<SORT_TYPE | null>(null);

  useEffect(() => {
    if (sortType === SORT_TYPE.ALPHABETICALLY) {
      const newArticles = _.cloneDeep(articles).sort(
        (a: Article, b: Article) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        },
      );
      setArticles(newArticles);
    } else if (sortType === SORT_TYPE.HIGH_TO_LOW) {
      const newArticles = _.cloneDeep(articles).sort(
        (a: Article, b: Article) =>
          Number(b.prices.regular.value) - Number(a.prices.regular.value),
      );
      setArticles(newArticles);
    } else if (sortType === SORT_TYPE.LOW_TO_HIGH) {
      const newArticles = _.cloneDeep(articles).sort(
        (a: Article, b: Article) =>
          Number(a.prices.regular.value) - Number(b.prices.regular.value),
      );
      setArticles(newArticles);
    }
  }, [sortType]);

  const fetchCategories = async () => {
    try {
      const fetchedCategories: AxiosResponse<any, any> = await getCategories(
        JSON.stringify({
          query: getCategoriesQuery,
        }),
      );
      setCategories(fetchedCategories.data.data.categories);
      setArticles(
        fetchedCategories.data.data.categories[0]?.categoryArticles.articles,
      );
      setCopyArticles(
        fetchedCategories.data.data.categories[0]?.categoryArticles.articles,
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <React.Fragment>
      {!loading ? (
        <div className='page'>
          <NavigationBar
            copyArticles={copyArticles}
            setArticles={setArticles}
            setSortType={setSortType}
          />
          <BreadCrumb
            setSortType={setSortType}
            sortType={sortType}
            categories={categories}
          />
          <div className='main'>
            <SideBar categories={categories} />
            <ProductList articles={articles} />
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
}
