import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProjectCards.css';

Modal.setAppElement('#root'); 

const ProjectCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const projects = [
    { id: 1, name: 'Project 1', type: 'web', url: 'https://example.com' },
    { id: 2, name: 'Project 2', type: 'description', description: 'placeholder desc.' },
    { id: 3, name: 'Project 3', type: 'web', url: 'https://example2.com' },
  ];

  // Opens the modal
  const openModal = (project) => {
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
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card" onClick={() => openModal(project)}>
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
          },
        }}
      >
        <button onClick={closeModal} className="close-modal-btn">Close</button>
        {modalContent}
      </Modal>
    </div>
  );
};

export default ProjectCards;
