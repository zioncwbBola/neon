// src/components/Sections/Project.tsx
// "use client";

// import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import Image from 'next/image';

// const projects = [
//   {
//     title: "Projeto 1",
//     description: "Descrição breve do projeto 1. Tecnologias utilizadas: React, Next.js, Tailwind CSS.",
//     github: "https://github.com/zioncwbBola/caminhodavida/",
//     live: "https://caminhodavida.vercel.app/",
//   },
//   {
//     title: "Projeto 2",
//     description: "Descrição breve do projeto 2. Tecnologias utilizadas: Node.js, Express, PostgreSQL.",
//     github: "https://github.com/seuusuario/projeto2",
//     live: "https://projeto2.com",
//   },
//   {
//     title: "Projeto 3",
//     description: "Descrição breve do projeto 3. Tecnologias utilizadas: Vue.js, Firebase.",
//     github: "https://github.com/seuusuario/projeto3",
//     live: "https://projeto3.com",
//   },
// ];

// export default function Projects() {
//   return (
//     <div className="w-screen h-screen flex flex-col lg:mx-auto p-6 bg-base-200 rounded-xl shadow-lg text-center">
//       <h2 className="text-3xl font-bold mb-4">Meus Projetos</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-base-100 p-4 rounded-lg shadow-md text-left">
//             <Image 
//               src={`https://image.thum.io/get/width/600/crop/800/${project.live}`} 
//               alt={`Preview do ${project.title}`} 
//               width={600}
//               height={400}
//               className="w-full h-40 object-cover rounded-md mt-2"
//             />
//             {/* <Image
//               src={`https://image.thum.io/get/width/600/crop/1200/${project.live}`}
//               alt={`Preview do ${project.title}`}
//               width={600}
//               height={400}
//               className="w-full h-40 object-cover rounded-md mt-2"
//             /> */}
//             <p className="text-gray-500 mt-2">{project.description}</p>
//             <div className="mt-4 flex gap-4">
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-primary flex items-center gap-2 hover:underline"
//               >
//                 <FaGithub /> Código
//               </a>
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-secondary flex items-center gap-2 hover:underline"
//               >
//                 <FaExternalLinkAlt /> Ver online
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import type React from "react"
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

interface Project {
  title: string
  description: string
  github: string
  live: string
}

interface ProjectsProps {
  projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <Image
                src={`https://image.thum.io/get/width/600/crop/800/${project.live}`}
                alt={`Preview do ${project.title}`}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
                  >
                    <FaGithub /> Código
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Ver online
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

