import React from "react";

export interface HeaderProps {
  title?: string;
}
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <h1 className="text-medium text-indigo-700 text-3xl pt-12">{title}</h1>
  );
};

export default Header;
