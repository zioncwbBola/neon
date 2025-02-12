/* eslint-disable @typescript-eslint/no-unused-vars */

// "use client"

// import { useState } from "react"

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState<string | null>(null)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setSuccess(null)

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         setSuccess("Mensagem enviada com sucesso!")
//         setFormData({ name: "", email: "", message: "" })
//       } else {
//         setSuccess("Erro ao enviar mensagem.")
//       }
//     } catch (error) {
//       setSuccess("Erro ao enviar mensagem.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 bg-slate-800 rounded-xl shadow-lg">
//       <h2 className="text-2xl font-bold text-center mb-4 text-green-400">Contato</h2>
//       <form onSubmit={handleSubmit} className="space-y-4" netlify>
//         <input
//           type="text"
//           name="name"
//           placeholder="Nome"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full px-3 py-2 bg-slate-700 text-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="E-mail"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-3 py-2 bg-slate-700 text-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Mensagem"
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full px-3 py-2 bg-slate-700 text-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 h-32"
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-slate-900 py-2 rounded-md hover:bg-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
//           disabled={loading}
//         >
//           {loading ? "Enviando..." : "Enviar"}
//         </button>
//       </form>
//       {success && <p className="text-center mt-4 text-green-400">{success}</p>}
//     </div>
//   )
// }

"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)

    const formDataEncoded = new URLSearchParams(formData).toString()

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataEncoded,
      })

      if (response.ok) {
        setSuccess("Mensagem enviada com sucesso!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSuccess("Erro ao enviar mensagem.")
      }
    } catch (error) {
      setSuccess("Erro ao enviar mensagem.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-slate-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-green-400">Contato</h2>
      <form onSubmit={handleSubmit} className="space-y-4" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-slate-700 text-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-slate-700 text-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-slate-700 text-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-500 text-slate-900 py-2 rounded-md hover:bg-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {success && <p className="text-center mt-4 text-green-400">{success}</p>}
    </div>
  )
}
