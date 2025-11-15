import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();
  if (!isOpen) return null;
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-80 p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Qty: {item.quantity} x ${item.price}</p>
                </div>
                <div className="flex items-center">
                  <p className="font-bold mr-2">${item.price * item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
                </div>
              </div>
            ))}
            <div className="border-t pt-4 mt-4">
              <p className="text-xl font-bold">Total: ${total}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;