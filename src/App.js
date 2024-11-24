import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidedetails } from './components/sidedetails';
import { Sidemenu } from './components/sidemenu';
import { Home } from './pages/home';
import { Education } from './pages/education';
import { Experience } from './pages/experience';
import { Projects } from './pages/projects';
import { Contact } from './pages/contact';

function App() {
  // State to toggle sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [device, setDevice] = useState('laptop');
  // Step 2.1: Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function detectDevice() {
    const screenWidth = window.innerWidth;
    // Define the breakpoint for mobile vs laptop (1024px is a common breakpoint)
    return screenWidth < 1024 ? 'mobile' : 'laptop';
  }

  // Step 2.2: Apply the theme to the document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleResize = () => {
      setDevice(detectDevice());
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Step 2.3: Toggle function
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Router>
      {device === 'mobile' ? (
          <div
            className={`w-[250px] p-2 bg-gray-300 fixed top-0 left-0 h-full transition-transform transform ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 lg:relative lg:block`}
          >
            <Sidedetails />
          </div>
        ) : (
          <div className="w-[250px] p-2 bg-gray-300 fixed top-0 left-0 h-full dark:bg-slate-600">
            <Sidedetails />
          </div>
        )}

        {/* Main Content Area */}
        <div
          className={`flex-1 bg-white overflow-auto transition-all ${
            isSidebarOpen ? 'ml-0' : ''
          } lg:ml-[250px] mb-20 lg:mb-1 dark:bg-darkBackground h-full` }
        >
          {/* Button to toggle sidebar visibility on mobile */}
          <button
            className="lg:hidden p-4 fixed top-4 left-4 bg-blue-500 text-white rounded-full"
            onClick={toggleSidebar}
          >
            <span className="text-xl">&#9776;</span>
          </button>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Sidemenu Section */}
        <div
          className={`w-[80px]  ${
            device === 'mobile'
              ? 'flex fixed bottom-0 left-0 right-0 justify-between lg:hidden ml-5'
              : 'flex flex-col fixed top-0 right-0 h-full justify-center lg:flex'
          }`}
        >
          <Sidemenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        </div>
    </Router>
  );
}

export default App;
