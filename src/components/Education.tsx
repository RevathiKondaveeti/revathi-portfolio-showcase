
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle, Bookmark } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      icon: <Award className="h-8 w-8 text-gray-800" />,
      description: "Foundational knowledge of AWS Cloud services and concepts",
      link: "https://www.credly.com/badges/e77903ac-981d-45b0-b231-de86d3f1174b/public_url"
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      icon: <Bookmark className="h-8 w-8 text-gray-800" />,
      description: "Expert in developing enterprise applications using Red Hat technologies",
      link: "https://www.credly.com/badges/e0c5ee7a-6694-4e5a-83cc-6b8da70d7dc2/public_url"
    },
    {
      title: "Salesforce AI Associate",
      icon: <CheckCircle className="h-8 w-8 text-gray-800" />,
      description: "In-depth training on Salesforce AI capabilities and implementation",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Professional Certifications</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-1 bg-gray-800"></div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-gray-100 rounded-full">
                  {cert.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                <Badge className="bg-gray-800 hover:bg-gray-700">
                  <a 
                    href={cert.link} 
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
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
