# Lucas React Modal Plugin

A highly customizable and easy-to-use modal component for React applications. This plugin allows for custom styling and simple state management to handle the visibility of your modals.

## Features

- **Customizable**: Override styles and classes for perfect integration into your design.
- **Simple API**: Easy to open and close with minimal code.
- **Responsive**: Designed to be mobile-friendly out of the box.

## Installation

To add this modal plugin to your project, run:

```bash
npm install lucas-react-modal-plugin
```

or with yarn:
```
yarn add lucas-react-modal-plugin
```

## Usage
Here's how to use the Modal component in your application:

```
import React, { useState } from 'react';
import Modal from 'lucas-react-modal-plugin';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Custom styles for the modal
  const customStyles = {
    width: '80%',
    maxWidth: '400px',
    backgroundColor: 'lightblue',
    // Add more custom styles if needed
  };

  return (
    <div className="App">
      <h1>Modal Example</h1>
      <button onClick={toggleModal}>Toggle Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        style={customStyles}
        className="custom-modal-class"
      >
        {/* Modal content goes here */}
        <h2>Custom Styled Modal</h2>
        <p>This modal can be styled according to your needs.</p>
      </Modal>
    </div>
  );
}

export default App;
```

## Props

- isOpen: Boolean indicating if the modal is visible.
- onClose: Function to call when the modal should close.
- style: Object with custom style rules.
- className: String to add custom class(es) to the modal.

##  Customizing the Modal
You can apply custom styles directly to the Modal via the style prop, or pass a custom class name through the className prop for CSS styling.

```
<Modal
  isOpen={isModalOpen}
  onClose={toggleModal}
  style={{ backgroundColor: 'lightblue', padding: '20px' }}
  className="my-custom-modal"
>
  {/* Content */}
</Modal>

```
##  License
This project is licensed under the MIT License - see the LICENSE.md file for details.

##  Contributing
We welcome contributions to improve this modal plugin. Please feel free to fork the repository, make changes, and submit pull requests.

Created with ♥ by Lucas
