import React, {useState} from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import AllCards from './components/AllCards';
// import SurahDisplay from './components/SurahDisplay';
import FlippingCard from './components/FlippingCard';
import SalahQuiz from './components/SalahQuiz'
import surahs from './assets/surah.js'
import salah from './assets/salah.js'

const App = () => {
  const [currentlyFlipped, setCurrentlyFlipped] = useState(null);
   return (
    <>
    <div className="min-h-screen bg-black ">
    <nav className="p-4 text-white flex items-center justify-between">
  {/* Left-aligned Image */}
  <img src="https://www.freeiconspng.com/thumbs/quran-icon-png/quran-icon-png-7.png" className="w-14 h-14" />

  {/* Center-aligned Navigation Links */}
  <ul className="flex gap-14 justify-center flex-1">
    <li>
      <Link
        to="/"
        className="border-2 border-transparent hover:border-gray-300 rounded p-2 transition duration-300"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/salah"
        className="border-2 border-transparent hover:border-gray-300 rounded p-2 transition duration-300"
      >
        Salah
      </Link>
    </li>
    <li>
      <Link
        to="/card"
        className="border-2 border-transparent hover:border-gray-300 rounded p-2 transition duration-300"
      >
        Quran
      </Link>
    </li>
  </ul>
</nav>

      <Routes>
        <Route path="/" element={<AllCards />} />
        {/* <Route path="/swipe" element={<SurahDisplay  surahs={surahs} />} /> */}
        <Route path="/salah" element={<SalahQuiz  currentlyFlipped={currentlyFlipped} setCurrentlyFlipped={setCurrentlyFlipped} />} />
        <Route path="/card" element={<FlippingCard currentlyFlipped={currentlyFlipped} setCurrentlyFlipped={setCurrentlyFlipped}/>} />
      </Routes>
    </div>
    </>
  );
};

export default App;
