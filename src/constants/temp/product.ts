export type Product = {
  id: string;
  name: string;
  image: string; // Image URL from the website
  price: number;
  params: Param[];
};

type Param = {
  id: string;
  name: string;
  value: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'SY16C',
    image:
      'https://masahaglobal.com/uploads/2023/02/24/b7275a36a61ae34b59a2e9dd9a27c0b7.jpg',
    price: 18500,
    params: [
      { id: 'brand', name: 'Brand', value: 'Sany' },
      { id: 'operation-weight', name: 'Operating Weight', value: '1.88 T' },
      { id: 'engine-power', name: 'Engine Power', value: '10.3 Kw' },
      { id: 'bucket-capacity', name: 'Bucket Capacity', value: '0.04 m³' },
    ],
  },
  {
    id: '2',
    name: 'SY16C(T4f)',
    image:
      'https://masahaglobal.com/uploads/2023/02/25/12e2d1146ff6a59e5c2e685a931e4d56.jpeg',
    price: 22000,
    params: [
      { id: 'brand', name: 'Brand', value: 'Sany' },
      { id: 'operation-weight', name: 'Operating Weight', value: '1.83 T' },
      { id: 'engine-power', name: 'Engine Power', value: '14.6 Kw' },
      { id: 'bucket-capacity', name: 'Bucket Capacity', value: '0.04 m³' },
    ],
  },
  {
    id: '3',
    name: 'SY18C(T4f)',
    image:
      'https://masahaglobal.com/uploads/2023/02/25/4a7e2c47449e694943b54d49ed81a74c.jpeg',
    price: 15000,
    params: [
      { id: 'brand', name: 'Brand', value: 'Sany' },
      { id: 'operation-weight', name: 'Operating Weight', value: '1.96 T' },
      { id: 'engine-power', name: 'Engine Power', value: '14.6 Kw' },
      { id: 'bucket-capacity', name: 'Bucket Capacity', value: '0.04 m³' },
    ],
  },
  {
    id: '4',
    name: 'SY55C',
    image:
      'https://masahaglobal.com/uploads/2023/02/24/20359b79fb153b7d85e5dc4a79d53a6b.jpg',
    price: 28000,
    params: [
      { id: 'brand', name: 'Brand', value: 'Sany' },
      { id: 'operation-weight', name: 'Operating Weight', value: '5.78 T' },
      { id: 'engine-power', name: 'Engine Power', value: '36 Kw' },
      {
        id: 'bucket-capacity',
        name: 'Bucket Capacity',
        value: '0.21~0.25(0.23) m³',
      },
    ],
  },
  {
    id: '5',
    name: 'SY60C(T4f)',
    image:
      'https://masahaglobal.com/uploads/2023/02/24/9729aa98e17830ce3993bb5b6a211fc3.jpg',
    price: 19500,
    params: [
      { id: 'brand', name: 'Brand', value: 'Sany' },
      { id: 'operation-weight', name: 'Operating Weight', value: '6 T' },
      { id: 'engine-power', name: 'Engine Power', value: '42.4 Kw' },
      { id: 'bucket-capacity', name: 'Bucket Capacity', value: 'N/A' },
    ],
  },
  {
    id: '6',
    name: 'SY65W',
    image:
      'https://masahaglobal.com/uploads/2023/02/24/9729aa98e17830ce3993bb5b6a211fc3.jpg',
    price: 24500,
    params: [
      { id: 'brand', name: 'Brand', value: 'Sany' },
      { id: 'operation-weight', name: 'Operating Weight', value: '5.92 T' },
      { id: 'engine-power', name: 'Engine Power', value: '45.4 Kw' },
      { id: 'bucket-capacity', name: 'Bucket Capacity', value: '0.21 m³' },
    ],
  },
  {
    id: '7',
    name: 'SY75C',
    image:
      'https://masahaglobal.com/uploads/2023/02/24/e9c8995f2db16b7e22179bbefa4f2a70.jpg',
    price: 16500,
    params: [
      { id: 'brand', name: 'Brand', value: 'Sany' },
      { id: 'operation-weight', name: 'Operating Weight', value: '7.28 T' },
      { id: 'engine-power', name: 'Engine Power', value: '43 Kw' },
      { id: 'bucket-capacity', name: 'Bucket Capacity', value: '0.28 m³' },
    ],
  },
];
