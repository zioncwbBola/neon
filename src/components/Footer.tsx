// src/components/Footer.tsx
'use client';

import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-row p-5 text-center border-t border-green-500">
        <div className="flex flex-row max-w-full gap-10 justify-between">
          <nav className="flex flex-col items-start gap-5">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className='flex flex-col items-start gap-5'>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className='flex flex-col items-start gap-5'>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav className="flex flex-row lg:flex-col items-start gap-5">
            <div className="flex flex-col lg:flex-row gap-5">
              <a className="link link-hover" href="https://github.com/zioncwbBola">
                <FaGithub size={24} />
              </a>
              <a className="link link-hover" href="https://www.linkedin.com/in/andrelopez33/">
                <FaLinkedin size={24} />
              </a>
              <a className="link link-hover" href="https://neon-zioncwb.vercel.app/">
                <CgWebsite size={24} />
              </a>
            </div>
          </nav>
        </div>
      </footer>


    </>
  );
};
