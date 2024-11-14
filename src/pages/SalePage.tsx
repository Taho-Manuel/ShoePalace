import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';

export default function SalePage() {
  const saleProducts = products.filter(p => p.onSale);
  
  return (
    <div className="pt-16">
      <div className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Sale</h1>
          <p className="text-xl">Amazing deals on premium footwear</p>
        </div>
      </div>
      <ProductGrid
        products={saleProducts}
        title="Special Offers"
        description="Don't miss out on these limited-time deals"
      />
    </div>
  );
}