"use client";

import { useState } from "react";


export default function NewItem({onAddItem}){
  const [quantity, setQuantity]= useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

const increment = () => {
    if(quantity < 20) {
      setQuantity(quantity +1);
    }
  };
   const decrement = () => {
    if(quantity > 1) {
      setQuantity(quantity -1);
    }
   };

   const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: Math.random().toString(36).slice(2, 9),
      name, quantity, category: category.toLowerCase(),
    };
    console.log("Submitting item:", item );

    onAddItem(item);
    
    setName("");
    setQuantity(1);
    setCategory("produce");
   };

  return (
      <div className="w-full max-w-md ">
        <form onSubmit={handleSubmit} className="bg-white p-3 border border-gray-200 rouded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Item Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g., milk, 4 L 🥛 "
              className="w-full px-3.5 py-2 border border-gray-300 rounded-md focus:outline-none focus: ring-blue-300"/>
            </div>
        <p className="text-2xl font-bold text-gray-600">Quantity: 
            <span className='text-2xl font-bold text-gray-600'>{quantity}:</span>
        </p>
       <div className="mb-4">
        <button onClick={decrement}
         disabled={quantity===1}
        className={`text-shadow-lg font-extrabold bg-blue-200 text-black px-7 py-7 rounded-xl cursor-pointer hover:bg-blue-400 hover:shadow-lg transition ease-linear duration-200 mr-4 ${quantity ===1 ? "opacity-50": "" }`}> - </button>
        <button onClick={increment}
        disabled={quantity===20}
        className={`text-shadow-lg font-extrabold bg-green-200 text-black px-7 py-7 rounded-xl cursor-pointer hover:bg-green-400 hover:shadow-lg transition ease-linear duration-200 ${quantity===20 ? "opacity-50" : "" }`}> + </button>
      
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-600 font-medium mb-1">Category</label>
          <select 
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring to-blue-300">

            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen">Frozen</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-300 text-black font-medium py-2 px-4 cursor-pointer hover:bg-purple-400 rounded-md transition ease-linear duration-200">Add Item</button>
        </div>
        </form>
      </div>
  );
}