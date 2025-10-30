'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function CommunicatorCard() {
  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-yellow-400 dark:bg-blue-900 rounded-xl text-black dark:text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Meu Hub de Produtividade</h2>
      <a
        href="https://hub-produtividade.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 border border-gray-300 rounded-xl p-4 hover:shadow-lg transition"
      >
        <div className="w-16 h-16 rounded-md bg-white dark:bg-gray-800 flex items-center justify-center text-4xl">
          ⏰
        </div>
        <span className="text-xl font-semibold">Acompanhe sua produtividade diária e visualize seu progresso.</span>
      </a>
    </MotionBlock>
  );
}
