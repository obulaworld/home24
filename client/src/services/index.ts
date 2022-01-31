import axios from 'axios';

export const getCategories = (query: string) =>
  axios.post(
    '/graphql',
    query,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
