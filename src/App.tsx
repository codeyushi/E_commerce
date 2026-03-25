import { useEffect, useState } from 'react';
// @ts-ignore
import logo_new_ from './assets/logo_new_.png';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation, 
  useSearchParams 
} from 'react-router-dom';
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
  const [categories, setCategories] = useState<string[]>([]);

  const isHomePage = location.pathname === "/";
  const currentCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    api.getCategories().then(setCategories);
  }, []);

  const updateParams = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' && key === 'category') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo_new_} alt="My Store" className="nav-logo-img" />
      </Link>

      <div className="nav-right">
        {isHomePage && (
          <div className="nav-filters">
            <div className="filter-group" >
              <button 
                className={`filter-chip ${currentCategory === 'all' ? 'active' : ''}`}
                onClick={() => updateParams('category', 'all')}
              >
                All
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`filter-chip ${currentCategory === cat ? 'active' : ''}`}
                  onClick={() => updateParams('category', cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <select 
              value={searchParams.get('sort') || 'asc'} 
              onChange={(e) => updateParams('sort', e.target.value)}
              className="sort-select"
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        )}
        <Link to="/cart" className="cart-link">
          <div className="cart-wrapper">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>
        </Link>
      </div>
    </nav>
  );
};
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/product/:id" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
        <Route path="/cart" element={<PageWrapper><CartPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};
function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="content">
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;