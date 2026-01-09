'use client';
import Image from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInLeft } from "@/lib/motion/variants";
import dynamic from "next/dynamic";
import siteMetadata from '@/data/siteMetadata';
const MotionBlock = dynamic(() => import("./motions/Block"));

const ProfileCard = () => {
  return (
    <MotionBlock variants={fadeInLeft} >
      <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-900 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-900">
              <Image
                src="/avatar.jpg"
                alt={siteMetadata.title}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Pedro Potz</h2>
              <p className="text-zinc-600 dark:text-zinc-300">
               Advogado | Tecnologia Aplicada ao Direito
              </p>
            </div>
          </div>
          <p className="mt-4 text-lg">
            Automação Jurídica e IA aplicada ao Direito
          </p>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            Soluções práticas com Python e IA para advogados, estudantes e escritórios jurídicos.
          </p>
        </CardContent>
      </Card>
    </MotionBlock>
  );
};
export default ProfileCard;
