import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-emerald-900 p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h1 className="text-2xl font-bold text-center mb-8 text-white">Login</h1>

          <form className="mt-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Isi dengan email Anda"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Isi dengan password Anda"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mt-6">
              <Link href="../admin">
                <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign In
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
