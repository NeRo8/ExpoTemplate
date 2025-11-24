import { ImageSource } from 'expo-image';

import { images } from '@constants/images';

type Item = {
  id: number;
  image: ImageSource;
  title: string;
};

type FilterItem = {
  id: number;
  image: ImageSource;
  title: string;
  subCategories: Item[];
};

export const productFilters: FilterItem[] = [
  {
    id: 0,
    image: images.wheelLoader,
    title: 'Earth Moving Machines',
    subCategories: [
      {
        id: 0,
        title: 'Wheel Loader',
      },
      { id: 1, title: 'Excavator' },
    ],
  },
  {
    id: 1,
    image: images.truckCrane,
    title: 'Material Handling Equipment',
    subCategories: [
      { id: 0, title: 'Truck Crane' },
      { id: 1, title: 'All-Terrain Crane' },
      { id: 2, title: 'Rough-Terrain Crane' },
      { id: 3, title: 'Tower Crane' },
      { id: 4, title: 'Crawler Crane' },
      { id: 5, title: 'Forklift Trucks' },
      { id: 6, title: 'Warehouse Equipments' },
      { id: 7, title: 'Aerial Platform' },
    ],
  },
  {
    id: 2,
    image: images.truckMixer,
    title: 'Concrete Machinery',
    subCategories: [
      { id: 0, title: 'Truck-Mounted Concrete Pump' },
      { id: 1, title: 'Trailer Pump' },
      { id: 2, title: 'Placing Boom' },
      { id: 3, title: 'Batching Plant' },
      { id: 4, title: 'Truck Mixer' },
    ],
  },
  {
    id: 3,
    image: images.roller,
    title: 'Road Machinery',
    subCategories: [
      { id: 0, title: 'Roller' },
      { id: 1, title: 'Motor Grader' },
    ],
  },
  {
    id: 5,
    image: images.portMachinery,
    title: 'Port Machinery',
    subCategories: [
      { id: 0, title: 'Heavy Duty Forklift' },
      { id: 1, title: 'Reach Stacker' },
      { id: 2, title: 'Empty Container Handler' },
    ],
  },
  {
    id: 6,
    image: images.powerSystems,
    title: 'Power Systems',
    subCategories: [{ id: 0, title: 'Power Generator' }],
  },
  {
    id: 7,
    image: images.spareParts,
    title: 'Spare Parts',
    subCategories: [
      { id: 0, title: 'Bus Engines' },
      { id: 1, title: 'Key Components' },
    ],
  },
];
