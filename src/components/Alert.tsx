import { ReactNode, useState } from "react";
import CloseIcon from "./icons/CloseIcon";

interface Props {
  lifeTimeMs?: number;
  children: ReactNode;
}

const Alert = ({ children, lifeTimeMs = 3000 }: Props) => {
  // ToDo: Add close button and auto close after x sec
  const [showAlert, setAlertState] = useState(true);

  setTimeout(() => {
    setAlertState(false);
  }, lifeTimeMs);

  return (
    <>
      {showAlert && (
        <div className="bg-blue-200 text-blue-600 mx-auto rounded-xl w-96 h-20 p-4">
          <div className="flex items-center justify-between w-full h-full">
            <div className="text-center cursor-default w-full">{children}</div>
            <div className="flex flex-col items-center justify-start h-full">
              <button
                onClick={() => {
                  setAlertState(false);
                }}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
