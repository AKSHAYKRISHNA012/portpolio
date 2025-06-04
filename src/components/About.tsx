import React, { useEffect, useRef } from 'react';
import { User, Download } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            About Me
          </span>
          <span className="block w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 text-center">
            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700">
              <div className="relative inline-block">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mx-auto shadow-xl animate-pulse-slow">
                  <User size={80} className="text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg p-5 animate-float">
                  <div className="text-xs font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    Est. 2002
                  </div>
                </div>
              </div>
              
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-full border border-gray-300 dark:border-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="md:col-span-7 animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-700 delay-200">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Passionate technology enthusiast with strong analytical and leadership skills, driven by innovation and a deep interest in the latest technologies. Currently pursuing Bachelor of Technology in Computer Science at Lourdes Matha College of Science and Technology.
              </p>
              
              <p className="text-lg leading-relaxed">
                Skilled in creative problem-solving and delivering effective, forward-thinking solutions. A proactive learner committed to excellence, equipped to lead teams toward impactful, high-quality results that push technological boundaries.
              </p>
              
              <p className="text-lg leading-relaxed">
                From Nedumangad, Thiruvananthapuram, I've been actively involved in building tech communities, mentoring fellow students, and developing innovative solutions that make a real-world impact.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Leadership Roles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;