
import React from 'react';
import { BookOpen, FlaskConical, Calculator, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ContentPreview = () => {
  const sampleProblems = [
    {
      id: 1,
      title: "Dimensional Analysis",
      difficulty: "Advanced Prep",
      topic: "Foundation Skills",
      problem: "Convert 2.5 moles of glucose (C₆H₁₂O₆) to grams using dimensional analysis",
      hint: "Use molar mass and unit conversion factors"
    },
    {
      id: 2,
      title: "Equilibrium Calculations",
      difficulty: "AP Prep",
      topic: "Chemical Equilibrium",
      problem: "Calculate the equilibrium concentrations for the reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
      hint: "Use the ICE table method and Kc = 0.105 at 472°C"
    },
    {
      id: 3,
      title: "Kinetics Problem",
      difficulty: "AP Crash Course",
      topic: "Reaction Rates",
      problem: "Determine the rate law and rate constant for a reaction given experimental data",
      hint: "Compare initial rates to find the order with respect to each reactant"
    }
  ];

  const advancedPrepTopics = [
    "Dimensional Analysis",
    "Naming",
    "Basic Reactions",
    "Balancing Reactions",
    "Stoichiometry",
    "Net Ionic Redox"
  ];

  const apChemPrepTopics = [
    "Go over all units slightly",
    "Unit 1 - Atomic Structure",
    "Unit 2 - Molecular & Ionic Bonding",
    "Kinetics",
    "Equilibrium",
    "Acids & Bases"
  ];

  const apCrashCourseTopics = [
    "Final Review of Key Units",
    "Exam Strategy & Timing",
    "FRQ Problem Types",
    "Calculator & Non-Calculator Sections",
    "Common Mistakes to Avoid",
    "Last-Minute Formula Review"
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

        {/* Topics Covered by Session */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Core Topics by Session</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Advanced Chemistry Prep */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Advanced Chemistry Prep</CardTitle>
                <CardDescription>Foundation concepts and problem-solving</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {advancedPrepTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* AP Chemistry Prep */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">AP Chemistry Prep</CardTitle>
                <CardDescription>Comprehensive AP curriculum coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {apChemPrepTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* AP Chemistry Crash Course */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">AP Chemistry Crash Course</CardTitle>
                <CardDescription>Final exam preparation and strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {apCrashCourseTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Our Teaching Approach</h3>
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
