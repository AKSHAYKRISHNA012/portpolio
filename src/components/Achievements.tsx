import React, { useRef, useEffect } from 'react';
import { Award, Rocket, Trophy, BookOpen, Globe, Notebook as Robot } from 'lucide-react';

interface Achievement {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const achievements: Achievement[] = [
    {
      id: 1,
      icon: <Rocket size={24} />,
      title: "Startup Funding Success",
      description: "Secured ₹60,000 funding from Kerala Startup Mission (KSUM) for developing an innovative travel assistant solution for visually impaired individuals."
    },
    {
      id: 2,
      icon: <Trophy size={24} />,
      title: "IDEA FEST 2022 Winner",
      description: "Won the prestigious IDEA FEST 2022 competition conducted by Kerala Startup Mission (KSUM)."
    },
    {
      id: 3,
      icon: <Award size={24} />,
      title: "National Recognition",
      description: "Represented Kerala in Viksit Bharat Young Leaders Dialogue 2025 at Bharat Mandapam, New Delhi, in the presence of Hon'ble Prime Minister Shri Narendra Modi."
    },
    {
      id: 4,
      icon: <BookOpen size={24} />,
      title: "GTech MuLearner Level 7",
      description: "Achieved GTech MuLearner Level 7 certification, demonstrating excellence in continuous learning and skill development."
    },
    {
      id: 5,
      icon: <Globe size={24} />,
      title: "Space Innovation",
      description: "Submitted project report \"In Orbit: Space Station Design Challenge\" for ISRO World Space Week 2022."
    },
    {
      id: 6,
      icon: <Robot size={24} />,
      title: "Meta Hackathon",
      description: "Participated in Spark AR Hackathon by Meta, exploring augmented reality technologies."
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.achievement-card');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Key Achievements
          </span>
          <span className="block w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className={`achievement-card opacity-0 transform translate-y-8 transition-all duration-700 delay-${index * 100} bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl border-l-4 border-purple-600 group hover:-translate-y-2`}
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  {achievement.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;