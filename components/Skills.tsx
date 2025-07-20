import { Badge } from "@/components/ui/badge";
import { Carter_One } from "next/font/google";

const skills = [
  {category: "Atuação",items:["Advogado","Python coding","Web App","Legal Automation","Data Science","Teaching"]},
  {category: "IA",items: ["Machine Learning", "Medical Diagnosis", "Proofreading", "Reinforcement Learning"],},
  { category: "Backend", items: ["Python","Node.js", "Nest.js", "Flask"] },
  { category: "Cloud", items: ["AWS", "Google Cloud", "Serverless"] },
  { category: "Web App", items: ["Django", "React", "SQL", "Javascript", "APIs","FastAPI","Streamlit","Flask"] },
  { category: "Advogado", items: ["Empresarial","Tecnológico","Processual","Tributário"]}
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
