'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";
import { MessageSquare, Mail, Lightbulb } from "lucide-react";
import { useState } from "react";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function ConsultancyContactCard() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar email mailto
    const subject = encodeURIComponent('Interesse em Consultoria - Painel Jurídico');
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    
    window.location.href = `mailto:pedropotz@hotmail.fr?subject=${subject}&body=${body}`;
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-gradient-to-br from-green-500 to-teal-600 dark:from-green-700 dark:to-teal-800 rounded-xl text-white shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Lightbulb className="w-8 h-8" />
        <h2 className="text-3xl font-bold">Quer saber mais?</h2>
      </div>
      
      <p className="text-lg mb-6 text-white/90">
        Interessado em implementar este sistema no seu escritório ou departamento jurídico? Entre em contato!
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-black dark:text-white bg-white/90 dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          
          <input
            type="email"
            placeholder="Seu email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-black dark:text-white bg-white/90 dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          
          <textarea
            placeholder="Conte-me sobre seu interesse..."
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg text-black dark:text-white bg-white/90 dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
          />
          
          <button
            type="submit"
            className="w-full bg-white text-green-700 font-bold py-4 px-6 rounded-lg hover:bg-green-50 transition flex items-center justify-center gap-2 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            <span>Enviar Mensagem</span>
          </button>
        </form>
      ) : (
        <div className="text-center py-8">
          <MessageSquare className="w-16 h-16 mx-auto mb-4" />
          <p className="text-xl font-bold">Obrigado pelo interesse!</p>
          <p className="text-white/80 mt-2">Seu cliente de email será aberto.</p>
        </div>
      )}
    </MotionBlock>
  );
}
