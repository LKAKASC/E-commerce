import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; // Correct Footer import

import { Link } from 'react-router-dom';



export default function Ragitation() {
  return (
    <>
      {/* Top Promo Bar - Responsive */}
      <Header />

      {/* Breadcrumb */}
      
      {/* Login/Register Section */}
     <main className="max-w-[400px] mx-auto px-4 py-12">
        <div className="flex space-x-6 justify-center mb-6 select-none">
          <button className="font-semibold text-gray-400 cursor-default border-b-2  pb-1 disabled">
             <Link to="/JinStoreLogin" className="">Login</Link>
          </button>
          <button className="font-semibold text-gray-900     border-gray-900" >
            Register
          </button>
        </div>
        <p className="text-[11px] text-center mb-6 select-text">
          If you have an account, sign in with your username or email address.
        </p>
        <form className="space-y-4 text-[12px]">
          <div>
            <label className="block mb-1" htmlFor="username">
              Username 
              <span className="text-red-600"> *</span>
            </label>
            <input 
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-xs placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4B9B]" 
              id="username" 
              required 
              type="text" 
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">
              Email Address
              <span className="text-red-600"> *</span>
            </label>
            <input 
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-xs placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4B9B]" 
              id="password" 
              required 
              type="password" 
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="password">
              Password
              <span className="text-red-600"> *</span>
            </label>
            <input 
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-xs placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4B9B]" 
              id="password" 
              required 
              type="password" 
            />
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <label className="flex items-center space-x-2 select-text">
              <input className="w-3 h-3 border border-gray-300 rounded-sm" type="radio" />
              <span>I am Customer </span>
            </label>
            
          </div>
          <div className="flex justify-between items-center text-[11px]">
            <label className="flex items-center space-x-2 select-text">
              <input className="w-3 h-3 border border-gray-300 rounded-sm" type="radio" />
              <span>I am Vendor </span>
            </label>
            
          </div>
          <button 
            className="w-full bg-[#5B4B9B] text-white text-xs font-semibold py-2 rounded-md hover:bg-[#4a3a85] transition-colors" 
            type="submit"
          >
 Ragitation

          </button>
        </form>
      </main>
        <Footer />
          </>
        );
      }
      
      