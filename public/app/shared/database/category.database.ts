import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
  {
    title: 'Service Orders',
    value: 'orders',
    color: 'red',
    url: '/home/orders'
  },
  {
    title: 'Service Order Items',
    value: 'orderItems',
    color: 'teal',
    url: '/home/orderItems'
  }
];
