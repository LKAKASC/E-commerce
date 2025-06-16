import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; // Correct Footer import


import { FaArrowRight, FaHeart, FaStar, FaStarHalfAlt, FaTruck, FaThLarge, FaThList, FaTimes } from 'react-icons/fa';
export const filterProducts = [
  {
    id: 1,
    img: "https://source.unsplash.com/featured/?apple,fruit",
    discount: "-20%",
    title: "Fresh Apple",
    price: 2.99,
    oldPrice: 3.99,
    rating: 4,
    isOrganic: true,
    inStock: true,
    category: "Fruits & Vegetables",
  },
  {
    id: 2,
    img: "https://source.unsplash.com/featured/?banana,fruit",
    discount: "-10%",
    title: "Organic Banana",
    price: 1.49,
    oldPrice: 1.69,
    rating: 5,
    isOrganic: true,
    inStock: true,
    category: "Fruits & Vegetables",
  },
  {
    id: 3,
    img: "https://source.unsplash.com/featured/?broccoli,vegetable",
    discount: "-18%",
    title: "Broccoli Fresh",
    price: 1.99,
    oldPrice: 2.49,
    rating: 5,
    isOrganic: true,
    inStock: true,
    category: "Fruits & Vegetables",
  },
  {
    id: 4,
    img: "https://source.unsplash.com/featured/?tomato,vegetable",
    discount: "-15%",
    title: "Tomato Red",
    price: 0.89,
    oldPrice: 1.29,
    rating: 4,
    isOrganic: false,
    inStock: true,
    category: "Fruits & Vegetables",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },


  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },{
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },
  {
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },{
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },{
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },{
    id: 5,
    img: "https://source.unsplash.com/featured/?spinach,leafy",
    discount: "-12%",
    title: "Fresh Spinach",
    price: 1.29,
    oldPrice: 1.49,
    rating: 4,
    isOrganic: true,
    inStock: false,
    category: "Fruits & Vegetables",
  },
];

export default function Filter() {
  return (
    <>

    <Header />

      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-4 py-3 text-xs text-gray-500 select-none">
        {/* <span>Home ›</span> */}
        {/* <span className="ml-1">My account  yash</span> */}
      </div>

<main className="max-w-[400px] sm:max-w-xl md:max-w-6xl mx-auto px-4 py-12">
  <div className="flex flex-col md:flex-row md:space-x-6">
    {/* Sidebar */}
    <aside className="w-full md:w-60 flex-shrink-0 mb-8 md:mb-0">
      {/* Widget price filter */}
      <div className="mb-8">
        <h3 className="text-[13px] font-semibold mb-2 select-none">Widget price filter</h3>
        <form className="text-[11px] text-gray-700 space-y-2" onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center space-x-2">
            <input
              aria-label="Min price"
              className="w-14 h-7 rounded border border-gray-300 text-[11px] px-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
              max="30"
              min="0"
              type="number"
              defaultValue="0"
            />
            <input
              aria-label="Max price"
              className="w-14 h-7 rounded border border-gray-300 text-[11px] px-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
              max="30"
              min="0"
              type="number"
              defaultValue="30"
            />
          </div>
          <input
            aria-label="Price range slider"
            className="w-full h-1 rounded-lg accent-gray-600 cursor-pointer"
            max="30"
            min="0"
            type="range"
            defaultValue="15"
          />
          <div className="flex justify-between text-[11px] text-gray-700 select-none">
            <span>Price: $0</span>
            <span>$30</span>
          </div>
          <button
            className="mt-2 w-full bg-gray-700 text-white text-[11px] font-semibold py-1 rounded hover:bg-gray-800 transition"
            type="submit"
          >
            Filter
          </button>
        </form>
      </div>

      {/* Product Categories */}
      <div className="mb-8">
        <h3 className="text-[13px] font-semibold mb-3 select-none">Product Categories</h3>
        <form className="text-[11px] text-gray-700 space-y-2 select-none">
          {["Fruits & Vegetables", "Baby & Pregnancy", "Beverages", "Meats & Seafood", "Biscuits & Snacks", "Breads & Bakery", "Breakfast & Dairy", "Frozen Foods", "Grocery & Staples", "Healthcare", "Household Needs"].map((category, index) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input
                className="w-3 h-3"
                type="checkbox"
                defaultChecked={category === "Beverages"}
                style={category === "Beverages" ? { accentColor: "#7e22ce" } : {}}
              />
              <span className={category === "Beverages" ? "text-purple-700" : ""}>{category}</span>
              <span className="ml-auto text-gray-400 font-bold text-lg">+</span>
            </label>
          ))}
        </form>
      </div>

      {/* Product Status */}
      <div>
        <h3 className="text-[13px] font-semibold mb-3 select-none">Product Status</h3>
        <form className="text-[11px] text-gray-700 space-y-2 select-none">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input className="w-3 h-3" type="checkbox" />
            <span>In Stock</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input className="w-3 h-3" type="checkbox" />
            <span>On Sale</span>
          </label>
        </form>
      </div>
    </aside>

    {/* Right Content Area */}
    <div className="flex-1">
      {/* Filters Summary */}
      <div className="flex flex-wrap items-center text-[11px] text-gray-600 mb-4 select-none">
        <button className="flex items-center space-x-1 mr-4">
          <FaTimes className="text-xs" />
          <span>Clear filters</span>
        </button>
        <span className="mr-4 font-semibold">Beverages</span>
      </div>

      {/* Promo Banner */}
      <section className="relative bg-gray-50 rounded-lg overflow-hidden mb-6 flex flex-col md:flex-row items-center md:items-stretch" style={{ minHeight: "140px" }}>
        <div className="p-4 md:p-6 flex-1 max-w-md md:max-w-none">
          <span className="inline-block bg-amber-300 text-[9px] font-semibold text-amber-900 rounded px-2 py-0.5 mb-1 select-none">
            Only This Week
          </span>
          <h2 className="font-semibold text-gray-900 text-[15px] leading-tight mb-1">
            Grocery store with different treasures
          </h2>
          <p className="text-[11px] text-gray-600 mb-3 leading-tight">
            We have prepared special discounts for you on grocery products...
          </p>
          <button className="inline-flex items-center space-x-1 text-[11px] font-semibold text-gray-900 border border-gray-900 rounded px-3 py-1 hover:bg-gray-900 hover:text-white transition">
            <span>Shop Now</span>
            <FaArrowRight className="text-[10px]" />
          </button>
        </div>
      </section>

      {/* Product List */}
     <section aria-label="Product list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-[10px] text-gray-700 select-none">
  {filterProducts.map((product) => (
    <article key={product.id} className="border border-gray-200 rounded p-2 flex flex-col">
      <div className="relative">
        <span className="absolute top-1 left-1 bg-red-600 text-white text-[9px] font-semibold rounded px-1 select-none">
          {product.discount}
        </span>
        <img
          alt={product.title}
          className="w-full h-28 object-contain mb-1"
          src={product.img}
          loading="lazy"
        />
        <button
          aria-label="Add to wishlist"
          className="absolute top-1 right-1 text-gray-400 hover:text-red-600 focus:outline-none"
        >
          <FaHeart className="text-[14px]" />
        </button>
      </div>

      <div className="flex flex-col flex-1">
        {product.isOrganic && (
          <div className="flex items-center space-x-1 mb-0.5">
            <span className="bg-green-600 text-[8px] font-semibold text-white rounded px-1 select-none">
              ORGANIC
            </span>
          </div>
        )}
        <h3 className="font-semibold text-[11px] leading-tight mb-0.5">{product.title}</h3>

        <div className="flex items-center space-x-1 mb-0.5">
          {[...Array(product.rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400 text-[10px]" />
          ))}
        </div>

        <div className="flex items-center space-x-1 mb-1">
          <span className="text-green-600 font-semibold">${product.price}</span>
          <span className="line-through text-gray-400 text-[9px]">${product.oldPrice}</span>
        </div>

        <div className="flex items-center space-x-1 text-[9px] font-semibold text-green-600">
          <FaTruck />
          <span>{product.inStock ? "IN STOCK" : "OUT OF STOCK"}</span>
        </div>
      </div>
    </article>
  ))}
</section>

    </div>
  </div>
</main>

    <Footer />
              </>
            );
          }