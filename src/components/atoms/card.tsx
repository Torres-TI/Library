import React from "react";

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`overflow-hidden bg-white rounded-lg shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
