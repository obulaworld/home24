export const getCategoriesQuery: string = `{
    categories(ids: "156126", locale: de_DE) {
      name
      articleCount
      childrenCategories {
        name
        urlPath
      }
      categoryArticles(first: 50) {
        articles {
          name
          variantName
          prices {
            currency
            regular {
              value
            }
          }
          images(
            format: WEBP
            maxWidth: 200
            maxHeight: 200
            limit: 1
          ) {
            path
          }
        }
      }
    }
  }`;
