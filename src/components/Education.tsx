
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-portfolio-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Academic background</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg border border-portfolio-gray-medium">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-portfolio-gray-dark">Bachelor of Computer Science</h3>
                      <p className="text-portfolio-gray-dark">Koneru Lakshmaiah University</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-portfolio-gray-medium px-2 py-1 rounded text-xs">2026</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="font-medium text-portfolio-accent">GPA: 9.41</span>
                    <span className="text-xs bg-portfolio-gray-medium px-2 py-1 rounded">Guntur, Andhra Pradesh, India</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-slide-up animation-delay-100">
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
              <CardDescription>Professional qualifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 border-b">
                  <CheckCircle className="h-5 w-5 text-portfolio-accent mt-1" />
                  <div>
                    <h3 className="font-medium text-portfolio-gray-dark">AWS Certified Cloud Practitioner</h3>
                    <a href="#" className="text-sm text-portfolio-accent hover:underline">View Certificate</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 border-b">
                  <CheckCircle className="h-5 w-5 text-portfolio-accent mt-1" />
                  <div>
                    <h3 className="font-medium text-portfolio-gray-dark">Red Hat Certified Enterprise Application Developer</h3>
                    <a href="#" className="text-sm text-portfolio-accent hover:underline">View Certificate</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3">
                  <CheckCircle className="h-5 w-5 text-portfolio-accent mt-1" />
                  <div>
                    <h3 className="font-medium text-portfolio-gray-dark">Salesforce AI Associate</h3>
                    <p className="text-sm text-portfolio-gray-dark">In-depth training on Salesforce AI capabilities and implementation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2 animate-slide-up animation-delay-200">
            <CardHeader>
              <CardTitle>Extracurricular Activities</CardTitle>
              <CardDescription>Beyond academics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-portfolio-gray-medium">
                  <h3 className="font-medium text-portfolio-gray-dark mb-2">University Events</h3>
                  <p className="text-sm text-portfolio-gray-dark">
                    Organized and contributed to university events and participated in creative arts.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-portfolio-gray-medium">
                  <h3 className="font-medium text-portfolio-gray-dark mb-2">Hackathons & Coding Challenges</h3>
                  <p className="text-sm text-portfolio-gray-dark">
                    Participated in university-level hackathons and coding challenges, collaborating with peers to develop innovative solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
