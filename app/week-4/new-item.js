"use client";
import { useState } from "react";


export default function NewItem(){
  const [quantity, setQuantity]= useState(1);

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

  return (
      <div className="flex flex-col ">
        <p className="text-2xl font-bold text-gray-600">Quantity: 
            <span className='text-2xl font-bold text-gray-600'>{quantity}:</span>
        </p>
       <div className="flex gap-4">
        <button onClick={decrement}
         disabled={quantity===1}
        className={`text-shadow-lg font-bold bg-blue-200 text-black px-7 py-7 rounded-xl cursor-pointer hover:bg-fuchsia-200 hover:shadow-lg transition ease-linear duration-200 ${quantity ===1 ? "opacity-50": "" }`}> - </button>
        <button onClick={increment}
        disabled={quantity===20}
        className={`text-shadow-lg font-bold bg-green-100 text-black px-7 py-7 rounded-xl cursor-pointer hover:bg-amber-200 hover:shadow-lg transition ease-linear duration-200 ${quantity===20 ? "opacity-50" : "" }`}> + </button>
        </div>
      </div>
  );
}