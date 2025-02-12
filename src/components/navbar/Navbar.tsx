// src/components/navbar/Navbar.tsx
// 'use client';
// import React, { useState, useEffect } from 'react';
// import '@/styles/globals.css';
// import Link from 'next/link';


// const Navbar: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 768);
//   };

//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 50);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);
//     handleResize();
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`navbar ${isScrolled ? 'scrolled' : ''} lg:fixed lg:flex lg:items-center lg:justify-center lg:px-4 lg:py-2 blur-10` }>
//       <div className="navbar-container flex justify-between items-center">

//         {isMobile ? (
//           <><div className="navbar-hamburger" onClick={toggleMenu}>
//             &#9776;
//           </div><div>
//               <Link href="/" className="text-green-300 font-bold text-lg ">Meu Portfólio</Link>
//             </div></>
//         ) : (
//           <>
//             <Link href="/" className="text-green-300 font-bold text-lg ">Meu Portfólio</Link><ul className="navbar-menu flex gap-4">
//               <li className="navbar-item ml-4 bg-black/70 p-2 gap-3 text-green-300 lg shadow-lg hover:shadow-green-400 hover:scale-105 transition-transform hover:border-b-2">
//                 <Link className="text-green-300 text-center no-underline text-base" href="/">Home</Link>
//               </li>
//               <li className="navbar-item bg-black/70 p-2 gap-3 text-green-300 lg shadow-lg hover:shadow-green-400 hover:scale-105 transition-transform hover:border-b-2">
//                 <Link className="text-green-300" href="/about">Curriculo</Link>
//               </li>
//               <li className="navbar-item bg-black/70 p-2 gap-3 text-green-300 lg shadow-lg hover:shadow-green-400 hover:scale-105 transition-transform hover:border-b-2">
//                 <Link className="text-green-300" href="/services">Projetos</Link>
//               </li>
//               <li className="navbar-item bg-black/70 p-2 gap-3 text-green-300 lg shadow-lg hover:shadow-green-400 hover:scale-105 transition-transform hover:border-b-2">
//                 <Link className="text-green-300" href="/contact">Contato</Link>
//               </li>
//             </ul>
//           </>
//         )}
//       </div>
//       {isMobile && isMenuOpen && (
//         <ul className="navbar-dropdown bg-black/80 flex flex-col items-start p-4 gap-2">
//           <li className="navbar-item">
//             <Link className="text-green-300 hover:underline" href="/">Home</Link>
//           </li>
//           <li className="navbar-item">
//             <Link className="text-green-300 hover:underline" href="/about">About</Link>
//           </li>
//           <li className="navbar-item">
//             <Link className="text-green-300 hover:underline" href="/services">Services</Link>
//           </li>
//           <li className="navbar-item">
//             <Link className="text-green-300 hover:underline" href="/contact">Contact</Link>
//           </li>

//         </ul>

//       )}
//     </nav>
//   );
// };

// export default Navbar;
'use client';
import Link from "next/link"
import { useState, useEffect } from "react"

interface NavbarProps {
  isScrolled: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-green-400">
          Your Logo
        </Link>
        <div>
          <button className="text-green-400 focus:outline-none lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <ul className="hidden lg:flex space-x-4">
            <li>
              <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-green-400 hover:text-green-300 transition-colors">
                Currículo
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-green-400 hover:text-green-300 transition-colors">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-green-400 hover:text-green-300 transition-colors">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isMobile && isMenuOpen && (
        <div className="lg:hidden">
          <ul className="absolute top-full left-0 right-0 bg-slate-900/95 py-2 px-4 space-y-2">
            <li>
              <Link href="/" className="block text-green-400 hover:text-green-300 transition-colors py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block text-green-400 hover:text-green-300 transition-colors py-2">
                Currículo
              </Link>
            </li>
            <li>
              <Link href="/services" className="block text-green-400 hover:text-green-300 transition-colors py-2">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-green-400 hover:text-green-300 transition-colors py-2">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

