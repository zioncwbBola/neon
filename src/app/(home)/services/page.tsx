// src/app/%28home%29/services/page.tsx
import Projects from "@/components/Sections/Project"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Meus Projetos</h1>
      <Projects projects={[]} />
    </div>
  )
}

