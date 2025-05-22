
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-gray-dark py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            Revathi<span className="text-portfolio-accent">.dev</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
            <a href="#education" className="text-white/70 hover:text-white transition-colors">Education</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
          </nav>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:krevathi1903@gmail.com" 
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} Revathi Kondaveeti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
