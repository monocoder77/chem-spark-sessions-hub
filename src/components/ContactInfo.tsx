
import React from 'react';
import { Mail, Phone, Clock, Award, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactInfo = () => {
  const tutors = [
    {
      name: "Aarav Agarwal",
      qualifications: [
        "Perfect 100 in AP Chemistry",
        "Highly knowledgeable in advanced concepts",
        "Research experience at Rice University",
        "Research experience at TCU"
      ]
    },
    {
      name: "Akhil",
      qualifications: [
        "Perfect 100 in AP Chemistry",
        "High achieving student",
        "Never scored below 100 on any test",
        "5s on all AP exams"
      ]
    },
    {
      name: "Timi",
      qualifications: [
        "100 test average",
        "2 years of teaching experience",
        "Material curator and developer",
        "Specialized in exam preparation"
      ]
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:mentora@gmail.com?subject=Tutoring Inquiry';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+12542717880';
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Your Tutors</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from experienced tutors who have achieved exceptional results in mathematics, chemistry, and test preparation
          </p>
        </div>

        {/* Tutors Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {tutors.map((tutor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  {tutor.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tutor.qualifications.map((qual, qualIndex) => (
                    <li key={qualIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{qual}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-600 text-sm">mentora@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-green-600 text-sm">(254) 271-7880</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-orange-600 text-sm">Within 24 hours</p>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Button onClick={handleEmailClick} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button onClick={handlePhoneClick} variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Teaching Philosophy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                Our Teaching Philosophy
              </CardTitle>
              <CardDescription>What makes our tutoring approach effective</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  We believe every student can excel in mathematics, chemistry, and test preparation with the right guidance. 
                  Our approach combines rigorous academic preparation with practical problem-solving skills that build 
                  confidence and lasting understanding.
                </p>
                <p className="text-gray-700">
                  Whether you're preparing for advanced coursework, standardized tests, or need foundational support, 
                  our experienced tutors will meet you where you are and help you reach your goals through personalized instruction.
                </p>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <h4 className="font-semibold mb-3 text-center">Our Commitment</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">100%</div>
                      <div className="text-xs text-gray-600">Qualified Tutors</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">24hr</div>
                      <div className="text-xs text-gray-600">Response Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">1:1</div>
                      <div className="text-xs text-gray-600">Personalized Attention</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Form */}
        <Card className="max-w-2xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-center">Ready to Get Started?</CardTitle>
            <CardDescription className="text-center">Send us a message and we'll get back to you soon</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              handleEmailClick();
            }}>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea 
                placeholder="Your message or questions about tutoring..."
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactInfo;
