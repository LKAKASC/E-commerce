import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'; // Correct Footer import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faMapMarkerAlt, 
  faSearch, 
  faUser, 
  faHeart, 
  faShoppingCart, 
  faPhoneAlt, 
  faEnvelope,
  faSyncAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';




export default function VendorAdmin() {
  return (
    <>
      {/* Top Promo Bar - Responsive */}
      <Header />


{/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 pb-20 flex flex-col md:flex-row gap-8 pt-4">
        {/* Sidebar */}
        <aside className="w-full md:w-60 border border-gray-200 rounded-md p-3 select-none">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gray-200 rounded-full p-2">
              <FontAwesomeIcon icon={faUser} className="text-gray-600 text-lg" />
            </div>
            <div className="text-xs text-gray-500">
              Welcome back,
              <br/>
              <span className="font-bold text-sm">
                name@gmail.com
              </span>
            </div>
          </div>
          <ul className="text-xs font-semibold text-gray-700 space-y-1">
            <li className="px-3 py-2 rounded bg-gray-100 cursor-pointer">
              Dashboard
            </li>
            <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100">
              Orders
            </li>
            <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100">
              Downloads
            </li>
            <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100">
              Addresses
            </li>
            <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100">
              Account details
            </li>
            <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100">
              Wishlist
            </li>
            <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100 flex items-center space-x-2">
              <FontAwesomeIcon icon={faSyncAlt} />
              <span>Compare</span>
            </li>
            <li className="px-3 py-2 rounded cursor-pointer hover:bg-gray-100 font-bold">
              Log out
            </li>
          </ul>
        </aside>
        
        {/* Form Section */}
        <section className="flex-grow max-w-3xl">
          <h2 className="text-sm font-normal mb-3">
            Update account to Vendor
          </h2>
          <form className="space-y-4 text-xs text-gray-700">
            <div>
              <label className="block mb-1 font-normal" htmlFor="firstName">
                First Name *
              </label>
              <input className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#6B5494]" id="firstName" type="text"/>
            </div>
            <div>
              <label className="block mb-1 font-normal" htmlFor="lastName">
                Last Name *
              </label>
              <input className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#6B5494]" id="lastName" type="text"/>
            </div>
            <div>
              <label className="block mb-1 font-normal" htmlFor="shopName">
                Shop Name *
              </label>
              <input className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#6B5494]" id="shopName" type="text"/>
            </div>
            <div>
              <label className="block mb-1 font-normal" htmlFor="shopUrl">
                Shop URL *
              </label>
              <input className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#6B5494]" id="shopUrl" type="text" defaultValue="shawonetc42fdfqf@gmail.com"/>
              <p className="text-[9px] text-gray-500 mt-1">
                https://klbtheme.com/grogin/store/
              </p>
            </div>
            <div>
              <label className="block mb-1 font-normal" htmlFor="phoneNumber">
                Phone Number*
              </label>
              <input className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#6B5494]" id="phoneNumber" type="text"/>
            </div>
            <div className="flex items-start space-x-2">
              <input className="mt-1" id="agree" type="checkbox"/>
              <label className="text-[10px] text-gray-600" htmlFor="agree">
                I have read and agree to the
                <a className="text-blue-600 hover:underline" href="#">
                  Terms &amp; Conditions
                </a>
                .
              </label>
            </div>
            <button className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded border border-gray-300 hover:bg-gray-300" type="submit">
              Become a Vendor
            </button>
          </form>
        </section>
      </main>

        <Footer />
          </>
        );
      }
      