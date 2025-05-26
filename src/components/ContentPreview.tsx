
import React from 'react';
import { BookOpen, FlaskConical, Calculator, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ContentPreview = () => {
  const sampleProblems = [
    {
      id: 1,
      title: "Equilibrium Calculations",
      difficulty: "AP Level",
      topic: "Chemical Equilibrium",
      problem: "Calculate the equilibrium concentrations for the reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
      hint: "Use the ICE table method and Kc = 0.105 at 472°C"
    },
    {
      id: 2,
      title: "Thermodynamics Problem",
      difficulty: "Advanced",
      topic: "Enthalpy & Entropy",
      problem: "Determine ΔG° for the combustion of methane at 298K using standard formation data",
      hint: "Remember: ΔG° = ΔH° - TΔS°"
    },
    {
      id: 3,
      title: "Electrochemistry",
      difficulty: "AP Level",
      topic: "Redox & Cells",
      problem: "Calculate the cell potential for a galvanic cell with Zn²⁺/Zn and Cu²⁺/Cu half-cells",
      hint: "E°cell = E°cathode - E°anode"
    }
  ];

  const topicsCovered = [
    { icon: FlaskConical, title: "Atomic Structure", description: "Electron configuration, periodicity, and bonding" },
    { icon: Calculator, title: "Stoichiometry", description: "Mass relationships and limiting reagents" },
    { icon: BookOpen, title: "Thermodynamics", description: "Enthalpy, entropy, and Gibbs free energy" },
    { icon: Award, title: "Kinetics", description: "Reaction rates and mechanisms" }
  ];

  return (
    <section id="content" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a preview of the high-quality content and problem-solving techniques you'll master in our sessions
          </p>
        </div>

        {/* Topics Covered */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Core Topics Covered</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topicsCovered.map((topic, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <topic.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{topic.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sample Problems */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Sample Problems</h3>
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sampleProblems.map((problem) => (
              <Card key={problem.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{problem.title}</CardTitle>
                    <Badge variant="secondary">{problem.difficulty}</Badge>
                  </div>
                  <Badge variant="outline" className="w-fit">{problem.topic}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Problem:</h4>
                      <p className="text-gray-600 text-sm">{problem.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Hint:</h4>
                      <p className="text-blue-600 text-sm italic">{problem.hint}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Teaching Approach */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">My Teaching Approach</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold mb-2">Conceptual Foundation</h4>
              <p className="text-gray-600">Build strong understanding of underlying principles before diving into calculations</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold mb-2">Problem-Solving Strategies</h4>
              <p className="text-gray-600">Learn systematic approaches to tackle even the most challenging chemistry problems</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold mb-2">AP Exam Success</h4>
              <p className="text-gray-600">Master the specific skills and strategies needed to excel on the AP Chemistry exam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
