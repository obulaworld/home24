import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';

import { AxiosResponse } from 'axios';
import { Category, Article } from '../../types';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SideBar from '../../components/SideBar/SideBar';
import Footer from '../../components/Footer/Footer';
import ProductList from '../../components/ProductList/ProductList';
import { getCategoriesQuery } from '../../queries';
import { getCategories } from '../../services';

export default function ProductsView() {
  const [categories, setCategories]: [
    Category[],
    Dispatch<SetStateAction<Category[]>>,
  ] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const fetchedCategories: AxiosResponse<any, any> = await getCategories(
        JSON.stringify({
          query: getCategoriesQuery,
        }),
      );
      setCategories(fetchedCategories.data.data.categories);
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
    <div className='page'>
      <NavigationBar />
      <SideBar categories={categories} />
      <ProductList categories={categories} />
      <Footer />
    </div>
  );
}
