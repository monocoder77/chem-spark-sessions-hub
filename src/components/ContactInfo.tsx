
import React from 'react';
import { Mail, Phone, MapPin, Clock, Award, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactInfo = () => {
  const qualifications = [
    "Ph.D. in Chemistry from Stanford University",
    "5+ years of AP Chemistry teaching experience",
    "Former research scientist at pharmaceutical company",
    "98% of students achieve 4 or 5 on AP Chemistry exam"
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:chemistry.tutor@email.com?subject=Chemistry Tutoring Inquiry';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+15551234567';
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to master chemistry? Contact me to discuss your goals and get started
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="lg:col-span-1">
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
                  <p className="text-blue-600 text-sm">chemistry.tutor@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <Phone className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-green-600 text-sm">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                <MapPin className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-purple-600 text-sm">Online & In-Person (Bay Area)</p>
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

          {/* Qualifications */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                About Your Tutor
              </CardTitle>
              <CardDescription>Experience and qualifications that ensure your success</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-gold-500" />
                    Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {qualifications.map((qual, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-4">Teaching Philosophy</h4>
                  <p className="text-gray-700 mb-4">
                    I believe every student can excel in chemistry with the right guidance. My approach combines 
                    rigorous academic preparation with practical problem-solving skills that build confidence 
                    and lasting understanding.
                  </p>
                  <p className="text-gray-700">
                    Whether you're preparing for the AP exam, strengthening fundamentals, or tackling advanced 
                    topics, I'll meet you where you are and help you reach your goals.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <h4 className="font-semibold mb-3 text-center">Success Stories</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-gray-600">AP Exam Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">150+</div>
                    <div className="text-sm text-gray-600">Students Tutored</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">4.9/5</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Form */}
        <Card className="max-w-2xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-center">Quick Question?</CardTitle>
            <CardDescription className="text-center">Send me a message and I'll get back to you soon</CardDescription>
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
                placeholder="Your message or questions about chemistry tutoring..."
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
