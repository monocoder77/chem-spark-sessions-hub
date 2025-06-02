
import React from 'react';
import { Calculator, FlaskConical, Star, BookOpen, Users, ChevronDown, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BookingForm from '@/components/BookingForm';
import ContentPreview from '@/components/ContentPreview';
import ContactInfo from '@/components/ContactInfo';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">DeltaXTutoring</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('content')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Subjects
              </button>
              <button onClick={() => scrollToSection('booking')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Schedule
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </button>
              <Button onClick={() => scrollToSection('booking')} className="bg-blue-600 hover:bg-blue-700">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Calculator className="w-20 h-20 mx-auto mb-6 text-blue-200" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Master Math, Chemistry & 
                <span className="text-blue-200"> Test Prep</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                Expert 1-on-1 tutoring in mathematics, chemistry, and SAT/ACT math preparation 
                designed to help you excel and achieve top scores
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Calculator className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold mb-2">Mathematics</h3>
                  <p className="text-blue-100 text-sm">Algebra, Calculus, and advanced math concepts</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <FlaskConical className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold mb-2">Chemistry</h3>
                  <p className="text-blue-100 text-sm">General and AP Chemistry mastery</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                  <h3 className="font-semibold mb-2">Test Prep</h3>
                  <p className="text-blue-100 text-sm">SAT and ACT math preparation</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Button 
                onClick={() => scrollToSection('booking')} 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                Schedule Session
              </Button>
              <Button 
                onClick={() => scrollToSection('content')} 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              >
                View Subjects
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* Tutoring Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Expert 1-on-1 Tutoring</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized tutoring sessions tailored to your learning style and academic goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-blue-100 hover:border-blue-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mathematics</h3>
                <p className="text-gray-600 mb-4">All levels from Algebra to Calculus</p>
                <p className="text-sm text-gray-600">Build strong foundations and master advanced problem-solving techniques</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-green-100 hover:border-green-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FlaskConical className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Chemistry</h3>
                <p className="text-gray-600 mb-4">General & AP Chemistry</p>
                <p className="text-sm text-gray-600">Comprehensive understanding of chemical concepts and laboratory applications</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-purple-100 hover:border-purple-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">SAT/ACT Math</h3>
                <p className="text-gray-600 mb-4">Test preparation & strategies</p>
                <p className="text-sm text-gray-600">Targeted preparation with proven strategies to maximize your test scores</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Preview Component */}
      <ContentPreview />

      {/* Booking Form Component */}
      <BookingForm />

      {/* Contact Info Component */}
      <ContactInfo />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold">DeltaXTutoring</span>
              </div>
              <p className="text-gray-400">
                Expert tutoring in mathematics, chemistry, and test preparation. 
                Helping students achieve academic excellence through personalized instruction.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('content')} className="hover:text-white transition-colors">Subject Areas</button></li>
                <li><button onClick={() => scrollToSection('booking')} className="hover:text-white transition-colors">Schedule Tutoring</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact Info</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>mentora@gmail.com</li>
                <li>(254) 271-7880</li>
                <li>Available for online & in-person tutoring</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 DeltaXTutoring. All rights reserved. Ready to excel in your studies?</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
