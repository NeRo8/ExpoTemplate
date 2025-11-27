import { Product, products } from './product';

export type Order = {
  id: string;
  startedDate: string;
  endedDate: string;
  total: string;
  type: 'Rent' | 'Buy';
  products: Product[];
};

export const ORDERS: Order[] = [
  {
    id: '0000-0000-0000-0000',
    startedDate: new Date('2025-01-01').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    endedDate: new Date('2025-01-01').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    total: '$11000.00',
    type: 'Rent',
    products: products.slice(0, 4),
  },
  {
    id: '0000-0000-0000-0001',
    startedDate: new Date('2025-01-01').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    endedDate: new Date('2025-01-28').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    total: '$40000.00',
    type: 'Buy',
    products: products.reverse().slice(0, 2),
  },
];
