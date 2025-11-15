export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Elegant Necklace",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    description: "A stunning gold necklace with intricate design, perfect for special occasions."
  },
  {
    id: 2,
    name: "Leather Handbag",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Premium leather handbag with spacious compartments and timeless style."
  },
  {
    id: 3,
    name: "Diamond Earrings",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
    description: "Sparkling diamond earrings that add elegance to any outfit."
  },
  {
    id: 4,
    name: "Silk Scarf",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1601762603332-fd61e28b698a?w=400&h=400&fit=crop",
    description: "Luxurious silk scarf with beautiful patterns, versatile for any season."
  },
  {
    id: 5,
    name: "Designer Sunglasses",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    description: "High-quality designer sunglasses with UV protection and modern design."
  },
  {
    id: 6,
    name: "Pearl Bracelet",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
    description: "Classic pearl bracelet that complements any jewelry collection."
  },
  {
    id: 7,
    name: "Wristwatch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Elegant wristwatch with leather strap and precise timekeeping."
  },
  {
    id: 8,
    name: "Hair Accessories Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    description: "Complete set of hair accessories including clips, bands, and pins."
  }
];