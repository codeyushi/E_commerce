import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { api } from '../api'; 
import type { Product } from '../types'; 
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const sortParam = searchParams.get('sort') || 'asc';

    const loadProducts = async () => {
      setLoading(true);
      try {
        let data: Product[] = [];
        if (!categoryParam || categoryParam === 'all') {
          data = await api.getProducts();
        } else {
          const selectedCategories = categoryParam.split(',');
          
          const promises = selectedCategories.map(cat => 
            fetch(`https://fakestoreapi.com/products/category/${cat}`).then(res => res.json())
          );
          
          const results = await Promise.all(promises);
          data = results.flat();
        }

        data.sort((a, b) => {
          return sortParam === 'asc' ? a.price - b.price : b.price - a.price;
        });

        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [searchParams]);

  if (loading) return <div className="loader">Updating Gallery...</div>;

  return (
    <div className="product-grid" style={{ padding: '20px' }}>
      {products.map((product, index) => (
        <motion.div 
          key={product.id}
          layout 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.03 }} 
          whileHover={{ y: -8 }} 
          className="product-card"
        >
          <div className="product-image-container">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <span className="category-label">{product.category}</span>
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <Link to={`/product/${product.id}`} className="btn-view">
              View Details
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HomePage;