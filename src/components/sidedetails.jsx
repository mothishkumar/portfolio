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
      style={{
        backgroundColor: "#fff",
        color: "#333",
        height: "100vh",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: "100%",
          overflowY: "auto",
          paddingRight: "8px", // Optional: Adds spacing for the scroll bar
        }}
      >
        {/* Profile Image */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <img
            src="/mothish.jpg"
            alt="Mothish Kumar"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #6a0dad", // Changed to purple
            }}
          />
        </div>

        {/* Name and Job Title */}
        <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "0.5rem" }}>K Mothish Kumar</h2>
        <h3 style={{ textAlign: "center", color: "#6a0dad", marginBottom: "1rem" }}>Front-End Developer</h3>

        {/* Social Icons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "1rem" }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} style={{ color: "#333" }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} style={{ color: "#333" }} />
          </a>
        </div>

        <Divider />

        {/* Personal Details */}
        <div style={{ marginBottom: "1rem" }}>
          <p>
            <span style={{ fontWeight: "bold", color: "#6a0dad" }}>Age:</span> 22
          </p>
          <p>
            <span style={{ fontWeight: "bold", color: "#6a0dad" }}>Residence:</span> Chittoor, India
          </p>
          <p>
            <span style={{ fontWeight: "bold", color: "#6a0dad" }}>Freelance:</span> Available
          </p>
          <p>
            <span style={{ fontWeight: "bold", color: "#6a0dad" }}>Address:</span> Chittoor, India
          </p>
        </div>

        <Divider />

        {/* Language Progress */}
        <h3 style={{ color: "#6a0dad", marginBottom: "1rem" }}>Languages</h3>
        <div style={{ marginBottom: "1rem" }}>
          <p>English: {englishPercentage}%</p>
          <Progress percent={englishPercentage} showInfo={false} strokeColor="#6a0dad" />
          <p>Telugu: {teluguPercentage}%</p>
          <Progress percent={teluguPercentage} showInfo={false} strokeColor="#6a0dad" />
          <p>Tamil: {tamilPercentage}%</p>
          <Progress percent={tamilPercentage} showInfo={false} strokeColor="#6a0dad" />
        </div>

        <Divider />

        {/* Skills Progress */}
        <h3 style={{ color: "#6a0dad", marginBottom: "1rem" }}>Skills</h3>
        <div style={{ marginBottom: "1rem" }}>
          <p>React.js: {reactPercentage}%</p>
          <Progress percent={reactPercentage} showInfo={false} strokeColor="#6a0dad" />
          <p>Next.js: {nextJsPercentage}%</p>
          <Progress percent={nextJsPercentage} showInfo={false} strokeColor="#6a0dad" />
          <p>ASP.NET: {aspNetPercentage}%</p>
          <Progress percent={aspNetPercentage} showInfo={false} strokeColor="#6a0dad" />
        </div>

        <Divider />

        {/* Extra Skills */}
        <h3 style={{ color: "#6a0dad", marginBottom: "1rem" }}>Extra Skills</h3>
        <ul style={{ paddingLeft: "20px", marginBottom: "1rem" }}>
          <li>Tailwind CSS</li>
          <li>Responsive Design</li>
          <li>JavaScript (ES6+)</li>
          <li>Git & GitHub</li>
        </ul>

        <Divider />

        {/* Download CV Button */}
        <Button
          type="primary"
          style={{
            width: "100%",
            backgroundColor: "#6a0dad", // Changed to purple
            borderColor: "#6a0dad", // Changed to purple
            borderRadius: "8px",
          }}
          size="large"
        >
          Download CV
        </Button>
      </div>
    </Card>
  );
};
