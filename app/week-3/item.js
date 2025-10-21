export default function Item ({name, quantity, category}) {
  return (
      <div className="w-full max-w-xxl bg-amber-50 dark:bg-amber-300 border border-gray-200 rounded-lg mb-3 mx-auto p-4 shadow">
        <h2 className="text-lg font-semibold mb-2 text-black">{name}</h2>
        <p className="mb-1">Quantity:{quantity}</p>
        <p>Category: {category}</p>
      </div>
 );
}