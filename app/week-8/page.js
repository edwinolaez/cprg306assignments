"use client";

import {useState} from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './items.json';
import MealIdeas from './meal-ideas.js';

export default function Page () {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemname] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      console.log("Updated items:", updatedItems);
      return updatedItems;
    });
  };

  const handleItemSelect = (item) => {
    let cleanedName = item.name.split(',')[0];
    cleanedName = cleanedName.replace (/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    cleanedName = cleanedName.trim();

    console.log("Item name:", item.name);
    console.log("Cleaned ingredient name:", cleanedName);

    setSelectedItemname(cleanedName);
  }

  return (
    <main className='min-h-screen flex flex-cols items-center justify-center p-5 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100'>
      <div className='max-w-7xl mx-auto flex flex-row gap-6'>
      <div className='w-1/2'>
      <h1 className='text-3xl font-sans font-bold text-left text-blue-700 mb-2 mt-0'>Shopping List</h1>
      <NewItem onAddItem={handleAddItem}/>
      <ItemList items={items} onItemSelect={handleItemSelect}/>
      </div>

      <div className='w-1/2'>
        <MealIdeas ingredient={selectedItemName} />
      </div>
      </div>
    </main>
  ); 
}