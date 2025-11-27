import { images } from '../images';

export type FilterItem = {
  id: string;
  name: string;
  image: string | null;
  filters: FilterItem[] | null;
};

export type SubCategoryItem = {
  id: string;
  name: string;
  image: string | null;
  filters: FilterItem[];
};

export type ProductCategoryItem = {
  id: string;
  name: string;
  image: string | null;
  subCategories: SubCategoryItem[];
};

const brandFilters: FilterItem = {
  id: '1',
  name: 'Brands',
  image: null,
  filters: [
    { id: '1', name: 'Skyboom', image: null, filters: null },
    { id: '2', name: 'Sany', image: null, filters: null },
    { id: '3', name: 'Heli', image: null, filters: null },
    { id: '4', name: 'Weichai', image: null, filters: null },
  ],
};

export const productCategories: ProductCategoryItem[] = [
  {
    id: '1',
    name: 'Earth Moving Machines',
    image: images.wheelLoader,
    subCategories: [
      {
        id: '1',
        name: 'Wheel Loader',
        image: images.wheelLoader,
        filters: [
          brandFilters,
          {
            id: '2',
            name: 'Operation Weight',
            image: null,
            filters: [
              {
                id: '1',
                name: '< 16T',
                image: null,
                filters: null,
              },
              {
                id: '2',
                name: '16T - 19T',
                image: null,
                filters: null,
              },
              {
                id: '3',
                name: '> 19T ',
                image: null,
                filters: null,
              },
            ],
          },
          {
            id: '3',
            name: 'Bucket Capacity',
            image: null,
            filters: [
              { id: '1', name: '< 2.8m3', image: null, filters: null },
              { id: '2', name: '2.8m3 - 4.2m3', image: null, filters: null },
              { id: '3', name: '> 4.2m3', image: null, filters: null },
            ],
          },
          {
            id: '4',
            name: 'Rated Payload',
            image: null,
            filters: [
              { id: '1', name: '< 5T', image: null, filters: null },
              { id: '2', name: '5T - 6T', image: null, filters: null },
              { id: '3', name: '> 6T', image: null, filters: null },
            ],
          },
        ],
      },
      {
        id: '2',
        name: 'Excavator',
        image: images.excavator,
        filters: [
          brandFilters,
          {
            id: '2',
            name: 'Category',
            image: null,
            filters: [
              {
                id: '1',
                name: 'Mini Excavator',
                image: null,
                filters: null,
              },
              { id: '2', name: 'Small Excavator', image: null, filters: null },

              { id: '3', name: 'Medium Excavator', image: null, filters: null },
              { id: '4', name: 'Large Excavator', image: null, filters: null },
              {
                id: '5',
                name: 'Long-reach Excavator',
                image: null,
                filters: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Material Handling Equipment',
    image: images.truckCrane,
    subCategories: [
      {
        id: '1',
        name: 'Truck Crane',
        image: images.truckCrane,
        filters: [],
      },
      {
        id: '2',
        name: 'All-Terrain Crane',
        image: images.allTerrainCrane,
        filters: [],
      },
      {
        id: '3',
        name: 'Rough-Terrain Crane',
        image: images.roughTerrainCrane,
        filters: [],
      },
      {
        id: '4',
        name: 'Tower Crane',
        image: images.towerCrane,
        filters: [],
      },
      {
        id: '5',
        name: 'Crawler Crane',
        image: images.crawlerCrane,
        filters: [],
      },
      {
        id: '6',
        name: 'Forklift Trucks',
        image: images.forkliftTrucks,
        filters: [],
      },
      {
        id: '7',
        name: 'Warehouse Equipments',
        image: images.warehouseEquipments,
        filters: [],
      },
      {
        id: '8',
        name: 'Aerial Platform',
        image: images.aerialPlatform,
        filters: [],
      },
    ],
  },
  {
    id: '3',
    name: 'Concrete Machinery',
    image: images.truckMixer,
    subCategories: [
      {
        id: '1',
        name: 'Truck-Mounted Concrete Pump',
        image: images.truckMountedConcretePump,
        filters: [],
      },
      { id: '2', name: 'Trailer Pump', image: images.trailerPump, filters: [] },
      { id: '3', name: 'Placing Boom', image: images.placingBoom, filters: [] },
      {
        id: '4',
        name: 'Batching Plant',
        image: images.batchingPlant,
        filters: [],
      },
      { id: '5', name: 'Truck Mixer', image: images.truckMixer, filters: [] },
    ],
  },
  {
    id: '4',
    name: 'Road Machinery',
    image: images.roller,
    subCategories: [
      { id: '1', name: 'Roller', image: images.roller, filters: [] },
      {
        id: '2',
        name: 'Motor Grader',
        image: images.motorGrader,
        filters: [],
      },
    ],
  },
  {
    id: '5',
    name: 'Port Machinery',
    image: images.portMachinery,
    subCategories: [
      {
        id: '1',
        name: 'Heavy Duty Forklift',
        image: images.heavyDutyForklift,
        filters: [],
      },
      {
        id: '2',
        name: 'Reach Stacker',
        image: images.reachStacker,
        filters: [],
      },
      {
        id: '3',
        name: 'Empty Container Handler',
        image: images.emptyContainerHandler,
        filters: [],
      },
    ],
  },
  {
    id: '6',
    name: 'Power Systems',
    image: images.powerSystems,
    subCategories: [
      {
        id: '1',
        name: 'Power Generator',
        image: images.powerGenerator,
        filters: [],
      },
    ],
  },
  {
    id: '7',
    name: 'Spare Parts',
    image: images.spareParts,
    subCategories: [
      { id: '1', name: 'Bus Engines', image: images.bussEngines, filters: [] },
      {
        id: '2',
        name: 'Key Components',
        image: images.spareParts,
        filters: [],
      },
    ],
  },
];
