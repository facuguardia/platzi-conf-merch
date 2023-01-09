import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from './Product';
import '../styles/components/Products.css';

function Products() {
  // Recibe el estado y las funciones del contexto (AppContext)
  const {state, addToCart} = useContext(AppContext);
  const {products} = state

  const handleAddToCart = (product) => () => {
    addToCart(product);
  }
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product product={product} key={product.id} handleAddToCart={handleAddToCart}/>
        ))}
        ;
      </div>
    </div>
  );
}

export default Products;
