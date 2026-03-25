import axios from 'axios';
const BASE_URL = 'https://fakestoreapi.com';
export const api = {
    getProducts: async (category = 'all', sort = 'asc') => {
        const path = category === 'all' ? '/products' : `/products/category/${category}`;
        const response = await axios.get(`${BASE_URL}${path}`, {
            params: { sort }
        });
        return response.data;
    },
    getCategories: async () => {
        const response = await axios.get(`${BASE_URL}/products/categories`);
        return response.data;
    },
    getProductById: async (id) => {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        return response.data;
    }
};
