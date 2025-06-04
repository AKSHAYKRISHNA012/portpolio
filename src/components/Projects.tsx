import React, { useState } from 'react';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Wipe",
      description: "Designed an efficient and scalable cloud data deletion system using Invertible Bloom Filters, ensuring verifiable outsourced data deletion and detecting malicious cloud behavior.",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["C#", ".NET Framework", "SQL"]
    },
    {
      id: 2,
      title: "Dorsal Hand Vein Authentication",
      description: "Developed a biometric authentication system based on dorsal hand vein patterns offering contactless, secure verification resistant to spoofing.",
      image: "https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "OpenCV", "Machine Learning"]
    },
    {
      id: 3,
      title: "Fake Currency Detection",
      description: "Built an advanced counterfeit currency detection system using computer vision and ML to analyze security features and detect anomalies in currency notes.",
      image: "https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "OpenCV", "Machine Learning"]
    },
    {
      id: 4,
      title: "Smart Travel Assistant",
      description: "Created an innovative travel assistant solution for visually impaired individuals that provides real-time navigation guidance and obstacle detection.",
      image: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["IoT", "Computer Vision", "Embedded Systems"],
      link: "https://github.com/AKSHAYKRISHNA012/travel-assistant"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
          <span className="block w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      View Project
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-gray-500 dark:text-gray-400">
                      <Code size={16} className="mr-1" />
                      Private Project
                    </span>
                  )}
                  
                  <div className={`
                    relative inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400
                    after:absolute after:bottom-0 after:left-0 after:bg-purple-600 dark:after:bg-purple-400
                    after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300
                  `}>
                    View Details 
                    <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/AKSHAYKRISHNA012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-full border border-gray-300 dark:border-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;