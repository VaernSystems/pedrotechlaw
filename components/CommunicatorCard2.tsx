'use client';
import { fadeInRight } from "@/lib/motion/variants";
import dynamic from "next/dynamic";

const MotionBlock = dynamic(() => import("./motions/Block"));

export default function CommunicatorCard2() {
  return (
    <MotionBlock variants={fadeInRight} className="p-8 bg-yellow-400 dark:bg-blue-900 rounded-xl text-black dark:text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Destaque</h2>
 <a
    href="https://runmapy.streamlit.app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-4 border border-gray-300 rounded-xl p-4 hover:shadow-lg transition"
  >
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9kTIflUz5LvYcPSaRYY74AHaHa%26r%3D0%26pid%3DApi&f=1&ipt=c724042734f2fcc18768a262e0483a24b74accaa8c046f117a53903855d921da&ipo=images" // ou qualquer imagem que você queira
      alt="Garmin 10 meses"
      className="w-16 h-16 rounded-md"
    />
    <span className="text-xl font-semibold">Vizualize 10 meses de GPS em um gráfico Interativo.</span>
  </a>
  
  <a
    href="https://pedrocalc.streamlit.app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-4 border border-gray-300 rounded-xl p-4 hover:shadow-lg transition"
  >
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.PxBuhT2oIuUO5I6Mx3HQ4AHaJh%3Fr%3D0%26pid%3DApi&f=1&ipt=4367c1a307f20a321bf9f330840cbb1084e80bb9af85f7ce0a941153dc7d352a&ipo=images" // ou qualquer imagem que voê queir
      alt="Calculadora Jurídica"
      className="w-16 h-16 rounded-md"
    />
    <span className="text-xl font-semibold">Calculdora Jurídica com Data Science</span>
  </a>
               </MotionBlock>
  );
}
