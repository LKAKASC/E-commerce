import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; // Correct Footer import

import { Link } from 'react-router-dom';



export default function JinStoreLogin() {
  return (
    <>
      {/* Top Promo Bar - Responsive */}
      <Header />

      {/* Breadcrumb */}
      
      {/* Login/Register Section */}
      <main className="w-full max-w-[400px] mx-auto px-4 sm:px-6 md:px-8 py-12">
  <div className="flex space-x-6 justify-center mb-6 select-none">
    <button className="font-semibold text-gray-900 border-b-2 border-gray-900 pb-1">
      Login
    </button>
    <button className="font-semibold text-gray-900 cursor-default" disabled>
        {/* <Link to="/Ragitation" className="hover:underline">yashx</Link> */}
        <Link to="/Ragitation" className="hover:underline">Ragitation</Link>
    </button>
  
  </div>
  <p className="text-[11px] md:text-sm text-center mb-6 select-text">
    If you have an account, sign in with your username or email address.
  </p>
  <form className="space-y-4 text-[12px] md:text-sm">
    <div>
      <label className="block mb-1" htmlFor="username">
        Username or email address
        <span className="text-red-600"> *</span>
      </label>
      <input 
        className="w-full border border-gray-300 rounded-md py-2 px-3 text-xs md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4B9B]" 
        id="username" 
        required 
        type="text" 
      />
    </div>
    <div>
      <label className="block mb-1" htmlFor="password">
        Password
        <span className="text-red-600"> *</span>
      </label>
      <input 
        className="w-full border border-gray-300 rounded-md py-2 px-3 text-xs md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4B9B]" 
        id="password" 
        required 
        type="password" 
      />
    </div>
    <div className="flex justify-between items-center text-[11px] md:text-sm">
      <label className="flex items-center space-x-2 select-text">
        <input className="w-3 h-3 border border-gray-300 rounded-sm" type="checkbox" />
        <span>Remember me</span>
      </label>
      <a className="text-[#3B82F6] hover:underline" href="#">
        Lost your password?
      </a>
    </div>
    <button 
      className="w-full bg-[#5B4B9B] text-white text-xs md:text-sm font-semibold py-2 rounded-md hover:bg-[#4a3a85] transition-colors" 
      type="submit"
    >
      Log in
    </button>
  </form>
</main>

        <Footer />
          </>
        );
      }
      
      