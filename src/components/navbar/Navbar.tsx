// src/components/navbar/Navbar.tsx
'use client';
import React, { useState, useEffect } from 'react';
import '@/styles/globals.css';
import Link from 'next/link';


const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} lg:flex lg:items-center lg:justify-center lg:px-4 lg:py-2`}>
      <div className="navbar-container flex justify-between items-center">

        {isMobile ? (
          <><div className="navbar-hamburger" onClick={toggleMenu}>
            &#9776;
          </div><div>
              <Link href="/" className="text-green-300 font-bold text-lg ">Meu Portfólio</Link>
            </div></>
        ) : (
          <>
            <Link href="/" className="text-green-300 font-bold text-lg ">Meu Portfólio</Link><ul className="navbar-menu flex gap-4">
              <li className="navbar-item bg-black/70 p-2 gap-3 text-green-300 lg shadow-lg hover:shadow-green-400 hover:scale-105 transition-transform hover:border-b-2">
                <Link className="text-green-300" href="/">Home</Link>
              </li>
              <li className="navbar-item bg-black/70 p-2 gap-3 text-green-300 lg shadow-lg hover:shadow-green-400 hover:scale-105 transition-transform hover:border-b-2">
                <Link className="text-green-300" href="/about">Curriculo</Link>
              </li>
              <li className="navbar-item bg-black/70 p-2 gap-3 text-green-300 lg shadow-lg hover:shadow-green-400 hover:scale-105 transition-transform hover:border-b-2">
                <Link className="text-green-300" href="/services">Projetos</Link>
              </li>
              <li className="navbar-item bg-black/70 p-2 gap-3 text-green-300 lg shadow-lg hover:shadow-green-400 hover:scale-105 transition-transform hover:border-b-2">
                <Link className="text-green-300" href="/contact">Contato</Link>
              </li>
            </ul>
          </>
        )}
      </div>
      {isMobile && isMenuOpen && (
        <ul className="navbar-dropdown bg-black/80 flex flex-col items-start p-4 gap-2">
          <li className="navbar-item">
            <Link className="text-green-300 hover:underline" href="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link className="text-green-300 hover:underline" href="/about">About</Link>
          </li>
          <li className="navbar-item">
            <Link className="text-green-300 hover:underline" href="/services">Services</Link>
          </li>
          <li className="navbar-item">
            <Link className="text-green-300 hover:underline" href="/contact">Contact</Link>
          </li>

        </ul>

      )}
    </nav>
  );
};

export default Navbar;
