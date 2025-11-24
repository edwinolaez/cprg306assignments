'use client';

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  if (!items || items.length === 0) {
    return (
      <div className='max-w-md'>
        <div className='mb-4 flex space-x-2'>
          <button
            onClick={() => setSortBy('name')}
            className={`py-1 px-2 rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy('category')}
            className={`py-1 px-2 rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Sort by Category
          </button>
        </div>
        <p className='text-gray-500 text-center py-8'>No items yet. Add your first item!</p>
      </div>
    )
  }

  const sortedItems = [...items].sort((a, b) => {
    const prop = sortBy === 'name' ? 'name' : 'category';
    const aValue = a[prop] || '';
    const bValue = b[prop] || '';
    return aValue.localeCompare(bValue);
  });

  const renderFlatList = () => (
    <ul className="space-y-1">
      {sortedItems.map((item, index) => (
        <Item
          key={item.id || `item-${index}`}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
          onSelect={() => onItemSelect(item)}
        />
      ))}
    </ul>
  );

  const renderGroupedList = () => {
    const grouped = items.reduce((acc, item) => {
      const category = item.category || "uncategorized";
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {});

    const sortedCategories = Object.keys(grouped).sort();

    return (
      <div className="space-y-6">
        {sortedCategories.map((category) => {
          const categoryItems = grouped[category].sort((a, b) => a.name.localeCompare(b.name));
          return (
            <div key={category}>
              <h2 className="text-xl font-semibold capitalize mb-2">{category}</h2>
              <ul className="space-y-1 ml-4">
                {categoryItems.map((item, index) => (
                  <Item
                    key={item.id || `grouped-${category}-${index}`}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={() => onItemSelect(item)}
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    );
  };
  const isGrouped = sortBy === 'category';

  return (
    <div className="max-w-md">
      <div className="mb-4 flex space-x-2">
        <button
          onClick={() => setSortBy('name')}
          className={`py-1 px-2 rounded ${!isGrouped ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`py-1 px-2 rounded ${isGrouped ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort by Category
        </button>
        {/* <button
          onClick={() => setSortBy('name')}
          className={`py-1 px-2 rounded ${!isGrouped ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Group by Category
        </button> */}
      </div>
      {isGrouped ? renderGroupedList() : renderFlatList()}
    </div>
  );
}
