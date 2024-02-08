import "./App.css";
import sennaIcon from "./assets/senna.jpg";
import { useState } from "react";

const Modal = ({ onClose }) => {
  // Function to handle outside click
  const handleOutsideClick = (event) => {
    // If the clicked element is the modal backdrop, close the modal
    if (event.target.className === "modal-backdrop") {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleOutsideClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>YES XD</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

function App() {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  // Show the modal
  const handleClick = () => {
    setShowModal(true);
  };

  // Hide the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <img src={sennaIcon} className="logo"></img>
      </div>
      <h1>Is Senna broken?</h1>
      <div className="button-group">
        <button name="adc" onClick={handleClick}>
          ADC
        </button>
        <button name="support" onClick={handleClick}>
          Support
        </button>
      </div>
      {showModal && <Modal onClose={handleCloseModal} />}
    </>
  );
}

export default App;
