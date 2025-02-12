// // src/components/Sections/AboutMe.tsx
// const AboutMe = () => {
//   return (
//     <div className="card card-side bg-black/70 ml-10 text-green-300 lg:shadow-lg hover:shadow-green-400 hover:scale-105 transition-transform w-30">
//       <div className="card-body">
//         <h2 className="card-title">About Me</h2>
//         <p>This is a brief description about me.</p>
//         <div className="card-actions justify-end">
//           <button className="btn btn-primary">Learn More</button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AboutMe;
"use client"

import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-800 rounded-xl shadow-lg text-green-400">
      <h1 className="text-4xl font-bold mb-2">André Lopes Paiva</h1>
      <p className="text-lg text-green-300">Desenvolvedor Full Stack</p>

      <div className="mt-4 flex justify-center gap-4 text-xl">
        <a href="mailto:seuemail@email.com" className="hover:text-green-300 transition-colors">
          <FaEnvelope />
        </a>
        <a href="tel:+55999999999" className="hover:text-green-300 transition-colors">
          <FaPhone />
        </a>
        <a
          href="https://linkedin.com/in/andrelopez33"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-300 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/zioncwbBola"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-300 transition-colors"
        >
          <FaGithub />
        </a>
      </div>

      <div className="mt-6 text-left">
        <h2 className="text-2xl font-semibold mb-2">Experiência</h2>
        <div className="bg-slate-700 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-bold">Empresa XYZ</h3>
          <p className="text-green-300">Desenvolvedor Full Stack | 2022 - Presente</p>
          <p className="mt-2 text-gray-300">Atuei no desenvolvimento de aplicações web modernas...</p>
        </div>
      </div>

      <div className="mt-6 text-left">
        <h2 className="text-2xl font-semibold mb-2">Educação</h2>
        <div className="bg-slate-700 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Universidade ABC</h3>
          <p className="text-green-300">Bacharelado em Ciência da Computação | 2018 - 2022</p>
        </div>
      </div>
    </div>
  )
}

