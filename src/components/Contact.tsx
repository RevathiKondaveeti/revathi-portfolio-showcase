
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We'll just simulate a form submission
    console.log('Form submitted');
    // In a real app, you would send this data to a backend
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 animate-slide-up">
            <p className="text-portfolio-gray-dark">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-gray-light p-3 rounded-full">
                  <Phone className="h-5 w-5 text-portfolio-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-portfolio-gray-dark">Phone</h3>
                  <p className="text-portfolio-gray-dark">+91 9392402973</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-gray-light p-3 rounded-full">
                  <Mail className="h-5 w-5 text-portfolio-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-portfolio-gray-dark">Email</h3>
                  <p className="text-portfolio-gray-dark">krevathi1903@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-gray-light p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-portfolio-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-portfolio-gray-dark">Location</h3>
                  <p className="text-portfolio-gray-dark">West Godavari, INDIA</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="overflow-hidden animate-slide-up animation-delay-100">
            <div className="h-2 bg-portfolio-accent"></div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  rows={4}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-white"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
