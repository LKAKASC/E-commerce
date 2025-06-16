import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; // Correct Footer import


import { FaArrowRight, FaHeart, FaStar, FaStarHalfAlt, FaTruck, FaThLarge, FaThList, FaTimes } from 'react-icons/fa';


export default function EmptyCartPage() {
  return (
    <>

    <Header />

      {/* Main Content */}
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Empty Cart Message */}
  <div className="flex flex-col items-center text-center py-16 sm:py-20">
    <div className="text-5xl sm:text-6xl mb-6">📦</div>
    <h2 className="text-red-600 font-semibold text-lg sm:text-xl md:text-2xl mb-4">
      YOUR CART IS CURRENTLY EMPTY.
    </h2>
    <button className="bg-black text-white text-sm sm:text-base px-6 py-2 rounded hover:bg-gray-800 transition">
      Return to Shop
    </button>
  </div>
</div>

    <Footer />
     </>
            );
          }
