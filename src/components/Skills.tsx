
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["C", "Java", "Python", "SQL", "JavaScript"]
  },
  {
    category: "Frameworks",
    skills: ["Spring Boot", "React.js", "Node.js"]
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Critical Thinking", "Team Collaboration", "Time Management", "Communication"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-portfolio-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Tech Stack & Skills</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-portfolio-accent h-2"></div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-portfolio-gray-dark mb-4">{category.category}</h3>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
