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
    startedDate: '2025-01-01',
    endedDate: '2025-01-01',
    total: '$11000.00',
    type: 'Rent',
    products: products.slice(0, 4),
  },
  {
    id: '0000-0000-0000-0001',
    startedDate: '2025-01-01',
    endedDate: '2025-01-01',
    total: '$40000.00',
    type: 'Buy',
    products: products.reverse().slice(0, 2),
  },
];
