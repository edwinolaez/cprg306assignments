'use client';

import { useUserAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import router from "next/router";


export default function Page() {
  const { user, gitHubSignIn,firebaseSignOut } = useUserAuth();
  
  const handleSignIn = async() => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Failed to sign in. Are you sure what you are doing? Wanna try again?");
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-9");
    } catch (error) {
      console.error("Error signing out: You need help?", error);
    }
  };

  return(
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Shopping List </h1>
          <p className="text-gray-500">Secure authentication with GitHub then maybe you can start shopping</p>
        </header>

        {!user ? (
          <div className="text-center">
            <p className="text-gray-700 mb-6">Please sign in so you can start Shopping</p>
            <button onClick={handleSignIn}
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center mx-auto gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.20711.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/> 
              </svg> Sign in with GitHub
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-6">{user.photoURL && ( 
              <img
               src={user.photoURL} 
               alt="Profile"
              className="w-24 h-24 rouded-full mx-auto mb-4 border-4 border-indigo-200"
              /> 
          )}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome, {user.displayName || "User"}!</h2>
        <p className="text-gray-600 mb-1">{user.email}</p>
      </div>

      <div className="space-y-3">
        <Link href="/week-9/shopping-list" className="block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"> Go to Shopping List, Now you can Shop
        </Link>
        <button onClick={handleSignOut}
        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-200">
           Sign Out </button>
      </div>
      </div>
  )}
  </div>
  </main>
  );
}