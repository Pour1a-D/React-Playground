import { ReactNode } from "react";

interface Props {
  color?: "primary" | "secondary";
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  const primary = "bg-blue-600 hover:bg-blue-700 text-white";
  const secondary = "bg-gray-600 hover:bg-gray-700 text-white";

  return (
    <>
      <button
        onClick={onClick}
        className={`transition-colors rounded-lg px-5 py-3  ${
          color === "primary"
            ? primary
            : "" || color === "secondary"
            ? secondary
            : ""
        }`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
