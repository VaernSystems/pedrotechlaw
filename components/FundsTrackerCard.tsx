'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";
import { TrendingUp, PieChart, DollarSign, BarChart } from "lucide-react";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function FundsTrackerCard() {
  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-800 dark:to-teal-900 rounded-xl text-white shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
          <TrendingUp className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold">Rastreador de Fundos</h2>
      </div>
      
      <p className="text-lg mb-4 text-white/90">
        Ferramenta profissional para análise e comparação de fundos de investimento
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-2">
          <PieChart className="w-5 h-5 mt-1 flex-shrink-0" />
          <p className="text-white/90">20+ fundos monitorados com dados reais</p>
        </div>
        <div className="flex items-start gap-2">
          <BarChart className="w-5 h-5 mt-1 flex-shrink-0" />
          <p className="text-white/90">Filtros avançados por risco, família e retorno</p>
        </div>
        <div className="flex items-start gap-2">
          <DollarSign className="w-5 h-5 mt-1 flex-shrink-0" />
          <p className="text-white/90">Análise comparativa de rentabilidade e custos</p>
        </div>
      </div>

      <div className="space-y-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-white text-emerald-700 font-bold py-4 px-6 rounded-lg hover:bg-emerald-50 transition text-center shadow-lg"
        >
          📊 Acessar Rastreador
        </a>
        
        <p className="text-sm text-white/70 text-center">
          ✨ Ferramenta 100% gratuita desenvolvida com Python
        </p>
      </div>
    </MotionBlock>
  );
}
