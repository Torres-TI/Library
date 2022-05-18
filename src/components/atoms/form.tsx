import React from "react";

export interface FormProps {
  children?: React.ReactNode;
  onSubmit: () => void;
  className?: string;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, className }) => {
  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onSubmit();
      }}
      className={className}
    >
      {children}
    </form>
  );
};

export default Form;
