import React from "react";

type ButtonTypeType = "button" | "submit" | "reset";
export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: ButtonTypeType;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
