import ItemList from './item-list.js';
import Item from './item.js';
import NewItem from './new-item.js';
import itemsData from './items.json';

export default function Page () {
  return (
    <main className='min-h-screen flex flex-cols items-center justify-center p-5 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100'>
      <div className='w-full max-w-2xl'>
      <h1 className='text-3xl font-sans font-bold text-left text-blue-700 mb-2 mt-0'>Shopping List</h1>
      <ItemList/>
      </div>
    </main>
  ); 
}