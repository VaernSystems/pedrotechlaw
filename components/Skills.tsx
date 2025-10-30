import { Badge } from "@/components/ui/badge";
import { Carter_One } from "next/font/google";

const skills = [
  { category: "Direito", items: ["Empresarial", "Tecnologia", "Contratos", "Compliance"] },
  { category: "Automação Legal", items: ["Python", "Legal Tech", "APIs", "Web Apps"] },
  { category: "Desenvolvimento", items: ["Django", "Flask", "Streamlit", "React"] },
  { category: "Data Science", items: ["Machine Learning", "SQL", "Análise de Dados"] }
];

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {skills.map((skill) => (
        <div key={skill.category}>
          <h3 className="font-semibold mb-2">{skill.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
