import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';

export default function MenPage() {
  const mensProducts = products.filter(p => p.category === 'men');
  
  return (
    <div className="pt-16">
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Men's Collection</h1>
          <p className="text-xl">Discover our premium selection of men's footwear</p>
        </div>
      </div>
      <ProductGrid
        products={mensProducts}
        title="Men's Shoes"
        description="From casual sneakers to formal shoes, find your perfect pair"
      />
    </div>
  );
}