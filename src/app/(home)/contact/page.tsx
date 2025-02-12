// // src/app/%28home%29/contact/page.tsx
// import ContactForm from "@/components/forms/ContactForm";

// export default function ContactPage() {
//   return (
//     <ContactForm />
//   );
// }
import ContactForm from "@/components/forms/ContactForm"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">Entre em Contato</h1>
      <ContactForm />
    </div>
  )
}

