import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import sliderImg from './assets/slider-03.jpg';
import magicImg from './assets/magic.jpg';
import lemaonImg from './assets/magic.jpg';
import chocoImg from './assets/choco.jpg';
import juiceImg from './assets/magic.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as regularHeart,
  faStar as solidStar,
  faStarHalfAlt,
  faLeaf,
  faSnowflake,
  faCartPlus
} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const items = [
  {
    discount: '75%',
    image: 'https://storage.googleapis.com/a1aa/image/64507e6b-9dd1-4be2-ccfc-70998165f0fa.jpg',
    label: 'ORGANIC',
    title: '100 Percent Apple Juice - 64 fl oz Bottle',
    price: '$0.50',
    oldPrice: '$1.99',
  },
  {
    discount: '58%',
    image: 'https://storage.googleapis.com/a1aa/image/84513653-793d-4c4b-e9ad-ffad9b2360b2.jpg',
    label: 'ORGANIC',
    title: 'Cantaloupe Melon Fresh Organic Cut',
    price: '$1.25',
    oldPrice: '$2.98',
  },
  {
    discount: '31%',
    image: 'https://storage.googleapis.com/a1aa/image/014e1563-3b24-4fb2-08b4-9e6e05afe68d.jpg',
    title: 'Vital Farms Pasture-Raised Grade A Large Eggs - 12ct',
    price: '$3.99',
    oldPrice: '$4.98',
  },
  {
    discount: '13%',
    image: 'https://storage.googleapis.com/a1aa/image/3da967e3-197c-4e4f-146e-764edd409d56.jpg',
    title: 'Tillamook Medium Cheddar Cheese Loaf - 32oz',
    price: '$6.99',
    oldPrice: '$7.99',
  },
  {
    discount: '18%',
    image: 'https://storage.googleapis.com/a1aa/image/0618a874-d580-4e3e-af7f-de20b6a8f908.jpg',
    title: 'Silk Dairy Free, Gluten Free, Vanilla Almond Milk, 64 fl oz',
    price: '$4.60',
    oldPrice: '$5.60',
  },



  {
    discount: '58%',
    image: 'https://storage.googleapis.com/a1aa/image/84513653-793d-4c4b-e9ad-ffad9b2360b2.jpg',
    label: 'ORGANIC',
    title: 'Cantaloupe Melon Fresh Organic Cut',
    price: '$1.25',
    oldPrice: '$2.98',
  },
];


const offers = [
  {
    title: 'We provide you the best quality products',
    desc: 'Only this week. Don’t miss...',
    img: 'https://storage.googleapis.com/a1aa/image/fbea2dc6-0ed9-4ee9-038e-acbf12a2302d.jpg',
    alt: 'Acai berry cup with strawberries',
  },
  {
    title: 'We make your grocery shopping more exciting',
    desc: 'Feed your family the best',
    img: 'https://storage.googleapis.com/a1aa/image/622c520d-8033-4f5c-9852-c94b73d68374.jpg',
    alt: 'Orange juice bottle with sliced oranges',
  },
  {
    title: 'The one supermarket that saves your money',
    desc: 'Eat one every day',
    img: 'https://storage.googleapis.com/a1aa/image/ce84590d-8ee1-4846-fc94-c00454224aa8.jpg',
    alt: 'Loaf of brown bread',
  },
];
const products = [
  {
    id: 1,
    discount: "75%",
    img: "https://storage.googleapis.com/a1aa/image/108d6664-c76d-4fd6-cfc8-a80f81c33e4f.jpg",
    tag: "ORGANIC",
    tagColor: "green",
    title: "100 Percent Apple Juice – 64 fl oz Bottle",
    price: "$0.50",
    originalPrice: "$1.99",
    stock: 23
  },
  {
    id: 2,
    discount: "11%",
    img: "https://storage.googleapis.com/a1aa/image/399a0407-a304-4932-37ed-e9d2372318cd.jpg",
    tag: "COLD SALE",
    tagColor: "sky",
    title: "Great Value Rising Crust Frozen Pizza, Supreme",
    price: "$8.99",
    originalPrice: "$9.89",
    stock: 18
  },
  {
    id: 3,
    discount: "41%",
    img: "https://storage.googleapis.com/a1aa/image/bb3a6b47-8b4b-4f60-2e4b-99e3124fa06a.jpg",
    tag: null,
    tagColor: null,
    title: "Simply Orange Pulp Free Juice – 52 fl oz",
    price: "$2.45",
    originalPrice: "$4.13",
    stock: 27
  },
  {
    id: 4,
    discount: "21%",
    img: "https://storage.googleapis.com/a1aa/image/cc35b708-1f7e-45e8-b59c-72cdc6973c0b.jpg",
    tag: "COLD SALE",
    tagColor: "sky",
    title: "California Pizza Kitchen Margherita, Crispy  Crust...",
    price: "$11.77",
    originalPrice: "$14.77",
    stock: 19
  },
  {
    id: 5,
    discount: "59%",
    img: "https://storage.googleapis.com/a1aa/image/98c49c8d-164d-4677-bae7-cfa1830f8dbb.jpg",
    tag: "ORGANIC",
    tagColor: "green",
    title: "Cantaloupe Melon Fresh Organic Cut",
    price: "$1.25",
    originalPrice: "$2.98",
    stock: 16
  },
  {
    id: 6,
    discount: "18%",
    img: "https://storage.googleapis.com/a1aa/image/137f6315-af51-4fc0-fd7d-46330e567551.jpg",
    tag: "Mega Rolls",
    tagColor: "sky",
    title: "Angel Soft Toilet Paper, 9 Mega Rolls",
    price: "$14.12",
    originalPrice: "$17.12",
    stock: 32
  },
   {
    id: 2,
    discount: "11%",
    img: "https://storage.googleapis.com/a1aa/image/399a0407-a304-4932-37ed-e9d2372318cd.jpg",
    tag: "COLD SALE",
    tagColor: "sky",
    title: "Great Value Rising Crust Frozen Pizza, Supreme",
    price: "$8.99",
    originalPrice: "$9.89",
    stock: 18
  },
];
const only = [lemaonImg, chocoImg, juiceImg];

const categories = [
  {
    name: "Fruits & Vegetables",
    img: "https://storage.googleapis.com/a1aa/image/5d526f69-0ca1-48b1-82d8-c2c759e4fa14.jpg",
  },
  {
    name: "Baby & Pregnancy",
    img: "https://storage.googleapis.com/a1aa/image/09f0d07b-1ba0-4813-57ca-22d7c7ba8a0a.jpg",
  },
  {
    name: "Beverages",
    img: "https://storage.googleapis.com/a1aa/image/c9368450-aaa7-4fa7-8dbc-fbded9d59532.jpg",
  },
  {
    name: "Meats & Seafood",
    img: "https://storage.googleapis.com/a1aa/image/5720316d-b249-4bfa-37da-8985d53de276.jpg",
  },
  {
    name: "Biscuits & Snacks",
    img: "https://storage.googleapis.com/a1aa/image/46eed90c-100a-4b79-64d0-000cd970cddf.jpg",
  },
  {
    name: "Breads & Bakery",
    img: "https://storage.googleapis.com/a1aa/image/6c476c9b-9892-4c01-7d59-f927150812fb.jpg",
  },
  {
    name: "Breakfsast & Dairy",
    img: "https://storage.googleapis.com/a1aa/image/af351a18-a05d-46c5-a964-c522403bfb46.jpg",
  },
  {
    name: "Frozen Foods",
    img: "https://storage.googleapis.com/a1aa/image/aa48e1ff-ef44-4a0e-b498-336e75ff598a.jpg",
  },
  {
    name: "Grocery & Staples",
    img: "https://storage.googleapis.com/a1aa/image/dc84a7db-a930-4e6e-bf07-836657ee0e52.jpg",
  },
  {
    name: "Meats & Seafood",
    img: "https://storage.googleapis.com/a1aa/image/5720316d-b249-4bfa-37da-8985d53de276.jpg",
  },
];


export default function Home() {
  return (
    <>
      <Header />
      {/* Banner Section */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  {/* Background Image Container */}
  <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-auto md:h-96">
    {/* Background Image */}
    <img
      src={sliderImg}
      alt="Special offers banner"
      className="w-full h-full object-cover"
      loading="eager"
    />
    
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-0"></div>
    
    {/* Content Overlay */}
    <div className="absolute inset-0 flex items-center justify-center md:justify-start p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-lg lg:max-w-xl px-4 sm:px-6 md:px-8 text-center md:text-left">
        {/* Discount Badge - Smaller on small mobiles */}
        <span className="inline-block bg-green-200 text-green-800 text-[11px] xs:text-xs font-semibold px-2 xs:px-3 py-0.5 xs:py-1 rounded-full mb-2 xs:mb-3 md:mb-4">
          Weekend Discount
        </span>

        {/* Heading - Adjusted for small mobiles */}
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white md:text-[#2b174f] mb-2 xs:mb-3 md:mb-4 leading-tight">
          Get the best quality <br className="hidden sm:inline" /> products at the lowest prices
        </h1>

        {/* Description Text - Smaller on small mobiles */}
        <p className="text-xs xs:text-sm sm:text-base text-white md:text-gray-100 mb-3 xs:mb-4 md:mb-6 max-w-md mx-auto md:mx-0">
          Special discounts on organic breakfast products
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col xs:flex-row items-center gap-2 xs:gap-3 sm:gap-4">
          <button className="bg-purple-700 hover:bg-purple-800 text-white text-xs xs:text-sm font-semibold px-4 xs:px-5 py-2 xs:py-2.5 sm:px-6 sm:py-3 rounded-lg transition-colors duration-200 w-full xs:w-auto">
            Shop Now
          </button>
          
          {/* Price Display */}
          <div className="flex flex-col xs:flex-row items-center gap-1 xs:gap-2 text-white md:text-gray-100">
            <div className="flex items-center">
              <span className="text-lg xs:text-xl sm:text-2xl font-bold text-red-300 mr-1 xs:mr-2">$21.67</span>
              <span className="line-through text-xs xs:text-sm">$59.99</span>
            </div>
            <p className="text-[10px] xs:text-xs opacity-80">Limited time offer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
  {/* Category Carousel */}
<div className="relative overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory">
  <ul className="flex min-w-max gap-3 px-2">
    {categories.map((category, index) => (
      <li
        key={index}
        className="flex-shrink-0 flex flex-col items-center p-3 min-w-[90px] xs:min-w-[110px] hover:bg-gray-50 rounded-md snap-start transition"
      >
        <img
          src={category.img}
          alt={category.name}
          className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 object-contain mb-1 xs:mb-2 rounded-full border"
          loading="lazy"
        />
        <span className="text-[10px] xs:text-xs sm:text-sm text-gray-900 font-medium text-center px-1">
          {category.name}
        </span>
      </li>
    ))}
  </ul>
</div>

</div>






  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2 sm:mb-0">
          <h2 className="font-extrabold text-xs uppercase text-black leading-none">
            NEW PRODUCTS
          </h2>
          <p className="text-[10px] text-gray-400 font-normal mt-1 sm:mt-0">
            Some of the new products arriving this week
          </p>
        </div>
        <button className="flex items-center space-x-1 border border-gray-300 rounded-full text-[10px] font-semibold text-gray-700 px-3 py-1 hover:bg-gray-100">
          <span>View All</span>
          <i className="fas fa-arrow-right text-[10px]" />
        </button>
      </div>
      <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-[160px] border border-gray-200 rounded-md p-3 flex flex-col"
          >
            <div className="flex justify-between items-start mb-1">
              <span className="inline-block bg-red-600 text-[9px] font-semibold text-white rounded-full px-2 py-[1px]">
                {product.discount}
              </span>
              <div className="text-gray-300 text-xs font-semibold">...</div>
            </div>
            <img
              src={product.img}
              alt={product.title}
              className="w-24 h-24 object-contain mx-auto mb-2"
            />
            <div className="flex items-center justify-between mb-1">
              {product.tag && (
                <span
                  className={`text-[9px] font-semibold text-${
                    product.tagColor === "green" ? "green-700" : "sky-600"
                  } bg-${
                    product.tagColor === "green" ? "green-100" : "sky-100"
                  } rounded-md px-2 py-[2px] flex items-center space-x-1`}
                >
                  <i
                    className={`fas ${
                      product.tagColor === "green"
                        ? "fa-seedling"
                        : "fa-snowflake"
                    } text-[10px]`}
                  />
                  <span>{product.tag}</span>
                </span>
              )}
              <div className="w-4 h-4 rounded-full bg-purple-700" />
            </div>
            <p className="text-[11px] font-semibold leading-tight mb-0.5">
              {product.title}
            </p>
            <div className="flex items-center space-x-1 mb-1">
              <span className="text-red-600 font-bold text-sm">{product.price}</span>
              <span className="text-gray-400 line-through text-xs">
                {product.originalPrice}
              </span>
            </div>
            <p className="text-[8px] text-gray-400 font-normal mb-1">
              This product is about to run out
            </p>
            <p className="text-[9px] text-gray-600 font-semibold">
              available only: <span className="text-black">{product.stock}</span>
            </p>
            <div className="h-[2px] bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 rounded-full mt-1" />
          </div>
        ))}
      </div>


      </div> 




<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-1">
  {/* Mobile View (single column) */}
  <div className="lg:hidden grid grid-cols-1 gap-4">
    {offers.map((offer, index) => (
      <div key={index} className="relative bg-white rounded-lg overflow-hidden">
        <div className="relative h-48 w-full">
          <img
            src={offer.img}
            alt={offer.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 flex flex-col items-center justify-center p-4 text-center">
            <p className="text-xs sm:text-sm font-semibold text-[#E87B4A] mb-1">Only This Week</p>
            <h2 className="font-semibold text-white text-base sm:text-lg mb-2 px-4">
              {offer.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 mb-4">{offer.desc}</p>
            <button className="inline-flex items-center gap-1 bg-gray-900 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-md">
              Shop Now
              <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Tablet View (horizontal scroll) */}
  <div className="hidden lg:hidden">
    <div className="overflow-x-auto no-scrollbar pb-4">
      <div className="flex space-x-4 w-max">
        {offers.map((offer, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            <div className="relative h-48 w-full rounded-lg overflow-hidden">
              <img
                src={offer.img}
                alt={offer.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 flex flex-col items-center justify-center p-4 text-center">
                <p className="text-sm font-semibold text-[#E87B4A] mb-1">Only This Week</p>
                <h2 className="font-semibold text-white text-lg mb-2">
                  {offer.title.split(' ').slice(0, 4).join(' ')}
                </h2>
                <button className="inline-flex items-center gap-1 bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-md">
                  Shop Now
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Desktop View (original 3-column grid) */}
  <div className="hidden lg:grid grid-cols-3 gap-6">
    {offers.map((offer, index) => (
      <div key={index} className="flex flex-row items-start bg-white rounded-md p-6 gap-6">
        <div className="flex-1 text-left">
          <p className="text-[10px] font-semibold text-[#E87B4A] mb-1">Only This Week</p>
          <h2 className="font-semibold text-[18px] leading-[22px] text-gray-900 mb-1">
            {offer.title.split(' ').slice(0, 5).join(' ')} <br />
            {offer.title.split(' ').slice(5).join(' ')}
          </h2>
          <p className="text-[12px] text-gray-500 mb-4">{offer.desc}</p>
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white text-[12px] font-semibold px-4 py-2 rounded-md">
            Shop Now
            <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
          </button>
        </div>
        <img
          src={offer.img}
          alt={offer.alt}
          className="w-[120px] h-[120px] object-contain"
          loading="lazy"
        />
      </div>
    ))}
  </div>



<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 sm:mt-6 gap-3">
  {/* Title Section */}
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
    <h3 className="text-xs sm:text-[14px] font-semibold text-gray-900">
      New Arrivals
    </h3>
    <span className="text-[10px] sm:text-[12px] text-gray-400 font-normal sm:ml-2">
      Do not miss the current offers until the end of month.
    </span>
  </div>

  {/* View All Button */}
  <button
    type="button"
    className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-1 sm:gap-2 border border-gray-300 text-gray-900 text-[10px] sm:text-[12px] font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-gray-100 transition"
  >
    View All
    <FontAwesomeIcon icon={faArrowRight} className="text-[8px] sm:text-[10px]" />
  </button>
</div>

</div>





<div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row gap-6 py-5">
  {/* Sidebar */}
  <div className="w-full lg:w-72 flex flex-col gap-6">
    <div className="bg-[#f3efe9]">
      <div
        className="max-w-sm mx-auto p-6 relative bg-cover bg-no-repeat bg-right rounded-xl"
        style={{ backgroundImage: `url(${magicImg})` }}
      >
        <div className="absolute inset-0 bg-[#f3efe9]/80 rounded-xl"></div>
        <div className="relative z-10">
          <p className="text-[13px] text-[#d96e1a] font-normal mb-1">Only This Week</p>
          <h1 className="text-[22px] font-extrabold text-[#1a202c] leading-[1.2] mb-1">
            A smart store for<br />every people
          </h1>
          <p className="text-[14px] font-normal text-[#6b7280] mb-4">
            Feed your family the best
          </p>
          <button
            type="button"
            className="inline-flex items-center bg-white text-[#1a202c] text-[14px] font-semibold rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-shadow"
          >
            Shop Now
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Product Grid / Scrollable List */}
  <div className="flex-1">
    <div
      className={`
        flex lg:grid lg:grid-cols-6 gap-4 overflow-x-auto lg:overflow-visible
        no-scrollbar
        snap-x snap-mandatory
        scroll-smooth
      `}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`
            flex-shrink-0 lg:flex-shrink lg:min-w-0
            min-w-[45%] sm:min-w-[35%] lg:w-auto
            border border-gray-200 rounded p-2 relative flex flex-col
            snap-start
          `}
        >
          <div className="absolute top-2 left-2 bg-red-600 text-[9px] text-white font-semibold rounded-full px-2 py-[2px]">
            {item.discount}
          </div>
          <div className="flex justify-end space-x-1 text-gray-400 text-xs mb-1">
            <i className="fas fa-heart cursor-pointer"></i>
            <i className="fas fa-ellipsis-h cursor-pointer"></i>
          </div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-24 object-contain mb-2"
          />
          {item.label && (
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[9px] bg-green-600 text-white rounded px-1 font-semibold flex items-center gap-1">
                <i className="fas fa-check"></i>
                {item.label}
              </span>
            </div>
          )}
          <p className="text-[10px] font-semibold text-gray-900 leading-tight">{item.title}</p>
          <div className="flex gap-1 items-center mt-1">
            <p className="text-xs font-bold text-red-600">{item.price}</p>
            <p className="text-xs line-through text-gray-400">{item.oldPrice}</p>
          </div>
          <p className="text-[8px] font-semibold text-red-600 uppercase mt-0.5">In Stock</p>
        </div>
      ))}
    </div>
  </div>
</div>

   





<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
    {/* Left Card */}
    <section className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden">
      {/* Mobile View (background image) */}
      <div className="md:hidden relative h-48 w-full">
        <img
          src="https://storage.googleapis.com/a1aa/image/07ed9149-ff7a-427f-2d58-3a9cd28a1e6a.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6">
          <p className="text-xs text-orange-300 font-semibold mb-1">Only This Week</p>
          <h2 className="text-lg font-extrabold text-white leading-tight mb-2">
            Provides you the quality that's you expected
          </h2>
          <p className="text-sm text-gray-200 mb-4">Feed your family the best</p>
          <button className="inline-flex items-center gap-2 text-xs font-semibold text-white border border-white rounded-full px-4 py-2 hover:bg-white/10 transition w-max">
            Shop Now <i className="fas fa-arrow-right text-[10px]"></i>
          </button>
        </div>
      </div>

      {/* Desktop/Tablet View (original layout) */}
      <div className="hidden md:flex flex-col justify-center px-6 py-8 md:w-1/2">
        <p className="text-xs text-orange-400 font-semibold mb-1">Only This Week</p>
        <h2 className="text-lg font-extrabold leading-tight mb-2">
          Provides you the quality that's you expected
        </h2>
        <p className="text-sm text-gray-600 mb-6">Feed your family the best</p>
        <button className="inline-flex items-center gap-2 text-xs font-semibold text-gray-900 border border-gray-900 rounded-full px-4 py-2 hover:bg-gray-200 transition">
          Shop Now <i className="fas fa-arrow-right text-[10px]"></i>
        </button>
      </div>
      <div className="hidden md:flex relative md:w-1/2 justify-center items-center p-4">
        <img
          src="https://storage.googleapis.com/a1aa/image/07ed9149-ff7a-427f-2d58-3a9cd28a1e6a.jpg"
          alt="Yellow box of baby food"
          className="absolute top-4 left-6 w-24 h-24 object-contain rotate-12"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/c4a17b25-613d-4f8e-c6e0-f480f3b1ebb7.jpg"
          alt="White baby food bottle"
          className="absolute bottom-6 left-20 w-20 h-30 object-contain rotate-6"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/e84c0a38-52a6-491c-698e-42d4efcf06e3.jpg"
          alt="Red apple"
          className="absolute bottom-6 right-10 w-10 h-10 object-contain"
        />
      </div>
    </section>

    {/* Right Card */}
    <section className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden">
      {/* Mobile View (background image) */}
      <div className="md:hidden relative h-48 w-full">
        <img
          src="https://storage.googleapis.com/a1aa/image/7e4f191e-aaa1-41c6-24d7-1f2f46b20a9e.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center p-6">
          <p className="text-xs text-orange-300 font-semibold mb-1">Only This Week</p>
          <h2 className="text-lg font-extrabold text-white leading-tight mb-2">
            Grocery store at the center of the city
          </h2>
          <p className="text-sm text-gray-200 mb-4">Only this week. Don't miss...</p>
          <button className="inline-flex items-center gap-2 text-xs font-semibold text-white border border-white rounded-full px-4 py-2 hover:bg-white/10 transition w-max">
            Shop Now <i className="fas fa-arrow-right text-[10px]"></i>
          </button>
        </div>
      </div>

      {/* Desktop/Tablet View (original layout) */}
      <div className="hidden md:flex flex-col justify-center px-6 py-8 md:w-1/2">
        <p className="text-xs text-orange-400 font-semibold mb-1">Only This Week</p>
        <h2 className="text-lg font-extrabold leading-tight mb-2">
          Grocery store at the center of the city
        </h2>
        <p className="text-sm text-gray-600 mb-6">Only this week. Don't miss...</p>
        <button className="inline-flex items-center gap-2 text-xs font-semibold text-gray-900 border border-gray-900 rounded-full px-4 py-2 hover:bg-gray-200 transition">
          Shop Now <i className="fas fa-arrow-right text-[10px]"></i>
        </button>
      </div>
      <div className="hidden md:flex relative md:w-1/2 justify-center items-center p-4">
        <img
          src="https://storage.googleapis.com/a1aa/image/7e4f191e-aaa1-41c6-24d7-1f2f46b20a9e.jpg"
          alt="Cupcake cream cake with yellow label"
          className="absolute top-6 left-10 w-24 h-28 object-contain rotate-6"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/948847a6-6757-40cd-d691-a54269589f9c.jpg"
          alt="Cupcake cream cake with strawberry"
          className="absolute bottom-6 right-10 w-24 h-28 object-contain -rotate-6"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/42876506-cd46-4147-c2fd-c43c44cc1a30.jpg"
          alt="Fresh strawberry"
          className="absolute bottom-4 right-24 w-10 h-10 object-contain"
        />
      </div>
    </section>
  </div>
</div>
   

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">


<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center  sm:mt-6 gap-3">
  {/* Title Section */}
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
    <h3 className="text-xs sm:text-[14px] font-semibold text-gray-900">
      Featured Products
    </h3>
    <span className="text-[10px] sm:text-[12px] text-gray-400 font-normal sm:ml-2">
   Do not miss the current offers until the end of month.
    </span>
  </div>

  {/* View All Button */}
  <button
    type="button"
    className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-1 sm:gap-2 border border-gray-300 text-gray-900 text-[10px] sm:text-[12px] font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-gray-100 transition"
  >
    View All
    <FontAwesomeIcon icon={faArrowRight} className="text-[8px] sm:text-[10px]" />
  </button>
</div>
</div>



<div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row gap-6 py-5">
  {/* Sidebar */}
  <div className="w-full lg:w-72 flex flex-col gap-6">
    <div className="bg-[#f3efe9]">
      <div
        className="max-w-sm mx-auto p-6 relative bg-cover bg-no-repeat bg-right rounded-xl"
        style={{ backgroundImage: `url(${magicImg})` }}
      >
        <div className="absolute inset-0 bg-[#f3efe9]/80 rounded-xl"></div>
        <div className="relative z-10">
          <p className="text-[13px] text-[#d96e1a] font-normal mb-1">Only This Week</p>
          <h1 className="text-[22px] font-extrabold text-[#1a202c] leading-[1.2] mb-1">
            A smart store for<br />every people
          </h1>
          <p className="text-[14px] font-normal text-[#6b7280] mb-4">
            Feed your family the best
          </p>
          <button
            type="button"
            className="inline-flex items-center bg-white text-[#1a202c] text-[14px] font-semibold rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-shadow"
          >
            Shop Now
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Product Grid / Scrollable List */}
  <div className="flex-1">
    <div
      className={`
        flex lg:grid lg:grid-cols-6 gap-4 overflow-x-auto lg:overflow-visible
        no-scrollbar
        snap-x snap-mandatory
        scroll-smooth
      `}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`
            flex-shrink-0 lg:flex-shrink lg:min-w-0
            min-w-[45%] sm:min-w-[35%] lg:w-auto
            border border-gray-200 rounded p-2 relative flex flex-col
            snap-start
          `}
        >
          <div className="absolute top-2 left-2 bg-red-600 text-[9px] text-white font-semibold rounded-full px-2 py-[2px]">
            {item.discount}
          </div>
          <div className="flex justify-end space-x-1 text-gray-400 text-xs mb-1">
            <i className="fas fa-heart cursor-pointer"></i>
            <i className="fas fa-ellipsis-h cursor-pointer"></i>
          </div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-24 object-contain mb-2"
          />
          {item.label && (
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[9px] bg-green-600 text-white rounded px-1 font-semibold flex items-center gap-1">
                <i className="fas fa-check"></i>
                {item.label}
              </span>
            </div>
          )}
          <p className="text-[10px] font-semibold text-gray-900 leading-tight">{item.title}</p>
          <div className="flex gap-1 items-center mt-1">
            <p className="text-xs font-bold text-red-600">{item.price}</p>
            <p className="text-xs line-through text-gray-400">{item.oldPrice}</p>
          </div>
          <p className="text-[8px] font-semibold text-red-600 uppercase mt-0.5">In Stock</p>
        </div>
      ))}
    </div>
  </div>
</div>



<div className="max-w-7xl  px-8 mx-auto flex flex-col md:flex-row gap-6   py-2">


 <div className="w-full    flex flex-wrap justify-center gap-4">
      {[1,2,3 ].map((item, index) => (
        <div
          key={index}
          className="   w-full  md:w-[31.2%] lg:w-[32.4%]   sm:w-[100%]  flex-shrink-0 flex flex-col bg-[#f3efe9] rounded-xl"
        >
          <div
        className="p-6 relative bg-cover bg-no-repeat bg-right w-full h-full rounded-xl"
        style={{
          backgroundImage: `url(${only[index]})`
        }}
      >

            
            {/* Overlay */}
            <div className="absolute inset-0     rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10 md:px-1">
              <p className="text-[13px] md:text-[10px] text-[#d96e1a] font-normal mb-1">
                Only This Week
              </p>
              <h1 className="text-[22px]  md:text-[14px] font-extrabold text-[#1a202c] leading-[1.2] mb-1">
                A smart store for
                <br />
                every people
              </h1>
              <p className="text-[14px]   md:text-[11px] font-normal text-[#6b7280] mb-4">
                Feed your family the best
              </p>
              <button
                type="button"
                className="inline-flex items-center bg-white text-[#1a202c] text-[14px] font-semibold rounded-full px-5 py-2    shadow-md hover:shadow-lg transition-shadow"
              >
                Shop Now
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
          
        </div>
      ))}
    </div>



</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">


<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center  sm:mt-6 gap-3">
  {/* Title Section */}
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
    <h3 className="text-xs sm:text-[14px] font-semibold text-gray-900">
   Deals Of The Day
    </h3>
    <span className="text-[10px] sm:text-[12px] text-gray-400 font-normal sm:ml-2">
   Do not miss the current offers until the end of month.
    </span>
  </div>

  {/* View All Button */}
  <button
    type="button"
    className="w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-1 sm:gap-2 border border-gray-300 text-gray-900 text-[10px] sm:text-[12px] font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-md hover:bg-gray-100 transition"
  >
    View All
    <FontAwesomeIcon icon={faArrowRight} className="text-[8px] sm:text-[10px]" />
  </button>
</div>
</div>





  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">



<div className="bg-white p-4">
      <main className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left Container */}
        <section className="border border-gary-200 rounded-lg p-4 flex flex-col gap-6 w-full md:w-[360px]">
          {/* First Product */}
          <article className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-row sm:flex-col items-center gap-2 sm:gap-4">
              <span className="bg-[#E11D48] text-white text-[10px] font-semibold rounded-full px-2 py-[2px] select-none">75%</span>
              <img src="https://storage.googleapis.com/a1aa/image/2964ee6c-fa8a-46af-2995-8c0efb9de96e.jpg" alt="Apple Juice" className="w-20 h-28 object-contain" />
              <div className="bg-[#22C55E] text-white text-[10px] font-semibold rounded-full px-2 py-[1px] flex items-center gap-1 select-none">
                <FontAwesomeIcon icon={faLeaf} className="text-[8px]" />
                <span>ORGANIC</span>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xs font-semibold text-[#0F172A] max-w-[180px] leading-tight">
                  100 Percent Apple Juice – 64 fl oz Bottle
                </h3>
                <button aria-label="Add to favorites" className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={regularHeart} className="text-lg" />
                </button>
              </div>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(4)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={solidStar} className="text-yellow-400 text-xs" />
                ))}
                <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-400 text-xs" />
                <span className="text-xs text-gray-500 ml-1">3</span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-red-600 font-semibold text-sm">$0.50</span>
                <span className="text-gray-400 line-through text-xs">$1.99</span>
              </div>
              <button className="mt-3 w-28 h-8 border border-[#3B82F6] rounded-full text-[#3B82F6] text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#3B82F6] hover:text-white transition">
                Add to cart
                <span className="w-5 h-5 border border-[#3B82F6] rounded-full flex items-center justify-center text-[#3B82F6] group-hover:text-white">+</span>
              </button>
              <div className="mt-3 flex flex-wrap gap-1">
                {["84", "06", "59", "59"].map((val, i) => (
                  <span key={i} className="text-[10px] font-semibold text-[#22C55E] bg-[#D1FAE5] rounded px-1.5 py-[2px] select-none">{val}</span>
                ))}
              </div>
              <p className="text-[9px] text-gray-400 mt-1 select-none">Remains until the end of the offer</p>
            </div>
          </article>

          {/* Second Product */}
          <article className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-row sm:flex-col items-center gap-2 sm:gap-4">
              <span className="bg-[#DC2626] text-white text-[10px] font-semibold rounded-full px-2 py-[2px] select-none">14%</span>
              <img src="https://storage.googleapis.com/a1aa/image/8a8be878-f6f0-405b-b873-a1c6816117b7.jpg" alt="Steak" className="w-20 h-14 object-contain rounded-md border border-gray-300" />
              <div className="bg-[#3B82F6] text-white text-[10px] font-semibold rounded-full px-2 py-[1px] flex items-center gap-1 select-none">
                <FontAwesomeIcon icon={faSnowflake} className="text-[8px]" />
                <span>COLD SALE</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-yellow-300" />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xs font-semibold text-[#0F172A] max-w-[180px] leading-tight">
                  USDA Choice Angus Beef T-Bone Steak – 0.70-1.50 lbs ...
                </h3>
                <button aria-label="Add to favorites" className="text-gray-400 hover:text-gray-600">
                  <FontAwesomeIcon icon={regularHeart} className="text-lg" />
                </button>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-red-600 font-semibold text-sm">$12.89</span>
                <span className="text-gray-400 line-through text-xs">$14.89</span>
              </div>
              <button className="mt-3 w-28 h-8 border border-[#3B82F6] rounded-full text-[#3B82F6] text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#3B82F6] hover:text-white transition">
                Add to cart
                <span className="w-5 h-5 border border-[#3B82F6] rounded-full flex items-center justify-center text-[#3B82F6] group-hover:text-white">+</span>
              </button>
              <div className="mt-3 flex flex-wrap gap-1">
                {["46", "06", "59", "59"].map((val, i) => (
                  <span key={i} className="text-[10px] font-semibold text-[#3B82F6] bg-[#DBEAFE] rounded px-1.5 py-[2px] select-none">{val}</span>
                ))}
              </div>
              <p className="text-[9px] text-gray-400 mt-1 select-none">Remains until the end of the offer</p>
            </div>
          </article>
        </section>

        {/* Right Container */}
        <section className="border border-[#DC2626] rounded-lg p-4 flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-1">
            <div className="relative w-full md:w-[220px] flex justify-center">
              <span className="absolute top-0 left-0 bg-[#DC2626] text-white text-[10px] font-semibold rounded-full px-2 py-[2px] select-none z-10">11%</span>
              <img src="https://storage.googleapis.com/a1aa/image/3a72803b-ca5a-4965-cb74-f2c0546052da.jpg" alt="Frozen Pizza" className="w-[220px] h-[220px] object-contain" />
              <div className="absolute bottom-0 left-0 bg-[#3B82F6] text-white text-[10px] font-semibold rounded-full px-2 py-[1px] flex items-center gap-1 select-none z-10">
                <FontAwesomeIcon icon={faSnowflake} className="text-[8px]" />
                <span>COLD SALE</span>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(3)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={solidStar} className="text-yellow-400 text-xs" />
                ))}
              </div>
              <h3 className="text-sm font-bold text-[#0F172A] leading-tight mb-1">
                Great Value Rising Crust Frozen Pizza, Supreme
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-700 font-bold text-lg">$8.99</span>
                <span className="text-gray-400 line-through text-sm">$9.99</span>
              </div>
              <p className="text-[10px] text-gray-600 mb-3 leading-tight">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
              </p>
              <p className="text-[9px] text-gray-400 mb-2 select-none">This product is about to run out</p>
              <div className="mb-3">
                <label htmlFor="available" className="text-[9px] font-semibold text-gray-600 mb-1 block">available only:</label>
                <input type="range" min="0" max="20" value="18" disabled id="available" className="w-full h-1 rounded-lg accent-[#DC2626]" />
                <div className="text-[9px] font-semibold text-[#DC2626] mt-1 select-none">18</div>
              </div>
              <button className="w-full md:w-auto bg-[#22C55E] text-white rounded-md py-2 px-4 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#16A34A] transition">
                <FontAwesomeIcon icon={faCartPlus} />
                Add to cart
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
    </div>
<Footer />
        </>
  );
}
