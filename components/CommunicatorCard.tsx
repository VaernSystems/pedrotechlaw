'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function CommunicatorCard() {
  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-yellow-400 dark:bg-blue-900 rounded-xl text-black dark:text-white shadow-lg">
      <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://hub-produtividade.vercel.app/"
          className="w-full h-full border-0"
          title="Relatório Diário"
        />
      </div>
    </MotionBlock>
  );
}
