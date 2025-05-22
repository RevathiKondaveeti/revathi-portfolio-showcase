
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 animate-slide-up">
            <p className="text-portfolio-gray-dark">
              I am a Computer Science undergraduate at Koneru Lakshmaiah University, graduating in 2026. 
              My passion lies in Full Stack Development and exploring emerging technologies to create impactful, 
              scalable systems that solve real-world problems.
            </p>
            
            <p className="text-portfolio-gray-dark">
              With experience in React.js, Node.js, Python, and Spring Boot, I focus on developing 
              efficient APIs, optimizing database performance, and building responsive web applications.
              I am particularly interested in system design and collaborative development.
            </p>
            
            <p className="text-portfolio-gray-dark">
              When I'm not coding, I enjoy participating in hackathons and coding challenges, 
              organizing university events, and exploring creative arts. I am constantly learning 
              and expanding my skills to stay at the forefront of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="transform transition-all hover:scale-105 animate-slide-up">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">9.41</div>
                <div className="text-portfolio-gray-dark font-medium">GPA</div>
              </CardContent>
            </Card>
            
            <Card className="transform transition-all hover:scale-105 animate-slide-up animation-delay-100">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">3+</div>
                <div className="text-portfolio-gray-dark font-medium">Projects</div>
              </CardContent>
            </Card>
            
            <Card className="transform transition-all hover:scale-105 animate-slide-up animation-delay-200">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">3</div>
                <div className="text-portfolio-gray-dark font-medium">Certifications</div>
              </CardContent>
            </Card>
            
            <Card className="transform transition-all hover:scale-105 animate-slide-up animation-delay-300">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="text-3xl font-bold text-portfolio-accent mb-2">5+</div>
                <div className="text-portfolio-gray-dark font-medium">Technologies</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
