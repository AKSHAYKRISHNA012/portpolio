import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      const title = titleRef.current;
      const subtitle = subtitleRef.current;
      
      title.style.opacity = '0';
      subtitle.style.opacity = '0';
      
      setTimeout(() => {
        title.style.transition = 'opacity 1s ease, transform 1s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        subtitle.style.transition = 'opacity 1s ease, transform 1s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
        
        const text = subtitle.textContent || '';
        subtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
          if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
          }
        };
        
        typeWriter();
      }, 800);
    }
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-500/20 to-blue-500/20 dark:from-purple-900/30 dark:via-indigo-900/30 dark:to-blue-900/30"></div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 dark:bg-purple-500/5 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 dark:bg-blue-500/5 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent transform -translate-y-8"
          >
            Akshay Krishna A
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 transform -translate-y-8"
          >
            Tech Innovator • Student Leader • Problem Solver
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
            <a 
              href="#about" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Discover My Journey
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-full border border-gray-300 dark:border-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-4 animate-fade-in-delayed">
            <a 
              href="https://linkedin.com/in/akshay-krishna-a-749151222" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/AKSHAYKRISHNA012" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:akshaykrishna.a.2002@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 text-red-500 dark:text-red-400 rounded-full hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 bg-white dark:bg-gray-800 rounded-full animate-bounce hover:shadow-md transition-all duration-300"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="text-gray-800 dark:text-white" />
      </a>
    </section>
  );
};

export default Hero;