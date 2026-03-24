import axios from 'axios';
import type { Product } from './types';

const BASE_URL = 'https://fakestoreapi.com';

export const api = {
  getProducts: async (category: string = 'all', sort: string = 'asc'): Promise<Product[]> => {
    const path = category === 'all' ? '/products' : `/products/category/${category}`;
    
    const response = await axios.get(`${BASE_URL}${path}`, {
      params: { sort } 
    });
    
    return response.data;
  },

  getCategories: async (): Promise<string[]> => {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  },

  getProductById: async (id: string): Promise<Product> => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  }
};