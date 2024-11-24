import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidedetails } from './components/sidedetails';
import { Sidemenu } from './components/sidemenu';
import { Home } from './pages/home';
import { Education } from './pages/education';
import { Experience } from './pages/experience';
import { Projects } from './pages/projects';
import { Contact } from './pages/contact';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar Section (Sidedetails) */}
        <div className="w-[250px] p-2 bg-gray-300 fixed top-0 left-0 h-full">
          <Sidedetails />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 ml-[250px] bg-white overflow-auto">
          <Routes>
            {/* Define Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Sidemenu Section */}
        <div className="w-[80px] flex flex-col fixed top-0 right-0 h-full justify-center">
          <Sidemenu />
        </div>
      </div>
    </Router>
  );
}

export default App;
