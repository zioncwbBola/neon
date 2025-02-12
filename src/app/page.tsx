// src/app/page.tsx
import AboutMe from "@/components/Sections/AboutMe";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center w-full h-full rounded-lg shadow-lg">
      <AboutMe />
    </div>
  );
}
