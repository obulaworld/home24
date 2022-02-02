export type Category = {
  name: string
  categoryArticles: CategoryArticle
  articleCount: number
  childrenCategories: ChildCategory[]
}

export type Article = {
  name:  string
  variantName: string
  prices: Prices
  images: Image[]
}

export enum SORT_TYPE {
  ALPHABETICALLY = 0,
  HIGH_TO_LOW = 1,
  LOW_TO_HIGH = 2,
}

export type ChildCategory = {
  name: string
  urlPath: string
}

export type Prices = {
  currency: string
  regular: {
    value: number
  }
}

export type Image = {
  path: string
}

export type CategoryArticle = {
  articles: Article[]
}
