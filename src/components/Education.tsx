
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle, Bookmark } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      icon: <Award className="h-8 w-8 text-portfolio-accent" />,
      description: "Foundational knowledge of AWS Cloud services and concepts",
      link: "#"
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      icon: <Bookmark className="h-8 w-8 text-portfolio-accent" />,
      description: "Expert in developing enterprise applications using Red Hat technologies",
      link: "#"
    },
    {
      title: "Salesforce AI Associate",
      icon: <CheckCircle className="h-8 w-8 text-portfolio-accent" />,
      description: "In-depth training on Salesforce AI capabilities and implementation",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-portfolio-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Professional Certifications</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="overflow-hidden animate-slide-up hover:shadow-lg transition-all duration-300 hover:-translate-y-1" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-1 bg-portfolio-accent"></div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-portfolio-gray-medium rounded-full">
                  {cert.icon}
                </div>
                <h3 className="font-semibold text-lg text-portfolio-gray-dark mb-2">{cert.title}</h3>
                <p className="text-portfolio-gray-dark text-sm mb-4">{cert.description}</p>
                <Badge className="bg-portfolio-accent hover:bg-portfolio-accent/80">
                  <a href={cert.link} className="text-white">View Certificate</a>
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
