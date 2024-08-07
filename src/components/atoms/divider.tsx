import React from "react";

export interface DividerProps {
  children?: React.ReactNode;
}

const Divider: React.FC<DividerProps> = ({ children }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="px-2 bg-white text-sm text-gray-500">{children}</span>
      </div>
    </div>
  );
};

export default Divider;
