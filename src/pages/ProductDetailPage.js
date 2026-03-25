import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import { useCart } from '../context/CartContext';
import './ProductDetailPage.css';
const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Hook to handle navigation
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        // Ensuring the API call matches your defined method name
        if (id)
            api.getProductById(id).then(setProduct);
    }, [id]);
    if (!product)
        return _jsx("div", { className: "loader", children: "Loading Details..." });
    return (_jsxs("div", { className: "detail-page-wrapper", children: [_jsxs("button", { className: "back-navigation-btn", onClick: () => navigate(-1), children: [_jsx("span", { className: "arrow-icon", children: "\u2190" }), " BACK TO GALLERY"] }), _jsxs("div", { className: "detail-container", children: [_jsx("div", { className: "detail-image-wrapper", children: _jsx("img", { src: product.image, alt: product.title }) }), _jsxs("div", { className: "detail-info", children: [_jsx("span", { className: "brand-name", children: product.category }), _jsx("h1", { className: "product-title", children: product.title }), _jsxs("div", { className: "product-price", children: ["$", product.price, _jsx("span", { style: { fontSize: '0.9rem', color: '#10b981', marginLeft: '10px' }, children: "Inclusive of all taxes" })] }), _jsxs("div", { className: "description-box", children: [_jsx("h3", { children: "Product Description" }), _jsx("p", { children: product.description })] }), _jsxs("button", { className: "btn-add-to-cart", onClick: () => addToCart(product), children: [_jsx("span", { children: "\uD83D\uDC5C" }), " ADD TO CART"] })] })] })] }));
};
export default ProductDetailPage;
