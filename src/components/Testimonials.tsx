import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Dr. Sajitha G",
      role: "IEEE Mentor, Lourdes Matha College",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Akshay is an exceptional student leader who consistently demonstrates initiative and innovation. His ability to motivate peers and execute complex technical projects has significantly enhanced our IEEE Student Branch."
    },
    {
      id: 2,
      name: "Prof. Vishnu R",
      role: "IEDC Nodal Officer",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Working with Akshay on the Smart Wipe project was a pleasure. His technical acumen and problem-solving skills were instrumental in securing funding from KSUM. He possesses both technical depth and leadership qualities."
    },
    {
      id: 3,
      name: "Vishnu Padmanabhan",
      role: "Google Developer Expert, Cloud",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "I mentored Akshay during his GDSC leadership, and I was impressed by his dedication to building an inclusive tech community. His ability to grasp complex concepts and explain them to peers is commendable."
    },
    {
      id: 4,
      name: "Amrutha S",
      role: "IEEE Kerala Section Chair",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      content: "Akshay's coordination of the IEEE Xtreme programming competition across Kerala was exemplary. He demonstrated excellent organizational skills and a genuine passion for fostering technical excellence among students."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Testimonials
          </span>
          <span className="block w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="absolute top-0 left-0 w-20 h-20 bg-purple-600 rounded-tl-2xl rounded-br-2xl flex items-center justify-center">
              <Quote size={32} className="text-white" />
            </div>
            
            <div className="ml-12 pt-8">
              <div className="relative min-h-[200px]">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`transition-opacity duration-500 absolute inset-0 ${
                      index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <p className="text-gray-600 dark:text-gray-300 text-lg italic mb-8">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-purple-600 dark:text-purple-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 flex justify-center gap-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-purple-600 w-8' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;