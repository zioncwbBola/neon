// src/app/page.tsx
// import AboutMe from "@/components/Sections/AboutMe";

// export default function HomePage() {
//   return (
//     <div className="flex items-center justify-center w-full h-full rounded-lg shadow-lg">
//       <AboutMe />
//     </div>
//   );
// }
import AboutMe from "@/components/Sections/AboutMe"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Bem-vindo ao Meu Portfólio</h1>
      <AboutMe />
    </div>
  )
}

