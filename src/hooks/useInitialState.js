import { useState } from 'react';
import initialState from '../initialState';


// Agregar al carrito
const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
// Remover del carrito
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };
  // Retornar el estado y las funciones
  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;

