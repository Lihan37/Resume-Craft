import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline = false,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
      
      ${
        outline
          ? " border-c-primary text-c-primary bg-white shadow-blue-700"
          : "bg-c-primary text-white hover:bg-c-primary-light border-transparent shadow-blue-200"
      }
      shadow-2xl flex justify-start items-center gap-8 uppercase font-mono hover:gap-10 transition-all duration-300 px-8 pr-3 border-2 py-2 rounded-full font-semibold tracking-widest	text-base xl:text-lg`}>
      <span> {children}</span>
      <span
        className={`
      ${outline ? "border-c-primary" : "border-white"}
      border-2 rounded-full p-2 xl:p-3 `}>
        <FaArrowRightLong />
      </span>
    </button>
  );
};

export default Button;
