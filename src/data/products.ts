export const products = [
  // Men's Collection
  {
    id: '1',
    name: 'Classic Running Shoes',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    category: 'men',
    sizes: [40, 41, 42, 43, 44, 45],
    description: 'Premium running shoes for maximum comfort and performance'
  },
  {
    id: '2',
    name: 'Urban Leather Sneakers',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    category: 'men',
    sizes: [40, 41, 42, 43, 44],
    description: 'Stylish leather sneakers perfect for casual occasions'
  },
  {
    id: '3',
    name: 'Sports Performance Max',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
    category: 'men',
    sizes: [39, 40, 41, 42, 43, 44, 45],
    description: 'High-performance sports shoes for athletes'
  },
  {
    id: '4',
    name: 'Business Casual Loafers',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1',
    category: 'men',
    sizes: [40, 41, 42, 43, 44],
    description: 'Elegant loafers for business casual settings'
  },

  // Women's Collection
  {
    id: '5',
    name: 'Fashion Sneakers',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    category: 'women',
    sizes: [36, 37, 38, 39, 40, 41],
    description: 'Trendy sneakers for the fashion-conscious'
  },
  {
    id: '6',
    name: 'Running Comfort Elite',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b',
    category: 'women',
    sizes: [36, 37, 38, 39, 40],
    description: 'Premium running shoes designed for women'
  },
  {
    id: '7',
    name: 'Lifestyle Canvas',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1622760503932-0b4acbb2c5ff',
    category: 'women',
    sizes: [36, 37, 38, 39, 40, 41],
    description: 'Comfortable canvas shoes for daily wear'
  },
  {
    id: '8',
    name: 'Athletic Pro Series',
    price: 169.99,
    image: 'https://images.unsplash.com/photo-1618666012174-83b441c0bc76',
    category: 'women',
    sizes: [36, 37, 38, 39, 40],
    description: 'Professional athletic shoes for serious athletes'
  },

  // Sale Items
  {
    id: '9',
    name: 'Classic Sneakers',
    price: 79.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1',
    category: 'men',
    sizes: [40, 41, 42, 43, 44],
    description: 'Classic sneakers at an unbeatable price',
    onSale: true
  },
  {
    id: '10',
    name: 'Casual Comfort',
    price: 69.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de',
    category: 'women',
    sizes: [36, 37, 38, 39, 40],
    description: 'Comfortable casual shoes at a great value',
    onSale: true
  }
] as const;