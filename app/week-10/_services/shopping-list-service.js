import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * Retrieves all items for a specific user from Firestore
 * @param { string } userId - The user's unique ID
 * @returns {Promise<Array>} Array of items with id and data
 */

export async function getItems(userId) {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");

    const itemsQuery = query(itemsCollectionRef);

    const querySnapshot = await getDocs(itemsQuery);

    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
}
/**
 * Adds a new item to a specific user's ;ist in Firestore
 * @param {string} userID - the user's unique ID
 * @param {Object} item - The item object to add (should contain name, quantity, category)
 * @returns {Promise<string>} The ID of the newlt created document
 */
 export async function addItem(userId, item) {
      try {
        const itemsCollectionRef = collection(db, "users", userId, "items");

        const docRef = await addDoc(itemsCollectionRef, item);

        return docRef.id;
      } catch (error) {
        console.error("Error adding item:", error);
        throw error;
      }
 }
  