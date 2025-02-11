/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("Erro ao enviar mensagem.");
      }
    } catch (error) {
      setSuccess("Erro ao enviar mensagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-base-200 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Contato</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
      {success && <p className="text-center mt-4 text-success">{success}</p>}
    </div>
  );
}
