w'use client';

import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-green-800 text-black">
      <h1 className="text-xl font-bold">Fullstack Portfolio</h1>
      <div>
        <Link href="/" className="p-2">
          Home
        </Link>
        <Link href="/projects" className="p-2">
          Projects
        </Link>
        <Link href="/contact" className="p-2">
          Contact
        </Link>
      </div>
    </nav>
  );
};
