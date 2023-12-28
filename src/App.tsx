import { useState } from "react";
import Modal from "./components/Modal";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleConfirm = () => {
    console.log("Confirmed!");
    // You can add any logic you want to execute on confirmation
    setModalOpen(false); // Close the modal after confirmation
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <Alert lifeTimeMs={500}>This is Alert</Alert>

      {isModalOpen && <Modal onConfirm={handleConfirm} />}

      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <Button onClick={toggleModal}>Open Modal</Button>

        <Button
          onClick={() => {
            console.log("Primary Button clicked!");
          }}
        >
          Primary Button
        </Button>

        <Button
          color="secondary"
          onClick={() => {
            console.log("Secondary Button clicked!");
          }}
        >
          Secondary Button
        </Button>
      </div>
    </>
  );
}

export default App;
