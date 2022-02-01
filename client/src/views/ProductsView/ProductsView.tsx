import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';

import { AxiosResponse } from 'axios';
import { Category, Article } from '../../types';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
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
  const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState<boolean>(true);

  const fetchCategories = async () => {
    try {
      const fetchedCategories: AxiosResponse<any, any> = await getCategories(
        JSON.stringify({
          query: getCategoriesQuery,
        }),
      );
      setCategories(fetchedCategories.data.data.categories);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const articles = categories.map((category: Category) => {
    return category.categoryArticles.articles.map((article: Article) => {
      return <ArticleCard article={article} />;
    });
  });

  return (
    <React.Fragment>
      {!loading ? (
        <div className='page'>
          <NavigationBar />
          <BreadCrumb categories={categories} />
          <div className='main'>
            <SideBar categories={categories} />
            <ProductList categories={categories} />
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
}
