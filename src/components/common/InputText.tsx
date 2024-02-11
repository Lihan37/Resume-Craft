import React, { InputHTMLAttributes } from "react";

interface InputTextProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type?: string;
  textarea?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  type = "text",
  textarea = false,
  ...argument
}) => {
  return !textarea ? (
    <input
      {...argument}
      type={type}
      className="w-full px-4 py-2 rounded-md outline-none focus:border-c-primary  border-[1.8px] placeholder:font-semibold text-lg placeholder:text-gray-400 placeholder:text-base text-c-dark"
    />
  ) : (
    <textarea
      {...argument}
      className="w-full min-h-28 px-4 py-2 rounded-md outline-none focus:border-c-primary  border-[1.8px] placeholder:font-semibold text-lg placeholder:text-gray-400 placeholder:text-base text-c-dark"
    />
  );
};

export default InputText;
