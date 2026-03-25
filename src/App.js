import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
// @ts-ignore
import logo_new_ from './assets/logo_new_.png';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider, useCart } from './context/CartContext';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import { api } from './api';
import './index.css';
const Navbar = () => {
    const { totalItems } = useCart();
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [categories, setCategories] = useState([]);
    const isHomePage = location.pathname === "/";
    const currentCategory = searchParams.get('category') || 'all';
    useEffect(() => {
        api.getCategories().then(setCategories);
    }, []);
    const updateParams = (key, value) => {
        const newParams = new URLSearchParams(searchParams);
        if (value === 'all' && key === 'category') {
            newParams.delete(key);
        }
        else {
            newParams.set(key, value);
        }
        setSearchParams(newParams);
    };
    return (_jsxs("nav", { className: "navbar", children: [_jsx(Link, { to: "/", className: "logo", children: _jsx("img", { src: logo_new_, alt: "My Store", className: "nav-logo-img" }) }), _jsxs("div", { className: "nav-right", children: [isHomePage && (_jsxs("div", { className: "nav-filters", children: [_jsxs("div", { className: "filter-group", children: [_jsx("button", { className: `filter-chip ${currentCategory === 'all' ? 'active' : ''}`, onClick: () => updateParams('category', 'all'), children: "All" }), categories.map(cat => (_jsx("button", { className: `filter-chip ${currentCategory === cat ? 'active' : ''}`, onClick: () => updateParams('category', cat), children: cat }, cat)))] }), _jsxs("select", { value: searchParams.get('sort') || 'asc', onChange: (e) => updateParams('sort', e.target.value), className: "sort-select", children: [_jsx("option", { value: "asc", children: "Price: Low to High" }), _jsx("option", { value: "desc", children: "Price: High to Low" })] })] })), _jsx(Link, { to: "/cart", className: "cart-link", children: _jsxs("div", { className: "cart-wrapper", children: [_jsx("span", { className: "cart-icon", children: "\uD83D\uDED2" }), _jsx("span", { className: "cart-text", children: "Cart" }), totalItems > 0 && _jsx("span", { className: "cart-badge", children: totalItems })] }) })] })] }));
};
const PageWrapper = ({ children }) => (_jsx(motion.div, { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -15 }, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }, children: children }));
const AnimatedRoutes = () => {
    const location = useLocation();
    return (_jsx(AnimatePresence, { mode: "wait", children: _jsxs(Routes, { location: location, children: [_jsx(Route, { path: "/", element: _jsx(PageWrapper, { children: _jsx(HomePage, {}) }) }), _jsx(Route, { path: "/product/:id", element: _jsx(PageWrapper, { children: _jsx(ProductDetailPage, {}) }) }), _jsx(Route, { path: "/cart", element: _jsx(PageWrapper, { children: _jsx(CartPage, {}) }) })] }, location.pathname) }));
};
function App() {
    return (_jsx(CartProvider, { children: _jsx(Router, { children: _jsxs("div", { className: "app-container", children: [_jsx(Navbar, {}), _jsx("main", { className: "content", children: _jsx(AnimatedRoutes, {}) })] }) }) }));
}
export default App;
