import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Home from './Home';
import Contact from './Contact';
import Blogpage from './Blogpage';
import JinStoreLogin from './JinStoreLogin';
import Filter from './Filter';
import EmptyCartPage from './EmptyCartPage';
import Ragitation from './Ragitation';
import VendorAdmin from './VendorAdmin';

function App() {
  return (
    <Router>
      {/* <nav className=" border-gray-200 "> */}
        {/* <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between px-4 text-sm font-semibold text-gray-900 select-none"> */}
             {/* <Link to="/contact">Contact</Link> */}

             





      
      {/* </nav> */}

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blogpage" element={<Blogpage />} />
        <Route path="/JinStoreLogin" element={<JinStoreLogin />} />
        <Route path="/Filter" element={<Filter/>} />
        <Route path="/EmptyCartPage" element={<EmptyCartPage/>} />
        <Route path="/Ragitation" element={<Ragitation/>} />
        <Route path="/VendorAdmin" element={<VendorAdmin/>} />

      </Routes>
    </Router>
  );
}

export default App;