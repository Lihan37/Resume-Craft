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
  icon?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline = false,
  icon = true,
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      {...props}
      className={`
      
      ${
        outline
          ? " border-c-primary text-c-primary bg-white shadow-blue-700"
          : `${
              disabled ? "bg-blue-400 text-gray-200" : "bg-c-primary text-white"
            }   ${
              !disabled && "hover:bg-c-primary-light"
            } border-transparent shadow-blue-200`
      }
      shadow-2xl flex justify-start items-center gap-8 uppercase font-mono hover:gap-10 transition-all duration-300 px-8 ${
        icon && "pr-3"
      } border-2 py-2 rounded-full font-semibold tracking-widest	text-base xl:text-lg`}>
      <span> {children}</span>
      {icon && (
        <span
          className={`
      ${outline ? "border-c-primary" : "border-white"}
      border-2 rounded-full p-2 xl:p-3 `}>
          <FaArrowRightLong />
        </span>
      )}
    </button>
  );
};

export default Button;
