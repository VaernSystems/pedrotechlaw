'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";
import { ExternalLink, BarChart3, Scale } from "lucide-react";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function LegalDashboardCard() {
  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 rounded-xl text-white shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
          <Scale className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold">Painel Jurídico</h2>
      </div>
      
      <p className="text-lg mb-4 text-white/90">
        Sistema completo para gestão e organização de processos judiciais
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-2">
          <BarChart3 className="w-5 h-5 mt-1 flex-shrink-0" />
          <p className="text-white/90">Dashboard com análise visual de processos</p>
        </div>
        <div className="flex items-start gap-2">
          <ExternalLink className="w-5 h-5 mt-1 flex-shrink-0" />
          <p className="text-white/90">Integração real com TJRJ para consulta automatizada</p>
        </div>
        <div className="flex items-start gap-2">
          <BarChart3 className="w-5 h-5 mt-1 flex-shrink-0" />
          <p className="text-white/90">Organização inteligente de prazos e movimentações</p>
        </div>
      </div>

      <div className="space-y-3">
        <a
          href="https://pythonic-dash.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-white text-blue-700 font-bold py-4 px-6 rounded-lg hover:bg-blue-50 transition text-center shadow-lg"
        >
          🚀 Ver Demo do Sistema
        </a>
        
        <p className="text-sm text-white/70 text-center">
          * Demo com dados simulados para demonstração
        </p>
      </div>
    </MotionBlock>
  );
}
