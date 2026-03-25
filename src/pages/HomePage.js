import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { api } from '../api';
import './HomePage.css';
const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        const sortParam = searchParams.get('sort') || 'asc';
        const loadProducts = async () => {
            setLoading(true);
            try {
                let data = [];
                if (!categoryParam || categoryParam === 'all') {
                    data = await api.getProducts();
                }
                else {
                    const selectedCategories = categoryParam.split(',');
                    const promises = selectedCategories.map(cat => fetch(`https://fakestoreapi.com/products/category/${cat}`).then(res => res.json()));
                    const results = await Promise.all(promises);
                    data = results.flat();
                }
                data.sort((a, b) => {
                    return sortParam === 'asc' ? a.price - b.price : b.price - a.price;
                });
                setProducts(data);
            }
            catch (error) {
                console.error("Failed to load products:", error);
            }
            finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, [searchParams]);
    if (loading)
        return _jsx("div", { className: "loader", children: "Updating Gallery..." });
    return (_jsx("div", { className: "product-grid", style: { padding: '20px' }, children: products.map((product, index) => (_jsxs(motion.div, { layout: true, initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { delay: index * 0.03 }, whileHover: { y: -8 }, className: "product-card", children: [_jsx("div", { className: "product-image-container", children: _jsx("img", { src: product.image, alt: product.title }) }), _jsxs("div", { className: "product-info", children: [_jsx("span", { className: "category-label", children: product.category }), _jsx("h3", { children: product.title }), _jsxs("p", { className: "price", children: ["$", product.price] }), _jsx(Link, { to: `/product/${product.id}`, className: "btn-view", children: "View Details" })] })] }, product.id))) }));
};
export default HomePage;
