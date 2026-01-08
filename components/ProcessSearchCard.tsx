'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";
import { Search, FileSearch } from "lucide-react";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function ProcessSearchCard() {
  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-yellow-400 dark:bg-blue-900 rounded-xl text-black dark:text-white shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <FileSearch className="w-8 h-8" />
        <h2 className="text-3xl font-bold">Consulta Processual</h2>
      </div>
      
      <p className="text-lg mb-6 opacity-90">
        Consulta automatizada integrada ao TJRJ. Os dados são sincronizados diretamente ao painel jurídico.
      </p>

      <a
        href="https://pythonic-dash.vercel.app/consulta"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full bg-black dark:bg-white text-white dark:text-black font-bold py-4 px-6 rounded-lg hover:opacity-80 transition shadow-lg"
      >
        <Search className="w-5 h-5" />
        <span>Consultar Processo TJRJ</span>
      </a>

      <p className="text-sm mt-4 opacity-70 text-center">
        Atualmente disponível apenas para TJRJ
      </p>
    </MotionBlock>
  );
}
