import React from "react";

type ButtonTypeType = "button" | "submit" | "reset";
export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: ButtonTypeType;
}
const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = "button",
}) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

export default Button;
