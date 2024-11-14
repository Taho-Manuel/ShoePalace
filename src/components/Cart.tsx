import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import type { PaymentMethod } from '../types';
import PaymentForm from './PaymentForm';

interface CartProps {
  onClose: () => void;
}

const paymentMethods: { id: PaymentMethod; name: string; icon: string }[] = [
  { id: 'card', name: 'Credit Card', icon: '💳' },
  { id: 'mtn', name: 'MTN Money', icon: '📱' },
  { id: 'orange', name: 'Orange Money', icon: '📱' },
  { id: 'paypal', name: 'PayPal', icon: '🌐' },
];

export default function Cart({ onClose }: CartProps) {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('card');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = (details: any) => {
    console.log('Processing payment:', { method: selectedPayment, details });
    alert('Payment processed successfully!');
    onClose();
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.selectedSize}`}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600">Size: {item.selectedSize}</p>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item, parseInt(e.target.value, 10))
                }
                className="border rounded p-1"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeFromCart(item)}
                className="p-1 hover:text-red-500"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        {!showPaymentForm ? (
          <>
            <h3 className="text-lg font-medium mb-4">Select Payment Method</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  className={`p-4 border rounded-lg flex items-center gap-2 ${
                    selectedPayment === method.id
                      ? 'border-black bg-gray-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <span>{method.icon}</span>
                  {method.name}
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center text-xl font-medium mb-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => setShowPaymentForm(true)}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Proceed to Payment
            </button>
          </>
        ) : (
          <PaymentForm
            selectedMethod={selectedPayment}
            onSubmit={handlePayment}
          />
        )}
      </div>
    </div>
  );
}