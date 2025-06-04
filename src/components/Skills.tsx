import React, { useState, useEffect } from 'react';
import { 
  Code, Database, Globe, Brain, Users, Wrench 
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("programming");
  const [animated, setAnimated] = useState(false);
  
  const skillCategories: SkillCategory[] = [
    {
      id: "programming",
      title: "Programming",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C", level: 80 },
        { name: "C++", level: 75 },
        { name: "C#", level: 70 }
      ]
    },
    {
      id: "webdev",
      title: "Web Development",
      icon: <Globe size={24} />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Django", level: 75 },
        { name: "ASP.NET Core", level: 70 }
      ]
    },
    {
      id: "database",
      title: "Database & Cloud",
      icon: <Database size={24} />,
      skills: [
        { name: "SQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "AWS (EC2, S3)", level: 70 },
        { name: "AWS Lambda", level: 65 },
        { name: "AWS RDS", level: 60 }
      ]
    },
    {
      id: "ai",
      title: "AI & ML",
      icon: <Brain size={24} />,
      skills: [
        { name: "TensorFlow", level: 75 },
        { name: "Keras", level: 70 },
        { name: "scikit-learn", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 90 }
      ]
    },
    {
      id: "leadership",
      title: "Leadership",
      icon: <Users size={24} />,
      skills: [
        { name: "Team Management", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Project Planning", level: 80 },
        { name: "Mentoring", level: 85 }
      ]
    },
    {
      id: "tools",
      title: "Tools & Others",
      icon: <Wrench size={24} />,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 85 },
        { name: "UI/UX Design", level: 75 },
        { name: "Problem-solving", level: 90 }
      ]
    }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [animated]);

  const activeCategory = skillCategories.find(category => category.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
          <span className="block w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 border-r dark:border-gray-700">
              <div className="p-6">
                <div className="space-y-2">
                  {skillCategories.map(category => (
                    <button
                      key={category.id}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg text-left transition-all duration-300 ${
                        activeTab === category.id 
                          ? 'bg-gradient-to-r from-purple-600/10 to-blue-500/10 text-purple-600 dark:text-purple-400 font-medium'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }`}
                      onClick={() => setActiveTab(category.id)}
                    >
                      <span className={`${
                        activeTab === category.id 
                          ? 'text-purple-600 dark:text-purple-400'
                          : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {category.icon}
                      </span>
                      <span>{category.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-white">
                  {activeCategory?.icon}
                  <span>{activeCategory?.title} Skills</span>
                </h3>
                
                <div className="space-y-6">
                  {activeCategory?.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
                          style={{ 
                            width: animated ? `${skill.level}%` : '0%',
                            transition: `width 1s ease-in-out ${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;