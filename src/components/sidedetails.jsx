import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing icons
import { Progress, Card, Divider, Button } from "antd";

export const Sidedetails = () => {
  const englishPercentage = 90;
  const teluguPercentage = 90;
  const tamilPercentage = 70;
  const reactPercentage = 90;
  const nextJsPercentage = 85;
  const aspNetPercentage = 75;

  return (
    <Card
      className="bg-white dark:bg-darkBackground text-gray-800 dark:text-darkText h-full rounded-lg shadow-lg overflow-auto"
    >
      <div className="h-full overflow-y-auto pr-2">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src="/mothish.jpg"
            alt="Mothish Kumar"
            className="w-24 h-24 rounded-full object-cover border-4 border-purple-600"
          />
        </div>

        {/* Name and Job Title */}
        <h2 className="text-center font-bold mb-2">K Mothish Kumar</h2>
        <h3 className="text-center text-purple-600 mb-4">Front-End Developer</h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} className="text-gray-800 dark:text-white" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} className="text-gray-800 dark:text-white" />
          </a>
        </div>

        <Divider />

        {/* Personal Details */}
        <div className="mb-4">
          <p>
            <span className="font-bold text-purple-600">Age:</span> 23
          </p>
          <p>
            <span className="font-bold text-purple-600">Residence:</span> Chittoor, India
          </p>
          <p>
            <span className="font-bold text-purple-600">Freelance:</span> Available
          </p>
          <p>
            <span className="font-bold text-purple-600">Address:</span> Chittoor, India
          </p>
        </div>

        <Divider />

        {/* Language Progress */}
        <h3 className="text-purple-600 mb-4">Languages</h3>
        <div className="mb-4">
          <p>English: {englishPercentage}%</p>
          <Progress percent={englishPercentage} showInfo={false} strokeColor="#6a0dad" />
          <p>Telugu: {teluguPercentage}%</p>
          <Progress percent={teluguPercentage} showInfo={false} strokeColor="#6a0dad" />
          <p>Tamil: {tamilPercentage}%</p>
          <Progress percent={tamilPercentage} showInfo={false} strokeColor="#6a0dad" />
        </div>

        <Divider />

        {/* Skills Progress */}
        <h3 className="text-purple-600 mb-4">Skills</h3>
        <div className="mb-4">
          <p>React.js: {reactPercentage}%</p>
          <Progress percent={reactPercentage} showInfo={false} strokeColor="#6a0dad" />
          <p>Next.js: {nextJsPercentage}%</p>
          <Progress percent={nextJsPercentage} showInfo={false} strokeColor="#6a0dad" />
          <p>ASP.NET: {aspNetPercentage}%</p>
          <Progress percent={aspNetPercentage} showInfo={false} strokeColor="#6a0dad" />
        </div>

        <Divider />

        {/* Extra Skills */}
        <h3 className="text-purple-600 mb-4">Extra Skills</h3>
        <ul className="pl-5 mb-4">
          <li>Tailwind CSS</li>
          <li>Responsive Design</li>
          <li>JavaScript (ES6+)</li>
          <li>Git & GitHub</li>
        </ul>

        <Divider />

        {/* Download CV Button */}
        <Button
          type="primary"
          className="w-full bg-purple-600 border-purple-600 rounded-lg"
          size="large"
          onClick={() => {
            // Trigger the download
            const link = document.createElement("a");
            link.href = "/resume.pdf"; // Path to your resume file in the public folder
            link.download = "Mothish_Kumar_Resume.pdf"; // The name of the file after download
            document.body.appendChild(link); // Append to body to make the link actionable
            link.click(); // Trigger click event
            document.body.removeChild(link); // Clean up the link element
          }}
        >
          Download CV
        </Button>
        <div className="mb-20 lg:hidden"></div>
      </div>
    </Card>
  );
};
