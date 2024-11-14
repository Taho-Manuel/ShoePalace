import { useState } from 'react';
import type { PaymentMethod, PaymentDetails } from '../types';

interface PaymentFormProps {
  selectedMethod: PaymentMethod;
  onSubmit: (details: PaymentDetails) => void;
}

export default function PaymentForm({ selectedMethod, onSubmit }: PaymentFormProps) {
  const [details, setDetails] = useState<PaymentDetails>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {selectedMethod === 'card' && (
        <>
          <div>
            <label className="block text-sm font-medium mb-1">Card Number</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="1234 5678 9012 3456"
              onChange={(e) =>
                setDetails({ ...details, cardNumber: e.target.value })
              }
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="MM/YY"
                onChange={(e) =>
                  setDetails({ ...details, expiryDate: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CVV</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="123"
                onChange={(e) => setDetails({ ...details, cvv: e.target.value })}
                required
              />
            </div>
          </div>
        </>
      )}

      {(selectedMethod === 'mtn' || selectedMethod === 'orange') && (
        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            className="w-full p-2 border rounded"
            placeholder="Enter your phone number"
            onChange={(e) =>
              setDetails({ ...details, phoneNumber: e.target.value })
            }
            required
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
      >
        Complete Payment
      </button>
    </form>
  );
}