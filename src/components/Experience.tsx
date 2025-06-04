import React, { useEffect, useRef } from 'react';
import { Calendar, Award } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  period: string;
  description: string;
}

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "IEDC Innovate X Mentor",
      period: "Jan 2025 – Present",
      description: "Guiding student teams through ideation, prototyping, and pitching innovative solutions. Contributing to building a strong innovation ecosystem within the campus."
    },
    {
      id: 2,
      title: "IEEE SB LMC Chair",
      period: "Jan 2024 – Apr 2025",
      description: "Spearheaded organization of technical talks, coding workshops, and hackathons. Conducted training for IEEE Xtreme 24-Hour Programming Competition."
    },
    {
      id: 3,
      title: "Mu Learn Campus Lead",
      period: "Aug 2023 – Apr 2025",
      description: "Established and led the first Mu Learn campus chapter, organizing peer-to-peer learning circles and study groups."
    },
    {
      id: 4,
      title: "GDSC Lead",
      period: "Oct 2024 – Apr 2025",
      description: "Launched and led the first Google Developer Student Club chapter at LMC, building a dynamic tech community."
    },
    {
      id: 5,
      title: "IEEE Xtreme Kerala Section Co-Lead",
      period: "May 2024 – Oct 2024",
      description: "Mentored over 80 IEEE student branches across Kerala section, fostering competitive programming culture."
    },
    {
      id: 6,
      title: "IEDC Finance & Student Lead",
      period: "Aug 2023 – Apr 2025",
      description: "Managed budgeting and financial planning for IEDC events, coordinated networking events with entrepreneurs."
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
    
    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Leadership Experience
          </span>
          <span className="block w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="relative">
          {/* Timeline Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-indigo-500 to-blue-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`timeline-item opacity-0 transform ${
                  index % 2 === 0 ? 'translate-x-12' : '-translate-x-12'
                } transition-all duration-700 delay-${100 * index}`}
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 p-4">
                    <div className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 ${
                      index % 2 === 0 ? 'border-purple-600' : 'border-blue-500'
                    } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center text-sm text-purple-600 dark:text-purple-400 mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex justify-center items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center z-10">
                      <Award size={20} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;