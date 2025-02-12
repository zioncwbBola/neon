// src/components/Sections/Curriculo.tsx
"use client";

import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-xl shadow-lg text-center">
      <h1 className="text-4xl font-bold mb-2">Seu Nome</h1>
      <p className="text-lg text-gray-500">Desenvolvedor Full Stack</p>
      
      <div className="mt-4 flex justify-center gap-4 text-xl">
        <a href="mailto:seuemail@email.com" className="hover:text-primary">
          <FaEnvelope />
        </a>
        <a href="tel:+55999999999" className="hover:text-primary">
          <FaPhone />
        </a>
        <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
          <FaLinkedin />
        </a>
        <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
          <FaGithub />
        </a>
      </div>
      
      <div className="mt-6 text-left">
        <h2 className="text-2xl font-semibold mb-2">Experiência</h2>
        <div className="bg-base-100 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-bold">Empresa XYZ</h3>
          <p className="text-gray-500">Desenvolvedor Full Stack | 2022 - Presente</p>
          <p className="mt-2 text-gray-700">Atuei no desenvolvimento de aplicações web modernas...</p>
        </div>
      </div>

      <div className="mt-6 text-left">
        <h2 className="text-2xl font-semibold mb-2">Educação</h2>
        <div className="bg-base-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Universidade ABC</h3>
          <p className="text-gray-500">Bacharelado em Ciência da Computação | 2018 - 2022</p>
        </div>
      </div>
    </div>
  );
}