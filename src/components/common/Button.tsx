import React, { ReactNode, ButtonHTMLAttributes } from "react";

export enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  outline?: boolean;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({
  children,
  outline = false,
  size = ButtonSize.MD,
  ...props
}) => {
  return (
    <button
      {...props}
      className={` 
      ${size === ButtonSize.SM && "px-2 py-1 text-sm "} 
      ${size === ButtonSize.MD && "px-3 py-2 text-md "}  
      ${size === ButtonSize.LG && "px-4 py-2 text-lg "} 
      ${
        outline
          ? "  text-c-primary border-2 border-c-primary "
          : " text-white bg-c-primary "
      }
      rounded-md font-semibold`}>
      {children}
    </button>
  );
};

export default Button;
