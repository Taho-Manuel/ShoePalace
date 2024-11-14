import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get updates on new arrivals and special offers!
          </p>

          {subscribed ? (
            <div className="text-green-600 font-medium">
              Thanks for subscribing! Check your email for confirmation.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l border-2 border-r-0 border-gray-300 focus:outline-none focus:border-black"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-r hover:bg-gray-800 flex items-center"
              >
                <Send size={20} className="mr-2" />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}