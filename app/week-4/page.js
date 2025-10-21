"use client"
import NewItem from './new-item';

export default function Page () {
  return (
    <main className='min-h-screen p-8 flex justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100'>
      <div>
        <h1 className='text-shadow-blue-800  font-sans text-4xl font-bold mb-5'> Add New Item</h1>
        <section className='rounded border border-black p-6 bg-white box-border w-96'>
        <NewItem/>
        <div>
          <p className='mt-2 text-sm text-gray-800'>Allowed Range: 1-20</p>
        </div>
        </section>
      </div>
    </main>
  );
}