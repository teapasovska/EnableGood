import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  bold?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  width = "w-full",
  bold,
}) => {
  return (
    <button
      className={`bg-white text-xl ${width} ${
        bold && "font-bold"
      }  py-5 rounded-2xl focus:border-none shadow-2xl mb-5 shadow-gray-500 cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
