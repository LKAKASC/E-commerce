import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './components/Header';
import Footer from './components/Footer'; // Correct Footer import
import { 
  faChevronDown, 
  faMapMarkerAlt, 
  faSearch, 
  faUser, 
  faHeart, 
  faShoppingCart, 
  faPhoneAlt, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';


export default function Contact() {
  return (
 <>

<Header/>



              {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-4 py-3 text-xs text-gray-500 select-none">
        {/* <span>Home ›</span> */}
        {/* <span className="ml-1">My account  yash</span> */}
      </div>

      {/* Login/Register Section */}
      {/* <main className="max-w-[400px] mx-auto px-4 py-12    "> */}
        {/* ...................... */}

        <div className="bg-white text-black font-sans p-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-10">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold mb-2">Contact With Us</p>
          <h1 className="font-extrabold text-4xl sm:text-5xl leading-tight mb-2">You can ask us questions</h1>
          <p className="text-sm max-w-xl mx-auto">
            Contact us for all your questions and opinions, or you can solve your
            problems in a shorter time with our contact offices.
          </p>
        </div>

        <hr className="border-t border-gray-200 my-12" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Side */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Our Offices</h3>
              <p className="text-sm text-gray-600 max-w-md">
                On dekande mydurtad mora även om skurkstat. Semirade timaheten rena.
                Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-12">
              {[{
                location: "United States",
                office: "United States Office",
                address: "205 Middle Road, 2nd Floor, New York",
                phone: "+02 1234 567 88",
                email: "info@example.com"
              }, {
                location: "Munich",
                office: "Munich States Office",
                address: "205 Middle Road, 2nd Floor, New York",
                phone: "+5 456 123 22",
                email: "contact@example.com"
              }].map((info, index) => (
                <div key={index} className="flex gap-3">
                  <div className="pt-1 text-gray-600">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{info.location}</p>
                    <p className="font-semibold text-base mb-0.5">{info.office}</p>
                    <p className="text-xs text-gray-500 mb-1">{info.address}</p>
                    <p className="font-bold text-sm mb-0.5">{info.phone}</p>
                    <a className="text-blue-600 text-sm hover:underline" href={`mailto:${info.email}`}>{info.email}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-3 text-xs text-gray-600">
              <span>Follow us:</span>
              {[
                { icon: "fab fa-facebook-f", bg: "bg-[#3b5998]", hover: "hover:bg-[#2d4373]" },
                { icon: "fab fa-twitter", bg: "bg-[#1da1f2]", hover: "hover:bg-[#0d95e8]" },
                { icon: "fab fa-instagram", bg: "bg-black", hover: "hover:bg-gray-800" },
                { icon: "fab fa-linkedin-in", bg: "bg-[#0077b5]", hover: "hover:bg-[#005983]" },
              ].map((item, index) => (
                <a
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center rounded text-white ${item.bg} ${item.hover}`}
                  href="#"
                  aria-label="Social Link"
                >
                  <i className={item.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:w-1/2 max-w-lg">
            <p className="text-sm text-gray-500 mb-4">
              On dekande mydurtad mora även om skurkstat. Semirade timaheten rena.
            </p>
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="text-xs font-semibold mb-1 text-gray-700">Your name *</label>
                  <input id="name" type="text" required className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className="text-xs font-semibold mb-1 text-gray-700">Your email *</label>
                  <input id="email" type="email" required className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600" />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="subject" className="text-xs font-semibold mb-1 text-gray-700">Subject *</label>
                <input id="subject" type="text" required className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs font-semibold mb-1 text-gray-700">Your message</label>
                <textarea id="message" rows="5" className="border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-600" />
              </div>
              <button type="submit" className="bg-purple-700 text-white font-semibold rounded-md px-5 py-2 mt-2 hover:bg-purple-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 border-t border-gray-200 pt-10 flex flex-col sm:flex-row justify-between gap-8">
          {[
            {
              img: "https://storage.googleapis.com/a1aa/image/cb2c5c92-cc50-4065-be12-f2d6d12edfd8.jpg",
              title: "Payment only online",
              desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa."
            },
            {
              img: "https://storage.googleapis.com/a1aa/image/7df86bee-994a-4472-9a0e-a51a9c4a34b2.jpg",
              title: "New stocks and sales",
              desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa."
            },
            {
              img: "https://storage.googleapis.com/a1aa/image/eb755e47-c323-48e0-10c2-8da294abd257.jpg",
              title: "Quality assurance",
              desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa."
            },
            {
              img: "https://storage.googleapis.com/a1aa/image/8bedcd0c-913a-4765-a56a-08dabfa50932.jpg",
              title: "Delivery from 1 hour",
              desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa."
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 max-w-xs">
              <img src={item.img} alt={item.title} width={40} height={40} className="flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


      {/* </main> */}
{/* Newsletter and Footer */}
<Footer /></>
       );  
}