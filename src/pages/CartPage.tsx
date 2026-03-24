
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
//@ts-ignore
import empty_Cart from "../assets/empty_Cart.png";

const CartPage = () => {
  const { cart, removeFromCart, totalPrice } = useCart();
  if (cart.length === 0) {
    return (
      <div className="empty-cart-container" style={{ padding: '4rem', textAlign: 'center' }}>
        <img className="empty_img"
          src={empty_Cart}
          alt="empty-bag" 
          style={{ width: '230px', marginBottom: '0.5rem' }} 
        />
        <h2 style={{ fontWeight: 700, color: '#282c3f' }}>Hey, it feels so light!</h2>
        <p style={{ color: '#94969f', marginBottom: '2rem' }}>There is nothing in your bag. Let's add some items.</p>
        <Link to="/" className="btn-outline">ADD ITEMS FROM LIST</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {/* Left Column: Items */}
      <div className="cart-items-section">
        <div className="cart-header-actions">
        </div>

        {cart.map((item) => (
          <div key={item.id} className="cart-item-card">
            <img src={item.image} alt={item.title} className="cart-img" />
            <div className="cart-item-info">
              <h4 className="item-title">{item.title}</h4>
              <p className="item-sub">Sold by: {item.category}</p>
              
              <div className="item-selectors">
                <span className="selector-chip">Qty: {item.quantity}</span>
              </div>

              <div className="item-price-row">
                <span className="current-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
              
              <p className="delivery-text">
                <span style={{color: '#03a685'}}>✓</span> Delivery by 28 Mar 2026
              </p>
            </div>

           
            <button className="close-btn" onClick={() => removeFromCart(item.id)}>✕</button>
          </div>
        ))}
      </div>

      
      <div className="cart-summary-section">
        <p className="summary-title">PRICE DETAILS ({cart.length} Items)</p>
        
        <div className="price-row">
          <span>Total Price</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        
        <div className="price-row">
          <span>Platform Fee</span>
          <span className="free-text" style={{color: '#03a685', fontWeight: 700}}>FREE</span>
        </div>
        
        <div className="price-row total-row" style={{borderTop: '1px solid #eaeaec', paddingTop: '15px', marginTop: '15px', fontWeight: 700}}>
          <span>Total Amount</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        
        <button className="place-order-btn">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default CartPage;