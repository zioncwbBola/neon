// src/components/Footer.tsx
// 'use client';

// import React from 'react';
// import { CgWebsite } from 'react-icons/cg';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// export const Footer = () => {
//   return (
//     <>
//       <footer className="flex flex-row p-5 text-center border-t border-green-500">
//         <div className="flex flex-row max-w-full gap-10 justify-between">
//           <nav className="flex flex-col items-start gap-5">
//             <h6 className="footer-title">Services</h6>
//             <a className="link link-hover">Branding</a>
//             <a className="link link-hover">Design</a>
//             <a className="link link-hover">Marketing</a>
//             <a className="link link-hover">Advertisement</a>
//           </nav>
//           <nav className='flex flex-col items-start gap-5'>
//             <h6 className="footer-title">Company</h6>
//             <a className="link link-hover">About us</a>
//             <a className="link link-hover">Contact</a>
//             <a className="link link-hover">Jobs</a>
//             <a className="link link-hover">Press kit</a>
//           </nav>
//           <nav className='flex flex-col items-start gap-5'>
//             <h6 className="footer-title">Legal</h6>
//             <a className="link link-hover">Terms of use</a>
//             <a className="link link-hover">Privacy policy</a>
//             <a className="link link-hover">Cookie policy</a>
//           </nav>
//           <nav className="flex flex-row lg:flex-col items-start gap-5">
//             <div className="flex flex-col lg:flex-row gap-5">
//               <a className="link link-hover" href="https://github.com/zioncwbBola">
//                 <FaGithub size={24} />
//               </a>
//               <a className="link link-hover" href="https://www.linkedin.com/in/andrelopez33/">
//                 <FaLinkedin size={24} />
//               </a>
//               <a className="link link-hover" href="https://neon-zioncwb.vercel.app/">
//                 <CgWebsite size={24} />
//               </a>
//             </div>
//           </nav>
//         </div>
//       </footer>


//     </>
//   );
// };
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 text-green-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <nav className="space-y-4">
            <h6 className="text-green-300 font-semibold mb-4">Serviços</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Design UX/UI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Otimização de Performance
                </a>
              </li>
            </ul>
          </nav>
          <nav className="space-y-4">
            <h6 className="text-green-300 font-semibold mb-4">Empresa</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Carreira
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <nav className="space-y-4">
            <h6 className="text-green-300 font-semibold mb-4">Legal</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </nav>
          <nav className="space-y-4">
            <h6 className="text-green-300 font-semibold mb-4">Redes Sociais</h6>
            <div className="flex space-x-4">
              <a
                href="https://github.com/zioncwbBola"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/andrelopez33/"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://neon-zioncwb.vercel.app/"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <CgWebsite size={24} />
              </a>
            </div>
          </nav>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} André Lopes Paiva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

