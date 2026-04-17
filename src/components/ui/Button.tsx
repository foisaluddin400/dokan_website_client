import React from "react";

type ButtonProps = {
  name: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

const Button = ({
  name,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-xl bg-primary text-white font-medium 
      hover:bg-primary-dark transition disabled:opacity-50 ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;