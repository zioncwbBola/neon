'use client';

import React from 'react';

const projects = [
  { title: 'Projeto Matrix AI', description: 'Desenvolvimento de IA avançada' },
  { title: 'Painel de Controle Futurista', description: 'Dashboard com visual interativo' },
  { title: 'Portfólio VR', description: 'Portfolio com imersão em Realidade Virtual' },
];

export const ProjectList = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 bg-green-800 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
