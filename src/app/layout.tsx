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
        <Footer />       
      </body>
    </html>
  );
}
