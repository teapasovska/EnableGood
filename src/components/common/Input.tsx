import React from "react";

interface InputProps {
  placeholder: string;
  textcenter?: boolean;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  textcenter,
  fullWidth,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${
        fullWidth ? "w-full" : ""
      } placeholder:text-black placeholder:text-xl py-5 pb-3 pl-5 bg-white rounded-2xl shadow-2xl focus:outline-none ${
        textcenter ? "text-center" : "text-left"
      }`}
    />
  );
};

export default Input;
