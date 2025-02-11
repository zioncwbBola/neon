// src/app/layout.tsx
import { Footer } from "@/components/Footer";
import NavbarTail from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ZionCWB",
  description: "Portfólio pessoal André Lopes Paiva",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gradient-to-br from-slate-950 to-emerald-950 text-green-500 font-futuristic min-h-screen flex flex-col">
        <header className="w-full">
          <NavbarTail />
        </header>
        <main className="flex-grow flex justify-center justify-items-center items-center">
          {children}
        </main>
        {/* <footer className="w-full p-4 text-center border-t border-green-500">
          <p>© {new Date().getFullYear()} ZionCWB. Todos os direitos reservados.</p>
        </footer> */}
        <Footer />
      </body>
    </html>
  );
}
