// // src/app/%28home%29/about/page.tsx
// import Resume from "@/components/Sections/Curriculo";

// export default function AboutPage() {
//     return (
//         <Resume />
//     );
// }
import Resume from "@/components/Sections/Curriculo"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">Meu Currículo</h1>
      <Resume />
    </div>
  )
}

