import { AxiosAdapter } from './http/axios.adapter';

export const movieFecher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie', params: {
    api_key: '8c7779cf3d708a3be638035baa7081a5',
    language: 'es',
  },
});
