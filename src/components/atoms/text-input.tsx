import React from "react";

export interface TextInputProps {
  className?: string;
  value: string;
  onChange: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  children?: React.ReactNode;
}
const TextInput: React.FC<TextInputProps> = ({
  className,
  value,
  onChange,
  placeholder,
}) => {
  const handleChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange(value, event);
  };
  return (
    <input
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(event) => handleChange(event.target.value, event)}
    />
  );
};

export default TextInput;
