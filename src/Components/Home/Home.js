import React, { useEffect } from "react";
import "./Home.css"; 
import WaveAnimation from "../Visuals/WaveAnimation"; // Import the WaveAnimation component
import ProjectCards from "../Projects/ProjectCards";

const Home = () => {
     // mouse movement-based parallax effect
  useEffect(() => {
    const moveText = (e) => {
      const layers = document.querySelectorAll('.layer');
      layers.forEach(layer => {
        const speed = layer.getAttribute('data-depth');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', moveText);

    return () => {
      document.removeEventListener('mousemove', moveText);
    };
  }, []);

  const handleDownload = () => {
    window.open('/resume/Maaz_Zaidi_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="home-container">
      <div id="parallax-move" className="content-container">
        <div className="portfolio-text layer" data-depth="0.5">
          
          {/* Circular SVG download button */}
          <button className="download-btn" onClick={handleDownload}>
            <h1>Maaz Zaidi</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-download"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
        </div>

        <div className="wave-container">
          <WaveAnimation />
        </div>
      </div>
      
      <div className="main-app-content">
        <ProjectCards />
      </div>
    </div>
  );
};

export default Home;
