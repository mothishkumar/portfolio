import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiMongodb, SiFlask } from 'react-icons/si';

export const Projects = () => {
  // Personal Projects Data
  const projects = [
    {
      title: 'DSA Learning Platform',
      description: 'A platform for practicing and learning Data Structures and Algorithms (DSA) with interactive coding challenges and quizzes.',
      technologies: [
        { name: 'React.js', icon: <FaReact className="text-blue-600" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
        { name: 'JavaScript', icon: <DiJavascript1 className="text-yellow-400" /> }
      ],
      link: 'https://dsa-platform-link.com',
    },
    {
      title: 'Jarvis AI Assistant',
      description: 'A personal assistant built using Python and speech recognition to help with tasks like controlling home appliances, sending emails, etc.',
      technologies: [
        { name: 'Python', icon: <FaPython className="text-blue-500" /> },
        { name: 'Flask', icon: <SiFlask className="text-black" /> }
      ],
      link: 'https://jarvis-project-link.com',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A website showcasing my portfolio, including projects, blogs, and contact details, designed with React.js and modern UI principles.',
      technologies: [
        { name: 'React.js', icon: <FaReact className="text-blue-600" /> },
        { name: 'Tailwind CSS', icon: <img src="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/stable/tailwind-logo.svg" alt="Tailwind CSS" className="w-6 h-6" /> }
      ],
      link: 'https://portfolio-link.com',
    },
    {
      title: 'L And M Website',
      description: 'A website for restuarent , including foods, drinks, and cakes etc.., designed with React.js and modern UI principles.',
      technologies: [
        { name: 'React.js', icon: <FaReact className="text-blue-600" /> },
        { name: 'Tailwind CSS', icon: <img src="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/stable/tailwind-logo.svg" alt="Tailwind CSS" className="w-6 h-6" /> }
      ],
      link: 'https://portfolio-link.com',
    },
  ];

  return (
    <div className="p-8 rounded-lg shadow-xl bg-white dark:bg-darkBackground">
      <h2 className="text-4xl mb-8 text-center text-purple-600 dark:text-purple-300">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gray-200 dark:bg-darkBackground dark:hover:bg-darkBackground"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          >
            <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{project.title}</div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-gray-600 dark:text-gray-300 text-md">{tech.name}</span>
                </div>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-purple-700 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-500"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
