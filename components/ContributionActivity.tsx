// components/ContributionActivity.tsx ou onde quer que seu componente esteja
"use client"; // Mantenha isso se o componente for interativo no futuro ou estiver em um Client Component

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Mantemos os componentes de UI se você quiser a aparência do card
import { cn } from "@/lib/utils"; // Mantenha se for usar para classes condicionais ou estilização

// Importe um arquivo de estilo se desejar estilos específicos para a imagem ou card
// import styles from './ContributionActivity.module.css'; 
// ou use Tailwind CSS diretamente nas classes

export default function ContributionActivity() {
  return (
    // <MotionBlock> envolvia o Card. Se você não usar animações, pode remover.
    // Se usar, certifique-se de importar MotionBlock e as variants (fadeInLeft, etc.)
    // Vamos manter o Card para manter a estrutura visual.
    <Card className={cn(
      "shadow-lg border-0 bg-white dark:bg-slate-700",
      "p-4 flex flex-col items-center justify-center" // Adicione estilos para centralizar
    )}>
      <CardHeader>
        <CardTitle>Minhas Contribuições no GitHub</CardTitle>
        {/* Você pode manter ou remover a descrição, dependendo se ela faz sentido para a imagem */}
        {/* <CardDescription>Um resumo visual da minha atividade de código.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center"> {/* Centraliza a imagem dentro do card */}
          <Image
            src="/static/images/github-chart.svg" // O caminho para sua imagem
            alt="Gráfico de Contribuições do GitHub"
            width={663} // Defina a largura da imagem. Ajuste conforme a imagem gerada.
            height={104} // Defina a altura da imagem. Ajuste conforme a imagem gerada.
            // layout="responsive" // Use "responsive" ou "fill" com um container pai para maior flexibilidade
            // objectFit="contain" // bom para manter a proporção sem cortar
            // className={styles.chartImage} // Se você usar um módulo CSS
            className="max-w-full h-auto rounded-lg" // Classes Tailwind CSS para responsividade e estilo
          />
        </div>
      </CardContent>
      {/* Seções de "Less" e "More" com os quadrados coloridos podem ser removidas
          pois são para o gráfico dinâmico. */}
    </Card>
    // </MotionBlock>
  );
}