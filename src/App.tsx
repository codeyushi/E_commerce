
// import { useEffect, useState } from 'react';
// // @ts-ignore
// import logo_new_ from './assets/logo_new_.png';
// import { 
//   BrowserRouter as Router, 
//   Routes, 
//   Route, 
//   Link, 
//   useLocation, 
//   useSearchParams 
// } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import { CartProvider, useCart } from './context/CartContext';
// import HomePage from './pages/HomePage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import CartPage from './pages/CartPage';
// import { api } from './api';
// import './index.css';

// const Navbar = () => {
//   const { totalItems } = useCart();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const location = useLocation();
//   const [categories, setCategories] = useState<string[]>([]);

//   const isHomePage = location.pathname === "/";
//   useEffect(() => {
//     api.getCategories().then(setCategories);
//   }, []);

//   const updateFilters = (key: string, value: string) => {
//     const params = new URLSearchParams(searchParams);
//     params.set(key, value);
//     setSearchParams(params);
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo"><img 
//     src={logo_new_} 
//     alt="My Store Logo" 
//     className="nav-logo-img" 
//   /></Link>

//       <div className="nav-right">
//         {/* Dual Filters: Only visible on Home Page */}
//         {isHomePage && (
//           <div className="nav-filters">
//             <select 
//               value={searchParams.get('category') || 'all'} 
//               onChange={(e) => updateFilters('category', e.target.value)}
//               className="filter-select"
//             >
//               <option value="all">All Categories</option>
//               {categories.map(cat => (
//                 <option key={cat} value={cat} style={{ textTransform: 'capitalize' , margin:"20px"}}>
//                   {cat}
//                 </option>
//               ))}
//             </select>

//             <select 
//               value={searchParams.get('sort') || 'asc'} 
//               onChange={(e) => updateFilters('sort', e.target.value)}
//               className="filter-select"
//               style={{ marginLeft:"30px"}}
//             >
//               <option value="asc">Price: Low to High</option>
//               <option value="desc">Price: High to Low</option>
//             </select>
           
//           </div>
//         )}
//          <Link to="/cart" className="cart-link">
//           <span className="cart-icon" style={{margin:"2px"}}>🛒</span>
//           <span className="cart-text">Cart</span>
//           <span className="cart-badge"> ({totalItems})</span>
//         </Link>

//       </div>
//     </nav>
//   );
// };

// // --- ANIMATION WRAPPER ---
// const PageWrapper = ({ children }: { children: React.ReactNode }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 15 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -15 }}
//     transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Smooth "Apple-style" cubic bezier
//   >
//     {children}
//   </motion.div>
// );

// // --- ROUTING LOGIC ---
// const AnimatedRoutes = () => {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
//         <Route path="/product/:id" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
//         <Route path="/cart" element={<PageWrapper><CartPage /></PageWrapper>} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// // --- MAIN APP ---
// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <div className="app-container">
//           <Navbar />
//           <main className="content">
//             <AnimatedRoutes />
//           </main>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;

// import { useEffect, useState } from 'react';
// // @ts-ignore
// import logo_new_ from './assets/logo_new_.png';
// import { 
//   BrowserRouter as Router, 
//   Routes, 
//   Route, 
//   Link, 
//   useLocation, 
//   useSearchParams 
// } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import { CartProvider, useCart } from './context/CartContext';
// import HomePage from './pages/HomePage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import CartPage from './pages/CartPage';
// import { api } from './api';
// import './index.css';

// const Navbar = () => {
//   const { totalItems } = useCart();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const location = useLocation();
//   const [categories, setCategories] = useState<string[]>([]);

//   const isHomePage = location.pathname === "/";
  
//   // Get active categories from URL (e.g., "electronics,jewelery")
//   const activeCategories = searchParams.get('category') 
//     ? searchParams.get('category')!.split(',') 
//     : [];

//   useEffect(() => {
//     api.getCategories().then(setCategories);
//   }, []);

//   const toggleCategory = (cat: string) => {
//     let newCats = [...activeCategories];
//     if (newCats.includes(cat)) {
//       newCats = newCats.filter(c => c !== cat);
//     } else {
//       newCats.push(cat);
//     }

//     const newParams = new URLSearchParams(searchParams);
//     if (newCats.length > 0) {
//       newParams.set('category', newCats.join(','));
//     } else {
//       newParams.delete('category');
//     }
//     setSearchParams(newParams);
//   };

//   const updateSort = (sortValue: string) => {
//     const newParams = new URLSearchParams(searchParams);
//     newParams.set('sort', sortValue);
//     setSearchParams(newParams);
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo">
//         <img src={logo_new_} alt="My Store Logo" className="nav-logo-img" />
//       </Link>

//       <div className="nav-right">
//         {isHomePage && (
//           <div className="nav-filters">
//             <div className="category-chips">
//               {categories.map(cat => (
//                 <button 
//                   key={cat}
//                   className={`chip ${activeCategories.includes(cat) ? 'active' : ''}`}
//                   onClick={() => toggleCategory(cat)}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>

//             <select 
//               value={searchParams.get('sort') || 'asc'} 
//               onChange={(e) => updateSort(e.target.value)}
//               className="filter-select"
//             >
//               <option value="asc">Price: Low to High</option>
//               <option value="desc">Price: High to Low</option>
//             </select>
//           </div>
//         )}

//         <Link to="/cart" className="cart-link">
//           <span className="cart-icon">🛒</span>
//           <span className="cart-text">Cart</span>
//           <span className="cart-badge">({totalItems})</span>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// // --- ANIMATION & ROUTING WRAPPERS (Keep these as they were) ---
// const PageWrapper = ({ children }: { children: React.ReactNode }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 15 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -15 }}
//     transition={{ duration: 0.4 }}
//   >
//     {children}
//   </motion.div>
// );

// const AnimatedRoutes = () => {
//   const location = useLocation();
//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
//         <Route path="/product/:id" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
//         <Route path="/cart" element={<PageWrapper><CartPage /></PageWrapper>} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <div className="app-container">
//           <Navbar />
//           <main className="content">
//             <AnimatedRoutes />
//           </main>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;

// import { useEffect, useState } from 'react';
// // @ts-ignore
// import logo_new_ from './assets/logo_new_.png';
// import { 
//   BrowserRouter as Router, 
//   Routes, 
//   Route, 
//   Link, 
//   useLocation, 
//   useSearchParams 
// } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import { CartProvider, useCart } from './context/CartContext';
// import HomePage from './pages/HomePage';
// import ProductDetailPage from './pages/ProductDetailPage';
// import CartPage from './pages/CartPage';
// import { api } from './api';
// import './index.css';

// // --- NAVBAR COMPONENT ---
// const Navbar = () => {
//   const { totalItems } = useCart();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const location = useLocation();
//   const [categories, setCategories] = useState<string[]>([]);

//   const isHomePage = location.pathname === "/";
  
//   // Requirement #1: Get active category from URL so it's "Agnostic to Refresh"
//   const currentCategory = searchParams.get('category') || 'all';

//   useEffect(() => {
//     // Requirement #5: Always fetch categories from the API
//     api.getCategories().then(setCategories);
//   }, []);

//   const updateParams = (key: string, value: string) => {
//     const newParams = new URLSearchParams(searchParams);
//     if (value === 'all' && key === 'category') {
//       newParams.delete(key);
//     } else {
//       newParams.set(key, value);
//     }
//     setSearchParams(newParams);
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo">
//         <img src={logo_new_} alt="My Store" className="nav-logo-img" />
//       </Link>

//       <div className="nav-right">
//         {/* Only show filters on the Home Page */}
//         {isHomePage && (
//           <div className="nav-filters">
//             <div className="filter-group">
//               <button 
//                 className={`filter-chip ${currentCategory === 'all' ? 'active' : ''}`}
//                 onClick={() => updateParams('category', 'all')}
//               >
//                 All
//               </button>
//               {categories.map(cat => (
//                 <button 
//                   key={cat}
//                   className={`filter-chip ${currentCategory === cat ? 'active' : ''}`}
//                   onClick={() => updateParams('category', cat)}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>

//             <select 
//               value={searchParams.get('sort') || 'asc'} 
//               onChange={(e) => updateParams('sort', e.target.value)}
//               className="sort-select"
//             >
//               <option value="asc">Price: Low to High</option>
//               <option value="desc">Price: High to Low</option>
//             </select>
//           </div>
//         )}

//         {/* Global Cart Link - Always Visible */}
//         <Link to="/cart" className="cart-link">
//           <div className="cart-wrapper">
//             <span className="cart-icon">🛒</span>
//             <span className="cart-text">Bag</span>
//             {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
//           </div>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// // --- ANIMATION WRAPPER ---
// const PageWrapper = ({ children }: { children: React.ReactNode }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 15 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -15 }}
//     transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//   >
//     {children}
//   </motion.div>
// );

// // --- ROUTING LOGIC ---
// const AnimatedRoutes = () => {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
//         <Route path="/product/:id" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
//         <Route path="/cart" element={<PageWrapper><CartPage /></PageWrapper>} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

// // --- MAIN APP ENTRY ---
// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <div className="app-container">
//           <Navbar />
//           <main className="content">
//             <AnimatedRoutes />
//           </main>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;

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

// --- NAVBAR COMPONENT ---
const Navbar = () => {
  const { totalItems } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [categories, setCategories] = useState<string[]>([]);

  const isHomePage = location.pathname === "/";
  
  // Requirement #1: Get active category from URL so it's "Agnostic to Refresh"
  const currentCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    // Requirement #5: Always fetch categories from the API
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
        {/* Only show filters on the Home Page */}
        {isHomePage && (
          <div className="nav-filters">
            <div className="filter-group">
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

        {/* Global Cart Link - Always Visible */}
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

// --- ANIMATION WRAPPER ---
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

// --- ROUTING LOGIC ---
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

// --- MAIN APP ENTRY ---
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