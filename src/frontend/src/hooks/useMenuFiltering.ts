import { useMemo, useState } from 'react';
import { menuItems, type MenuItem } from '../data/menu';

export function useMenuFiltering() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showVegOnly, setShowVegOnly] = useState(false);
  const [showNonVegOnly, setShowNonVegOnly] = useState(false);

  const filteredItems = useMemo(() => {
    let items = menuItems;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    // Apply veg/non-veg filter
    if (showVegOnly && !showNonVegOnly) {
      items = items.filter((item) => item.isVeg);
    } else if (showNonVegOnly && !showVegOnly) {
      items = items.filter((item) => !item.isVeg);
    }

    return items;
  }, [searchQuery, showVegOnly, showNonVegOnly]);

  const isEmpty = filteredItems.length === 0;

  return {
    searchQuery,
    setSearchQuery,
    showVegOnly,
    setShowVegOnly,
    showNonVegOnly,
    setShowNonVegOnly,
    filteredItems,
    isEmpty
  };
}
