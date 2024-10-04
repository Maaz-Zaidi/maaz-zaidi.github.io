import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import './ProjectCards.css';

Modal.setAppElement('#root');

const ProjectCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [activeProject, setActiveProject] = useState(null); // Track the active project for buttons like GitHub
  const projectRefs = useRef([]);

  const projects = [
    { id: 1, name: 'Expedition', type: 'web', url: 'https://example.com', github: 'https://github.com/expedition-repo', description: 'Expedition project description.' },
    { id: 2, name: 'Concurrent Multi-Model RANSAC', type: 'description', description: 'Concurrent Multi-Model RANSAC description.', github: 'https://github.com/ransac-repo' },
    { id: 3, name: 'Hexagon', type: 'web', url: 'http://hexagonindustrial.com/', github: 'https://github.com/hexagon-repo', description: 'Hexagon project description.' },
    { id: 4, name: 'Dauntless V4', type: 'description', description: 'Dauntless V4 project description.', github: 'https://github.com/dauntless-repo' },
    { id: 5, name: 'uFinder (FE Demo)', type: 'web', url: 'https://ufinderinc.github.io/Ufinder.html', github: 'https://github.com/ufinder-repo', description: 'uFinder project description.' },
  ];

  const openModal = (project) => {
    setActiveProject(project); // Set the active project for buttons like GitHub
    if (project.type === 'web') {
      setModalContent(<iframe src={project.url} width="100%" height="100%" frameBorder="0" title={project.name}></iframe>);
    } else if (project.type === 'description') {
      setModalContent(
        <div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </div>
      );
    }
    setIsOpen(true);
    setShowInfo(false);
  };

  const closeModal = () => setIsOpen(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    }, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="project-card"
          onClick={() => openModal(project)}
          ref={(el) => (projectRefs.current[index] = el)}
        >
          <div className="project-image-placeholder">
            {/* Placeholder for now */}
          </div>
          <div className="project-info">
            <p>{project.name}</p>
          </div>
        </div>
      ))}

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Project Modal"
        style={{
          content: {
            width: '80%',
            height: '80%',
            margin: 'auto',
            display: 'flex',
            position: 'relative',
          },
        }}
      >
        <div className="modal-sidebar">
          {/* Move the close button here */}
          
          <button className="close-modal-btn" onClick={closeModal}>X</button>
          <button className="github-btn" onClick={() => window.open(activeProject?.github, '_blank')}>G</button>
          <button className="info-btn" onClick={toggleInfo}>i</button>
        </div>

        <div className="modal-content">
          {modalContent}

          {showInfo && (
            <div className="info-popup">
              <h3>Project Info</h3>
              <p>{activeProject?.description}</p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ProjectCards;
