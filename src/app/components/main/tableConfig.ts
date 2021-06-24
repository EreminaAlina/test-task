import { DataItem } from '../../interfaces/table_interface';

export const listOfColumn = [
  {
    title: 'Rank',
    sortFn: (a: DataItem, b: DataItem) => a.rank - b.rank,
    priority: 1
  },
  {
    title: 'Name',
    sortFn: null,
    priority: 2
  },
  {
    title: 'Price',
    sortFn: (a: DataItem, b: DataItem) => a.price - b.price,
    priority: 3
  },
];
