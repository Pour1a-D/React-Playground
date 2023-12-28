import { ReactNode } from "react";

interface Props {
  color?: "primary" | "secondary" | "danger";
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  const primary = "bg-blue-600 hover:bg-blue-700 text-white";
  const secondary = "bg-gray-600 hover:bg-gray-700 text-white";
  const danger = "bg-red-600 hover:bg-red-700 text-white";

  return (
    <>
      <button
        onClick={onClick}
        className={`transition-colors rounded-lg min-w-20 px-5 py-3  ${
          color === "primary"
            ? primary
            : "" || color === "secondary"
            ? secondary
            : "" || color === "danger"
            ? danger
            : ""
        }`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
