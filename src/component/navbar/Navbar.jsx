import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuMenu, LuX } from 'react-icons/lu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" text-black px-4 py-2 mx-2 my-2 rounded-2xl flex justify-between items-center shadow-md relative border-2">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-3">
        <img src="/mm.png" alt="Logo" className="w-10 h-10" />
        <span className="text-xl font-semibold">Mike</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/about" className="hover:text-cyan-400">About Us</Link>
        <Link to="/services" className="hover:text-cyan-400">Services</Link>
        <Link to="/reviews" className="hover:text-cyan-400">Reviews</Link>
        <Link to="/techstack" className="hover:text-cyan-400">Tech Stack</Link>
      </div>

      {/* Burger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full text-black flex flex-col items-center space-y-4 py-4 md:hidden z-10">
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400">About Us</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400">Services</Link>
          <Link to="/reviews" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400">Reviews</Link>
          <Link to="/techstack" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400">Tech Stack</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
