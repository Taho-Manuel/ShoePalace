import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import SalePage from './pages/SalePage';
import Newsletter from './components/Newsletter';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'men' | 'women' | 'sale'>('home');
  const [showCart, setShowCart] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'men':
        return <MenPage />;
      case 'women':
        return <WomenPage />;
      case 'sale':
        return <SalePage />;
      default:
        return (
          <main className="pt-16">
            {/* Hero Section */}
            <section
              className="h-[70vh] bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1549298916-f52d724204b4)',
              }}
            >
              <div className="text-center text-white">
                <h1 className="text-6xl font-bold mb-4">ShoePalace</h1>
                <p className="text-2xl mb-8">
                  Where Style Meets Comfort
                </p>
                <div className="space-x-4">
                  <button
                    onClick={() => setCurrentPage('men')}
                    className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100"
                  >
                    Shop Men
                  </button>
                  <button
                    onClick={() => setCurrentPage('women')}
                    className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900"
                  >
                    Shop Women
                  </button>
                </div>
              </div>
            </section>
          </main>
        );
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar
          onPageChange={setCurrentPage}
          onCartClick={() => setShowCart(true)}
        />
        
        {renderPage()}

        <Newsletter />

        {/* Cart Overlay */}
        {showCart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white overflow-y-auto">
              <button
                className="absolute top-4 right-4 text-2xl"
                onClick={() => setShowCart(false)}
              >
                ×
              </button>
              <Cart onClose={() => setShowCart(false)} />
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">ShoePalace</h3>
              <p className="text-gray-400">
                Premium footwear for every occasion. Quality and style combined.
                <br />
                BY @Johankabo
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => setCurrentPage('men')} className="hover:text-white">
                    Men's Collection
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('women')} className="hover:text-white">
                    Women's Collection
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage('sale')} className="hover:text-white">
                    Sale
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  Email: contact@shoepalace.com
                  <br />
                  kabojohan@gmail.com
                </li>
                <li>Phone: (+237) 674-671-243</li>
                <li>Address: Douala, Ndogpassi 3</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;