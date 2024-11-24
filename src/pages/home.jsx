import { motion } from 'framer-motion';
import { Button, Image } from 'antd';
import { GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import { FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { DiMysql, DiMongodb } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiNestjs, SiSupabase } from 'react-icons/si';

export const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex justify-center items-center py-16 px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-2">
              Hi, I'm Mothish{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto md:mx-0">
              I’m a front-end developer with a passion for creating beautiful and accessible web experiences. I’m focused on building fast, responsive, and user-friendly websites and applications.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.24 3.56a1.5 1.5 0 012.12 0l2.12 2.12a1.5 1.5 0 010 2.12L5.64 23.64a3 3 0 11-4.24-4.24l16.84-16.84z" />
                </svg>
                Bengaluru, India
              </div>
              <span className="text-sm text-green-500">● Available for new projects</span>
            </div>
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              <a href="https://twitter.com" aria-label="Twitter">
                <Button type="link" icon={<TwitterOutlined />} className="text-blue-500 hover:text-blue-700" />
              </a>
              <a href="https://github.com" aria-label="GitHub">
                <Button type="link" icon={<GithubOutlined />} className="text-gray-700 hover:text-black" />
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="flex-1 flex justify-center items-center"
          >
            <Image width={200} src="/mothish2.png" alt="Mothish's Portrait" className="shadow-lg" />
          </motion.div>
        </div>
      </motion.div>

      {/* About Me Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        className="p-8 md:p-16 rounded-lg mx-6 md:mx-16 -mt-20"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Curious about me? Here you have it:</h2>
        <p className="text-gray-600 mb-4">
          I'm a passionate, <span className="text-blue-500 font-medium">self-proclaimed designer</span> who specializes in full-stack development (React.js & Node.js). I enjoy bringing the technical and visual aspects of digital products to life with a focus on user experience and performance.
        </p>
        <p className="text-gray-600 mb-4">
          Since starting my web development journey in 2023, I’ve been building cutting-edge web applications using modern technologies such as <strong>Next.js, TypeScript, NestJS, TailwindCSS, Supabase</strong>, and much more.
        </p>
        <p className="text-gray-600 mb-4">
          I'm passionate about working on projects from ideation to full-stack development. When I'm not coding, you'll find me sharing tech insights on <span className="text-blue-500">Twitter</span> or building in public.
        </p>
        <p className="text-gray-600 mt-6">
          I’m always open to freelance work! Feel free to reach out and say hello. I promise I don't bite{" "}
          <span className="text-yellow-500">🐾</span>.
        </p>
      </motion.div>

      <div className="p-8 md:p-16 mx-6 md:mx-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Skills:</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Animated Skill Icons */}
          {[
            { icon: <FaReact size={50} className="text-blue-500" />, label: 'React.js' },
            { icon: <FaNodeJs size={50} className="text-green-600" />, label: 'Node.js' },
            { icon: <SiTypescript size={50} className="text-blue-500" />, label: 'TypeScript' },
            { icon: <FaJsSquare size={50} className="text-yellow-500" />, label: 'JavaScript' },
            { icon: <FaHtml5 size={50} className="text-orange-500" />, label: 'HTML5' },
            { icon: <FaCss3Alt size={50} className="text-blue-600" />, label: 'CSS3' },
            { icon: <FaSass size={50} className="text-pink-400" />, label: 'Sass' },
            { icon: <DiMysql size={50} className="text-blue-700" />, label: 'MySQL' },
            { icon: <DiMongodb size={50} className="text-green-700" />, label: 'MongoDB' },
            { icon: <SiTailwindcss size={50} className="text-teal-400" />, label: 'TailwindCSS' },
            { icon: <SiNextdotjs size={50} className="text-black" />, label: 'Next.js' },
            { icon: <SiNestjs size={50} className="text-red-600" />, label: 'NestJS' },
            { icon: <SiSupabase size={50} className="text-green-500" />, label: 'Supabase' },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {skill.icon}
              <span className="mt-2 text-gray-600">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
