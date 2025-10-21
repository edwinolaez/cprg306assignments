import ItemList from './item-list.js';
import Item from './item.js';

export default function Page () {
  return (
    <main className='min-h-screen flex flex-cols items-center justify-center p-5 bg-amber-50 '>
      <div className='w-full max-w-2xl'>
      <h1 className='text-5xl font-sans  text-left text-blue-700 mb-2 mt-0'>Shopping List</h1>
      <ItemList/>
      </div>
    </main>
  ); 
}