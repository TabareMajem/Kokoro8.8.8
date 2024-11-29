import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Book, Brain, Heart, Star, Users, 
  Smile, BookOpen, Clock, CheckCircle, TrendingUp, BarChart2,
  PenTool, Wand2, GamepadIcon, Bot, School, GraduationCap,
  UserCheck, Trophy, Target
} from 'lucide-react';
import MainNavbar from '../components/layout/MainNavbar';
import MainFooter from '../components/layout/MainFooter';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-purple-50 to-white">
      <MainNavbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Transforming Education with Kokoro Quest
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              See How Kokoro Quest Empowers Students and Enhances Learning Outcomes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-4 rounded-full
                  bg-gradient-to-r from-teal-400 to-purple-500 text-white
                  font-semibold shadow-lg hover:shadow-xl transform hover:scale-105
                  transition-all duration-200"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Journey
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-full
                  bg-white text-purple-600 font-semibold shadow-md
                  hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Book className="w-5 h-5 mr-2" />
                See Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* User Groups Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Student Engagement",
                icon: Smile,
                features: [
                  "Daily mood check-in with AI companion",
                  "Personalized SEL activities",
                  "Interactive journaling and manga creation"
                ]
              },
              {
                title: "Teacher Involvement",
                icon: BookOpen,
                features: [
                  "Real-time analytics dashboard",
                  "Progress monitoring tools",
                  "Customizable content alignment"
                ]
              },
              {
                title: "Parent Participation",
                icon: Heart,
                features: [
                  "Regular progress updates",
                  "Access to child's manga stories",
                  "Collaborative home activities"
                ]
              }
            ].map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="p-3 bg-purple-100 rounded-xl w-fit mb-4">
                  <group.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Flow Section */}
      <div className="py-16 bg-gradient-to-b from-teal-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Your Learning Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-gray-600"
            >
              Experience emotional growth through an engaging adventure
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: PenTool,
                title: "Journal Your Story",
                description: "Express your thoughts and feelings through guided journaling"
              },
              {
                icon: Wand2,
                title: "AI Manga Creation",
                description: "Watch your journal transform into beautiful manga panels"
              },
              {
                icon: GamepadIcon,
                title: "Play & Learn",
                description: "Engage with AR games and interactive activities"
              },
              {
                icon: Bot,
                title: "AI Companion",
                description: "Get personalized guidance and support"
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="p-3 bg-gradient-to-br from-teal-400 to-purple-500 
                    rounded-xl w-fit mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8">
                    <ArrowRight className="w-8 h-8 text-purple-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Results Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Research-Backed Results
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart2,
                stat: "11%",
                title: "Academic Achievement",
                description: "Gain in academic performance through SEL integration",
                color: "from-teal-500 to-blue-500"
              },
              {
                icon: Brain,
                stat: "45%",
                title: "Emotional Regulation",
                description: "Reduction in anxiety symptoms with CBT techniques",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Star,
                stat: "87%",
                title: "Student Engagement",
                description: "Increase in classroom participation and motivation",
                color: "from-amber-500 to-orange-500"
              }
            ].map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className={`p-3 bg-gradient-to-br ${result.color} 
                  rounded-xl w-fit mx-auto mb-4`}>
                  <result.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {result.stat}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {result.title}
                </h3>
                <p className="text-gray-600">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-teal-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Transform Learning?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-teal-100 mb-8"
          >
            Join thousands of students on their journey of emotional discovery
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 rounded-full
                bg-white text-purple-600 font-semibold shadow-lg
                hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get Started Free
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full
                bg-purple-700 text-white font-semibold shadow-lg
                hover:shadow-xl transform hover:scale-105 transition-all"
            >
              <Book className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
          </motion.div>
        </div>
      </div>

      <MainFooter />
    </div>
  );
}