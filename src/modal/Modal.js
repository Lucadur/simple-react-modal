import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

function Modal({ isOpen, onClose, children, style, className }) {
  if (!isOpen) {
    return null;
  }

  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "grey",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    zIndex: 999,
    ...style, // Merge custom styles
  };

  return (
    <div className="modal-overlay">
      <div className={`modal ${className}`} style={modalStyles}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  style: PropTypes.object, // Custom styles
  className: PropTypes.string, // Custom class name
};

export default Modal;
