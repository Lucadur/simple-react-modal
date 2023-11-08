import React, { useState } from 'react';
import './App.css';
import Modal from './modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const customModalStyle = {
    width: '80%',
    maxWidth: '400px',
    backgroundColor: 'lightblue',
  };

  const customModalClassName = 'custom-modal';

  return (
    <div className="App">
      <h1>React Modal Plugin Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} style={customModalStyle} className={customModalClassName}>
        <h2>Custom Modal Content</h2>
        <p>This is the content of your custom modal.</p>
      </Modal>
    </div>
  );
}

export default App;
