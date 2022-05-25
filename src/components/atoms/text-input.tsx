import React from "react";

export type Type = "email" | "password" | "text" | "number";
export interface TextInputProps {
  className?: string;
  value?: string;
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  children?: React.ReactNode;
  type?: Type;
  rows?: number;
}
const TextInput: React.FC<TextInputProps> = ({
  className,
  children,
  value,
  onChange,
  placeholder,
  type,
}) => {
  const handleChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange(value, event);
  };
  return (
    <div className="w-full">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ml-4">
          {children}
        </div>
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={(event) => handleChange(event.target.value, event)}
        />
      </div>
    </div>
  );
};

export default TextInput;
