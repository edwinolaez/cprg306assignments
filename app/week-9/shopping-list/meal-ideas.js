"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      if (ingredient) {
        const mealIdeas = await fetchMealIdeas(ingredient);
        
        setMeals(mealIdeas);
      } else {
        setMeals([]);
      }
    }
    loadMealIdeas();
  }, [ingredient]);
  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Meal Ideas</h2>

      {ingredient ? (
        <>
          <p className="text-lg text-gray-600 mb-3">
            Youcan make this dishes with this ingredient!!<span className="font-semibold text-blue-600">{ingredient}</span>:
          </p>

          {meals.length > 0 ? (
            <ul className="space-y-2">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                   className="bg-white border border-gray-200 rounded lg p-3 shadow hover:shadow-md transition ">
                    <div className="flex items-center gap-3">
                      <img 
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="w-16 h-16 rounded object-cover"/>
                    <span className="text-gray-800 font-medium">{meal.strMeal}</span>
                  </div>
                   </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No meal ideas found for {ingredient}.</p>
      )}
      </>
    ) : (
      <p className="text-gray-500 italic">Select an item to see meals ideas</p>
    )}
    </div>
  );
}