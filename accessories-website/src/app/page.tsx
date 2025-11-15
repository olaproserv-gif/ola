"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import { products } from "../data/products";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCartClick={() => setCartOpen(true)} />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Accessories Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
      <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
