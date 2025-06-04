import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Inclusive Tech Communities in College Campuses",
      excerpt: "How to create welcoming and diverse technology communities that foster innovation and collaboration among students.",
      date: "May 15, 2025",
      author: "Akshay Krishna A",
      image: "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Leadership"
    },
    {
      id: 2,
      title: "The Future of Biometric Authentication Technologies",
      excerpt: "Exploring advanced biometric systems beyond fingerprints and facial recognition, with insights from the dorsal hand vein project.",
      date: "April 22, 2025",
      author: "Akshay Krishna A",
      image: "https://images.pexels.com/photos/8294609/pexels-photo-8294609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Technology"
    },
    {
      id: 3,
      title: "From Idea to Funded Startup: A Student's Journey",
      excerpt: "The complete process of transforming a college project into a funded startup with support from KSUM.",
      date: "March 10, 2025",
      author: "Akshay Krishna A",
      image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Entrepreneurship"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Latest Articles
          </span>
          <span className="block w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-full border border-gray-300 dark:border-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>View All Articles</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;