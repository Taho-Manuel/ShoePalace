import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onPageChange: (page: 'home' | 'men' | 'women' | 'sale') => void;
  onCartClick: () => void;
}

export default function Navbar({ onPageChange, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button
              onClick={() => onPageChange('home')}
              className="text-xl font-bold ml-2"
            >
              ShoePalace
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onPageChange('home')}
              className="hover:text-gray-600"
            >
              Home
            </button>
            <button
              onClick={() => onPageChange('men')}
              className="hover:text-gray-600"
            >
              Men
            </button>
            <button
              onClick={() => onPageChange('women')}
              className="hover:text-gray-600"
            >
              Women
            </button>
            <button
              onClick={() => onPageChange('sale')}
              className="hover:text-gray-600"
            >
              Sale
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search size={24} />
            </button>
            <button onClick={onCartClick} className="relative">
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <button
              onClick={() => {
                onPageChange('home');
                setIsMenuOpen(false);
              }}
              className="block py-2"
            >
              Home
            </button>
            <button
              onClick={() => {
                onPageChange('men');
                setIsMenuOpen(false);
              }}
              className="block py-2"
            >
              Men
            </button>
            <button
              onClick={() => {
                onPageChange('women');
                setIsMenuOpen(false);
              }}
              className="block py-2"
            >
              Women
            </button>
            <button
              onClick={() => {
                onPageChange('sale');
                setIsMenuOpen(false);
              }}
              className="block py-2"
            >
              Sale
            </button>
          </div>
        )}

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-16 left-0 w-full bg-white p-4 shadow-lg">
            <input
              type="text"
              placeholder="Search for shoes..."
              className="w-full p-2 border rounded-lg"
            />
          </div>
        )}
      </div>
    </nav>
  );
}