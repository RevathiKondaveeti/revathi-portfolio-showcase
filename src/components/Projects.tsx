
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Online Donation Website",
    description: "A full-stack web application for managing online donations with secure authentication and role-based access control.",
    techs: ["React", "Spring Boot", "Security", "API", "PostgreSQL"],
    features: [
      "End-to-end web application integrating frontend and backend",
      "Secure authentication and role-based access control",
      "Optimized API performance for scalability and faster data processing"
    ]
  },
  {
    title: "Library Management System",
    description: "A comprehensive library management solution for cataloging, borrowing, and returning books with transaction tracking.",
    techs: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Full-stack application using React, Node.js, and MongoDB",
      "Integrated API handling and state management for seamless UI/UX",
      "Transaction management and cataloging features"
    ]
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional information with a clean, responsive design.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    features: [
      "Responsive design for all device sizes",
      "Dynamic content and smooth animations",
      "Optimized performance and accessibility"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Projects</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="project-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="h-3 bg-portfolio-accent"></div>
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-gray-dark">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-portfolio-gray-dark mb-2">Technologies</h4>
                  <div className="flex flex-wrap">
                    {project.techs.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-portfolio-gray-dark mb-2">Key Features</h4>
                  <ul className="text-sm space-y-1 list-disc pl-5 text-portfolio-gray-dark">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
