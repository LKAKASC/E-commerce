import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; // Correct Footer import

import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from 'react-icons/fa';



const blogPosts = [
  {
    img: "https://storage.googleapis.com/a1aa/image/969b643e-8125-41d7-6035-f3dbbbc46a4e.jpg",
    title: "How grocers are approaching delivery as the market evolves",
    date: "November 3, 2023",
    tags: "Kitchener, store, themeforest",
    excerpt:
      "Ett bråvakt! Inskakade i nited den mobilnäsbrukar demyn lyn rhöning oak heterostetk i ull artan. Palinas tumsaksa och tenbiv servicebren reyna om än muren för förnde styri i vobba, och hyng svart esam, plahsten. Poytlesien inn afta ora och päl förflyttheten...",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/969b643e-8125-41d7-6035-f3dbbbc46a4e.jpg",
    title: "The Friday Checkout: Food insecurity keeps retailers off balance",
    date: "November 4, 2023",
    tags: "Retail, food, insecurity",
    excerpt:
      "Food insecurity is a growing concern for retailers as market dynamics shift. Retailers are adapting to new challenges and finding innovative solutions...",
  },
  {
    img: "https://storage.googleapis.com/a1aa/image/5d526f69-0ca1-48b1-82d8-c2c759e4fa14.jpg",
    title: "Consumer want grocer to use AI to help them save money",
    date: "November 5, 2023",
    tags: "AI, consumer, savings",
    excerpt:
      "Consumers are increasingly looking for grocers to leverage AI technology to provide better deals and personalized savings opportunities...",
  },
];


export default function Blogpage() {
  return (
    <>
      {/* Top Promo Bar - Responsive */}
      <Header />

      {/* Your page content will go here */}
            <div className="max-w-[1200px] mx-auto px-4 py-3 text-xs text-gray-500 select-none">
        
      </div>

      {/* Login/Register Section */}
     <main className="max-w-6xl mx-auto px-2 py-12">
  <div className="flex flex-col md:flex-row md:space-x-6">
    
    {/* Left Column */}
    <div className="w-full md:w-[65%]">
      {blogPosts.map((post, idx) => (
        <div key={idx} className={idx > 0 ? "mt-10" : ""}>
          <img src={post.img} alt="Blog" className="w-full h-[350px] rounded" />
          <h1 className="mt-4 text-2xl font-bold text-gray-900">{post.title}</h1>
          <div className="mt-1 text-xs text-gray-500 flex flex-wrap gap-2">
            <span>{post.date}</span>
            <span>›</span>
            <span>{post.tags}</span>
          </div>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">{post.excerpt}</p>
          <button
            type="button"
            className="mt-5 bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold rounded px-4 py-2"
          >
            Read More
          </button>
        </div>
      ))}
    </div>


    {/* Right Sidebar */}
    <aside className="w-full md:w-[35%]  p-5 rounded mt-10 md:mt-0">
      
      {/* Blog Post List */}
      <div className="mb-10">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Recent Blog Posts</h2>
        <ul className="space-y-4">
          {blogPosts.map((post, index) => (
            <li key={index} className="flex items-start space-x-3">
              <img
                src={post.img}
                alt={post.title}
                className="w-12 h-14   rounded object-cover"
              />
              <div className="text-xs text-gray-900">
                <p className="font-semibold">{post.title}</p>
                <p className="text-gray-500">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Links */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h2>
        <div className="space-y-2">
          <a href="#" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded py-2">
            Facebook
          </a>
          <a href="#" className="block w-full text-center bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold rounded py-2">
            Twitter
          </a>
          <a href="#" className="block w-full text-center bg-pink-500 hover:bg-pink-600 text-white text-xs font-semibold rounded py-2">
            Instagram
          </a>
        </div>
      </div>
    </aside>
  </div>
</main>
      
      <Footer />
    </>
  );
}
