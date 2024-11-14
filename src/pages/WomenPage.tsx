import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';

export default function WomenPage() {
  const womensProducts = products.filter(p => p.category === 'women');
  
  return (
    <div className="pt-16">
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Women's Collection</h1>
          <p className="text-xl">Elegant and comfortable footwear for every occasion</p>
        </div>
      </div>
      <ProductGrid
        products={womensProducts}
        title="Women's Shoes"
        description="Style meets comfort in our women's collection"
      />
    </div>
  );
}