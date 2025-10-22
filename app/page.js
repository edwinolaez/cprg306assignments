/*import "tailwindcss";
import Link from "next/link";


export default function Page() {
  return (
  <main className="flex items-center bg-cover bg-center">
    <div>
    <div>
    <strong>CPRG 306: Web Development 2 - Assignments</strong>
    </div>
      <section>
        <Link href="/week2">Go to Week 2</Link>
        <Link href="/week3">Go to Week 3</Link>
        <Link href="/week4">Go to Week 4</Link>
      </section>
    </div>
  </main>
  );
}*/
import NewItem from "./week-7/new-item";
import ItemList from "./week-7/item-list";
import itemsData from "./week-7/items.json";

import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="text-center mb-8">
          <strong className="text-2xl font-bold text-gray-800">
            CPRG 306: Web Development 2 - Assignments
          </strong>
        </div>
        <section className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/week-2"
            className="flex-1 min-w-[150px] text-center py-3 px-4 bg-pink-200 text-gray-700 rounded-md hover:bg-pink-300 transition-colors duration-200"
          >
            Week 2
          </Link>
          <Link
            href="/week-3"
            className="flex-1 min-w-[150px] text-center py-3 px-4 bg-purple-200 text-gray-700 rounded-md hover:bg-purple-300 transition-colors duration-200"
          >
            Week 3
          </Link>
          <Link
            href="/week-4"
            className="flex-1 min-w-[150px] text-center py-3 px-4 bg-blue-200 text-gray-700 rounded-md hover:bg-blue-300 transition-colors duration-200"
          >
            Week 4
          </Link>
          <Link
            href="/week-5"
            className="flex-1 min-w-[150px] text-center py-3 px-4 bg-pink-200 text-gray-700 rounded-md hover:bg-pink-300 transition-colors duration-200"
          >
            Week 5
          </Link>
          <Link
            href="/week-6"
            className="flex-1 min-w-[150px] text-center py-3 px-4 bg-purple-200 text-gray-700 rounded-md hover:bg-purple-300 transition-colors duration-200"
          >
            Week 6
          </Link>
          <Link
            href="/week-7"
            className="flex-1 min-w-[150px] text-center py-3 px-4 bg-blue-200 text-gray-700 rounded-md hover:bg-blue-300 transition-colors duration-200"
          >
            Week 7
          </Link>
          {/* Add more weeks here as needed */}
        </section>
      </div>
    </main>
  );
}