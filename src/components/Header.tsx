
import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-portfolio-gray-dark">
          Revathi<span className="text-portfolio-accent">.dev</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <button 
            onClick={() => scrollToSection('home')}
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
          >
            Education
          </button>
          
          <div className="ml-4 flex space-x-2">
            <Button size="icon" variant="ghost" asChild>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <Button 
          size="icon" 
          variant="ghost" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-portfolio-gray-dark" />
          ) : (
            <Menu className="h-6 w-6 text-portfolio-gray-dark" />
          )}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-portfolio-gray-medium animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col">
            <button 
              onClick={() => scrollToSection('home')}
              className={`py-3 px-4 text-left ${activeSection === 'home' ? 'text-portfolio-accent font-medium' : 'text-portfolio-gray-dark'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`py-3 px-4 text-left ${activeSection === 'about' ? 'text-portfolio-accent font-medium' : 'text-portfolio-gray-dark'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`py-3 px-4 text-left ${activeSection === 'skills' ? 'text-portfolio-accent font-medium' : 'text-portfolio-gray-dark'}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`py-3 px-4 text-left ${activeSection === 'projects' ? 'text-portfolio-accent font-medium' : 'text-portfolio-gray-dark'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className={`py-3 px-4 text-left ${activeSection === 'education' ? 'text-portfolio-accent font-medium' : 'text-portfolio-gray-dark'}`}
            >
              Education
            </button>
            
            <div className="flex space-x-4 px-4 py-3">
              <Button size="icon" variant="ghost" asChild>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
