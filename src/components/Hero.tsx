
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-portfolio-gray-light pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center md:text-left animate-fade-in">
          <p className="text-portfolio-accent font-medium mb-2">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-gray-dark mb-4">
            Revathi Kondaveeti
          </h1>
          <p className="text-xl md:text-2xl text-portfolio-gray-dark mb-8">
            Full Stack Developer & Computer Science Student
          </p>
          <p className="text-portfolio-gray-dark max-w-2xl mb-10 md:pr-12">
            Computer Science undergraduate with a strong interest in Full Stack Development
            and emerging technologies. Experienced with React.js, Node.js, Python, Spring Boot,
            and microservices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white"
              size="lg"
            >
              Download CV
            </Button>
            <Button 
              onClick={scrollToAbout} 
              variant="outline"
              size="lg"
              className="group"
            >
              Explore More
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          className="animate-bounce cursor-pointer"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-8 w-8 text-portfolio-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
