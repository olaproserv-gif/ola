import React from 'react';
import { useCart } from '../context/CartContext';

const Header: React.FC<{ onCartClick: () => void }> = ({ onCartClick }) => {
  const { getCartCount } = useCart();
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Accessories Store</h1>
        <button onClick={onCartClick} className="text-lg hover:text-blue-500">Cart ({getCartCount()})</button>
      </div>
    </header>
  );
};

export default Header;