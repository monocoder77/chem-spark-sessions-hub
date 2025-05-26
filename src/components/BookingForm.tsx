
import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    session: '',
    experience: '',
    goals: ''
  });

  const sessions = [
    {
      id: 'june',
      title: 'Intensive Chemistry Foundations',
      date: 'June 10-14, 2024',
      time: '9:00 AM - 12:00 PM',
      description: 'Master fundamental concepts and problem-solving techniques',
      spots: '3 spots remaining'
    },
    {
      id: 'july1',
      title: 'AP Chemistry Exam Prep',
      date: 'July 1-5, 2024',
      time: '2:00 PM - 5:00 PM',
      description: 'Advanced topics and AP exam strategies',
      spots: '2 spots remaining'
    },
    {
      id: 'july2',
      title: 'Advanced Problem Solving',
      date: 'July 22-26, 2024',
      time: '10:00 AM - 1:00 PM',
      description: 'Complex calculations and laboratory applications',
      spots: '4 spots remaining'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.session) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and session selection are required.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Booking Request Submitted!",
      description: "I'll contact you within 24 hours to confirm your session.",
    });
    
    console.log('Booking submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      session: '',
      experience: '',
      goals: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Session</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from three intensive chemistry tutoring sessions this summer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Available Sessions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Available Sessions</h3>
            {sessions.map((session) => (
              <Card key={session.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    {session.title}
                  </CardTitle>
                  <CardDescription className="text-base">{session.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-600 font-medium">
                      <Users className="w-4 h-4" />
                      <span>{session.spots}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Reserve Your Spot</CardTitle>
              <CardDescription>Fill out the form below to book your tutoring session</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="session">Select Session *</Label>
                  <Select value={formData.session} onValueChange={(value) => handleInputChange('session', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a session" />
                    </SelectTrigger>
                    <SelectContent>
                      {sessions.map((session) => (
                        <SelectItem key={session.id} value={session.id}>
                          {session.title} - {session.date}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="experience">Chemistry Experience Level</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (High School Chemistry)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (Honors Chemistry)</SelectItem>
                      <SelectItem value="advanced">Advanced (AP Chemistry)</SelectItem>
                      <SelectItem value="college">College Level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="goals">Learning Goals (Optional)</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => handleInputChange('goals', e.target.value)}
                    placeholder="What specific topics or skills would you like to focus on?"
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Book My Session
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
