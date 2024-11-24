import React from 'react';
import { Timeline } from 'antd';
import { motion } from 'framer-motion';

export const Experience = () => {
  // Experience data
  const experiences = [
    {
      title: 'Software Engineer - Esyasoft Technologies',
      duration: '2023 - 2024',
      description: 'Worked as a front-end developer for MDMS to manage and visualize energy consumption data for utilities. Integrated various reporting features and ensured mobile responsiveness.',
      responsibilities: [
        'Developed interactive and responsive UIs using React.js and Ant Design.',
        'Implemented secure API calls to interact with energy data.',
        'Worked on data visualization using charts and graphs for real-time energy data insights.',
        'Ensured cross-browser compatibility and mobile responsiveness.',
      ],
      technologies: ['React.js', 'Redux', 'Node.js', 'Ant Design'],
    }
  ];

  const projects = [
    {
      title: 'MDMS',
      duration: '2023 - 2024',
      description: 'Worked as a front-end developer for MDMS to manage and visualize energy consumption data for utilities. Integrated various reporting features and ensured mobile responsiveness.',
      responsibilities: [
        'Developed interactive and responsive UIs using React.js and Ant Design.',
        'Implemented secure API calls to interact with energy data.',
        'Worked on data visualization using charts and graphs for real-time energy data insights.',
        'Ensured cross-browser compatibility and mobile responsiveness.',
      ],
      technologies: ['React.js', 'Redux', 'Node.js', 'Ant Design'],
    },
    {
      title: 'Consumer-portal',
      duration: '2023 - 2024',
      description: 'Worked as a front-end developer for MDMS to manage and visualize energy consumption data for utilities. Integrated various reporting features and ensured mobile responsiveness.',
      responsibilities: [
        'Developed interactive and responsive UIs using React.js and Ant Design.',
        'Implemented secure API calls to interact with energy data.',
        'Worked on data visualization using charts and graphs for real-time energy data insights.',
        'Ensured cross-browser compatibility and mobile responsiveness.',
      ],
      technologies: ['React.js', 'Redux', 'Node.js', 'Ant Design'],
    },
    {
      title: 'Asp.net Mdms',
      duration: '2023 - 2024',
      description: 'Worked as a front-end developer for MDMS to manage and visualize energy consumption data for utilities. Integrated various reporting features and ensured mobile responsiveness.',
      responsibilities: [
        'Developed interactive and responsive UIs using React.js and Ant Design.',
        'Implemented secure API calls to interact with energy data.',
        'Worked on data visualization using charts and graphs for real-time energy data insights.',
        'Ensured cross-browser compatibility and mobile responsiveness.',
      ],
      technologies: ['React.js', 'Redux', 'Node.js', 'Ant Design'],
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      {/* Experience Section */}
      <h2 className="text-3xl font-semibold mb-8 text-center text-purple-600 dark:text-purple-400">Work Experience</h2>
      <Timeline mode="left">
        {experiences.map((experience, index) => (
          <Timeline.Item
            key={index}
            color={index % 2 === 0 ? 'blue' : 'green'}
            dot={<img src="esyasoft.png" alt="icon" className="w-10 h-10 rounded-full" />}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
            >
              <div className="text-lg font-medium text-gray-800 dark:text-gray-100">{experience.title}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{experience.duration}</div>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{experience.description}</p>

              <div className="mt-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-200">Responsibilities:</h4>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-200">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 dark:bg-purple-600 dark:text-purple-200 text-sm py-1 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Timeline.Item>
        ))}
      </Timeline>

      {/* Project Showcase Section */}
      <h2 className="text-3xl font-semibold mt-16 mb-8 text-center text-purple-600 dark:text-purple-400">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          >
            <div className="text-xl font-semibold text-gray-800 dark:text-gray-100">{project.title}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{project.duration}</div>
            <p className="text-gray-700 dark:text-gray-300 mt-4">{project.description}</p>
            <div className="mt-4">
              <h4 className="font-medium text-gray-700 dark:text-gray-200">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-700 dark:bg-purple-600 dark:text-purple-200 text-sm py-1 px-3 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
