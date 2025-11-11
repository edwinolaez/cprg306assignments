'use client';

import { useUserAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from './items.json';
import MealIdeas from "./meal-ideas.js";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  
  useEffect (() => {
    if (user == null) {
      router.push("/week-9");
    }
  }, [user, router]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems, NewItem];
      console.log("Updated items:", updatedItems);
      return updatedItems;
    });
  };

  const handleItemSelect = (item) => {
    let cleanedName = item.name.split (',')[0];
    cleanedName = cleanedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,'');
    cleanedName = cleanedName.trim();

    console.log("Item name:", item.name);
    console.log("Cleaned ingredient name:", cleanedName);

    setSelectedItemName(cleanedName);
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-9");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
        <div className="text-center bg-white p-10 rounded-2xl shadow-2xl">
          <div className="animate-pulse mb-6">
            <div className="h-5 bg-purple-200 rounded w-64 mx-auto mb-3"></div>
            <div className="h-4 bg-purple-100 rounded w-48 mx-auto"></div>
          </div>
          <p className="text-2xl text-purple-700 font-bold">Checking Authentication....</p>
          <p className="text-purple-500 mt-2">Redirecting to log in page...</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <header className="bg-white/95 backdrop-blur-smt border-b border-purple-200 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {user.photoURL && (
            <img src={user.photoURL} alt="Profile" className="w-14 h-14 rounded-full border-4 border-purple-300 shadow-md"/>
          )}
        <div>
          <h1 className="text-3xl font-bold text-purple-800">Shopping List</h1>
          <p className=" text-purple-600">{user.displayName || user.email}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Link 
          href="/week-9"
          className="px-5 py-2.5 bg-purple-100 text-purple-800  font-medium  rounded-lg hover:bg-purple-200 transition ">
           Home </Link> 
        <button onClick={handleSignOut} className="px-5 py-2.5 font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition "> Sign Out</button>
      </div>
      </div>
    </header>

    <main className="min-h-screen p-8 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-purple-200"></div>
          <NewItem onAddItem={handleAddItem} />

          <div className="mt-10">
          <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
         </div>
     

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-purple-200 h-fit">
              <MealIdeas ingredient={selectedItemName} />
            </div>
           </div>
    </main>
    </>
  );
}

