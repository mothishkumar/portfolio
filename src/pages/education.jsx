import React from 'react';
import { motion } from 'framer-motion';

export const Education = () => {
  const certifications = [
    { title: 'React.js Certification', image: 'nxtlogo.png', year: '2023', description: 'Learned the fundamentals of React.js for building dynamic and interactive web applications.' },
    { title: 'Express.js Certification', image: 'nxtlogo.png', year: '2023', description: 'Mastered Express.js for building server-side applications and APIs.' },
    { title: 'MSSQL Certification', image: 'nxtlogo.png', year: '2023', description: 'Learned to manage and query databases using Microsoft SQL Server (MSSQL).' },
    { title: 'JavaScript Certification', image: 'nxtlogo.png', year: '2023', description: 'Mastered JavaScript for building interactive and dynamic websites and web applications.' },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-8 text-center text-purple-600">Education</h2>

      {/* Education Timeline with animations */}
      <div className="space-y-8">
        {/* Bachelor of Technology */}
        <motion.div
          className="flex gap-8 items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
        >
          <img src="sveclogo.png" className="w-20 h-20 rounded-full shadow-lg" alt="Sree Vidyanikethan Logo" />
          <div className="bg-green-100 p-6 rounded-lg shadow-md w-full">
            <div className="text-xl font-semibold text-green-700">Bachelor of Technology</div>
            <div className="text-sm text-gray-500">2019 - 2023</div>
            <p className="text-gray-700 mt-2">Sree Vidyanikethan Engineering College, Chittoor</p>
            <p className="text-gray-500">Graduated with a CGPA of 8.4 in Electronics and Instrumentation Engineering (EIE).</p>
          </div>
        </motion.div>

        {/* Nxtwave Internship */}
        <motion.div
          className="flex gap-8 items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
        >
          <img src="nxtlogo.png" className="w-20 h-20 rounded-full shadow-lg" alt="Nxtwave Logo" />
          <div className="bg-purple-100 p-6 rounded-lg shadow-md w-full">
            <div className="text-xl font-semibold text-purple-700">Nxtwave</div>
            <div className="text-sm text-gray-500">2023 - 2023</div>
            <p className="text-gray-700 mt-2">Online Internship</p>
            <p className="text-gray-500">React.js, Node.js Full Stack Course</p>
          </div>
        </motion.div>
      </div>

      <h2 className="text-3xl font-semibold mt-16 mb-8 text-center text-purple-600">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          >
            <div className="flex flex-col items-center">
              <img src={cert.image} alt={cert.title} className="w-20 h-20 mb-4 rounded-full shadow-lg" />
              <div className="text-xl font-semibold text-gray-800">{cert.title}</div>
              <div className="text-sm text-gray-500">{cert.year}</div>
              <p className="text-gray-700 mt-4">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
