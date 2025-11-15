"use client"

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from './CartContext';

const products: Product[] = [
  {
    id: 1,
    name: "Classic Leather Watch",
    price: 129.99,
    image: "⌚",
    category: "Watches",
    description: "Elegant leather strap watch with minimalist design, perfect for any occasion."
  },
  {
    id: 2,
    name: "Designer Sunglasses",
    price: 89.99,
    image: "🕶️",
    category: "Sunglasses",
    description: "UV protection sunglasses with polarized lenses and stylish frame."
  },
  {
    id: 3,
    name: "Gold Chain Necklace",
    price: 199.99,
    image: "📿",
    category: "Jewelry",
    description: "18K gold plated chain necklace, hypoallergenic and tarnish resistant."
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    price: 149.99,
    image: "👜",
    category: "Bags",
    description: "Premium leather crossbody bag with adjustable strap and multiple compartments."
  },
  {
    id: 5,
    name: "Smart Fitness Watch",
    price: 249.99,
    image: "⌚",
    category: "Watches",
    description: "Advanced fitness tracking with heart rate monitor and GPS functionality."
  },
  {
    id: 6,
    name: "Pearl Earrings",
    price: 79.99,
    image: "💎",
    category: "Jewelry",
    description: "Elegant freshwater pearl earrings with sterling silver posts."
  },
  {
    id: 7,
    name: "Aviator Sunglasses",
    price: 119.99,
    image: "🕶️",
    category: "Sunglasses",
    description: "Classic aviator style with metal frame and gradient lenses."
  },
  {
    id: 8,
    name: "Canvas Tote Bag",
    price: 59.99,
    image: "👜",
    category: "Bags",
    description: "Durable canvas tote with leather handles, perfect for everyday use."
  },
  {
    id: 9,
    name: "Silver Bracelet",
    price: 99.99,
    image: "📿",
    category: "Jewelry",
    description: "Sterling silver bracelet with intricate chain link design."
  },
  {
    id: 10,
    name: "Sport Sunglasses",
    price: 69.99,
    image: "🕶️",
    category: "Sunglasses",
    description: "Lightweight sport sunglasses with anti-slip nose pads and wraparound design."
  },
  {
    id: 11,
    name: "Minimalist Watch",
    price: 159.99,
    image: "⌚",
    category: "Watches",
    description: "Ultra-thin minimalist watch with Japanese quartz movement."
  },
  {
    id: 12,
    name: "Designer Backpack",
    price: 189.99,
    image: "🎒",
    category: "Bags",
    description: "Stylish backpack with laptop compartment and water-resistant material."
  }
];

const categories = ["All", "Watches", "Sunglasses", "Jewelry", "Bags"];

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium accessories designed to elevate your style
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <svg
              className="absolute left-4 top-3.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
