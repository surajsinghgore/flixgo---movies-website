import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex items-center justify-center bg-[#29252a] min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className="bg-[#28252a] boxShadow bg-opacity-70 p-8 rounded-lg w-96">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          FLIX<span className="text-pink-500">GO</span>
        </h1>
        <form>
          <div className="mb-4">
            <input type="email" id="email" className="w-full px-4 py-4 text-sm text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Email" />
          </div>
          <div className="mb-4">
            <input type="password" id="password" className="w-full px-4 py-4 text-sm text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Password" />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full px-4 py-4 text-sm text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="w-full mixColor py-4 text-sm font-semibold text-white  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            SIGN IN
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            already have an account?{" "}
            <Link href="/login" className="text-pink-500 hover:underline">
              Login In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
