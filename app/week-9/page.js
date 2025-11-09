'use client';

import { useUserAuth } from "../contexts/AuthContext";
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

  const handleAddItem = (NewItem) => {
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
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <div className="animate-pulse mb-4">
            <div className="h-4 bg-gray-300 rounded w-48 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-32 mx-auto"></div>
          </div>
          <p className="text-xl text-gray-700 mb-2">Checking Authentication....</p>
          <p className="text-gray-500">Redirecting to log in page...</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {user.photoURL && (
            <img src={user.photoURL} alt="Profile" className="w-12 h-12 rounded-full border-3 border-white shadow-md"/>
          )}
        <div>
          <h1 className="text-2xl font-bold text-white">Shopping List</h1>
          <p className="text-sm text-blue-100">{user.displayName || user.email}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <Link 
          href="/week-9"
          className="px-4 py-2 text-sm font-medium text-blue-600 bg-white rounded-md hover:bg-blue-50 transition shadow-sm ">
           Home </Link> 
        <button onClick={handleSignOut} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition shadow-sm"> Sign Out</button>
      </div>
      </div>
    </header>

    <main className="min-h-screen flex flex-cols items-center justify-center p-5 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-7xl mx-auto flex flex-row gap-6">
          <div className="w-1/2">
          <h2 className="text-3xl font-sans font-bold text-left text-blue-700 mb-2 mt-0">
            My Items
          </h2>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
      </div>
    </main>
    </>
  );
}

