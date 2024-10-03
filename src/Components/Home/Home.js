import React, { useEffect } from "react";
import "./Home.css"; 
import WaveAnimation from "../Visuals/WaveAnimation"; // Import the WaveAnimation component

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
    // Make sure the path points to the correct file in the build directory
    window.open('/resume/Maaz_Zaidi_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="home-container">
      {/* Section for the "Portfolio" text in the middle */}
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

        {/* Wave Animation at the bottom of the container */}
        <div className="wave-container">
          <WaveAnimation />
        </div>
      </div>
      
      {/* Below the wave is where the rest of the app's content can go */}
      <div className="main-app-content">
        {/* Main app content goes here */}
      </div>
    </div>
  );
};

export default Home;
