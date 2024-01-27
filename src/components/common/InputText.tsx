import React, { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputText: React.FC<InputTextProps> = ({ ...argument }) => {
  return (
    <input
      {...argument}
      type="text"
      className="w-full px-4 py-2 rounded-md outline-none focus:border-c-primary  border-2 placeholder:font-semibold text-lg placeholder:text-gray-400 placeholder:text-base text-c-dark"
    />
  );
};

export default InputText;
