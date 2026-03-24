// // export default ProductDetailPage;
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { api } from '../api';
// import { Product } from '../types';
// import { useCart } from '../context/CartContext';
// import './ProductDetailPage.css';

// const ProductDetailPage = () => {
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     if (id) api.getProductById(id).then(setProduct);
//   }, [id]);

//   if (!product) return <div className="loader">Loading Details...</div>;

//   return (
//     <div className="detail-container">
//       {/* Left Column: Image */}
//       <div className="detail-image-wrapper">
//         <img src={product.image} alt={product.title} />
//       </div>

//       {/* Right Column: Actions */}
//       <div className="detail-info">
//         <span className="brand-name">{product.category}</span>
//         <h1 className="product-title">{product.title}</h1>
        
//         <div className="product-price">
//           ${product.price}
//           <span style={{fontSize: '0.9rem', color: '#10b981', marginLeft: '10px'}}>
//             Inclusive of all taxes
//           </span>
//         </div>

//         <div className="description-box">
//           <h3>Product Description</h3>
//           <p>{product.description}</p>
//         </div>

//         <button 
//           className="btn-add-to-cart"
//           onClick={() => addToCart(product)}
//         >
//           <span>👜</span> ADD TO BAG
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to handle navigation
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Ensuring the API call matches your defined method name
    if (id) api.getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div className="loader">Loading Details...</div>;

  return (
    <div className="detail-page-wrapper">
      {/* --- BACK NAVIGATION BUTTON --- */}
      <button className="back-navigation-btn" onClick={() => navigate(-1)}>
        <span className="arrow-icon">←</span> BACK TO GALLERY
      </button>

      <div className="detail-container">
        {/* Left Column: Image */}
        <div className="detail-image-wrapper">
          <img src={product.image} alt={product.title} />
        </div>

        {/* Right Column: Actions */}
        <div className="detail-info">
          <span className="brand-name">{product.category}</span>
          <h1 className="product-title">{product.title}</h1>
          
          <div className="product-price">
            ${product.price}
            <span style={{fontSize: '0.9rem', color: '#10b981', marginLeft: '10px'}}>
              Inclusive of all taxes
            </span>
          </div>

          <div className="description-box">
            <h3>Product Description</h3>
            <p>{product.description}</p>
          </div>

          <button 
            className="btn-add-to-cart"
            onClick={() => addToCart(product)}
          >
            <span>👜</span> ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;