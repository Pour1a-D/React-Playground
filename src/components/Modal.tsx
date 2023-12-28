import { useState } from "react";
import Button from "./Button";

interface Props {
  title?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
}

const Modal = ({
  title = "Are you sure?",
  confirmText = "Yes",
  cancelText = "Cancel",
  onConfirm,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Function to handle confirmation button click
  const handleConfirm = () => {
    // If onConfirm callback is provided, execute it
    if (onConfirm) {
      onConfirm();
    }
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal only if the click is outside the modal content
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isModalOpen && (
        <div
          onClick={handleOverlayClick}
          className="bg-black/50 fixed flex items-center justify-center w-full h-full"
        >
          <div className="bg-white flex flex-col items-center justify-between rounded-lg w-80 h-40 p-4">
            <h1 className="text-lg">{title}</h1>

            <div className="flex justify-between w-full gap-4 px-4">
              {/* Cancel button */}
              <Button onClick={closeModal} color="danger">
                {cancelText}
              </Button>
              {/* Confirm button */}
              <Button onClick={handleConfirm} color="primary">
                {confirmText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
