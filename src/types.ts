export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'men' | 'women';
  sizes: number[];
  description: string;
  onSale?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: number;
}

export type PaymentMethod = 'card' | 'mtn' | 'orange' | 'paypal';

export interface PaymentDetails {
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  phoneNumber?: string;
}