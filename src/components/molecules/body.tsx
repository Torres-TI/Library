import React from "react";
import { classNameBuilder } from "../../helpers/class-name-builder";

export interface BodyProps {
  className?: string;
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ className, children }) => {
  return (
    <div className={classNameBuilder(`flex flex-col mt-7 ${className}`)}>
      {children}
    </div>
  );
};

export default Body;
