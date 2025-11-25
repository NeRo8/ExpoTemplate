import { useState } from 'react';

import { SegmentItem } from '@components/pickers/SegmentControll';

const data: SegmentItem[] = [
  { id: 'rent', title: 'Rent' },
  { id: 'buy', title: 'Buy' },
];

export const useSearch = () => {
  const [activeId, setActiveId] = useState('rent');
  const [query, setQuery] = useState('');
  const [results, _setResults] = useState([]);

  return { activeId, query, results, data, setQuery, setActiveId };
};
