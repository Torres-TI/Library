/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface LibraryCardProps {
  title: string;
  description: string;
  src: string;
  alt: string;
}
const LibraryCard: React.FC<LibraryCardProps> = ({
  title,
  description,
  src,
  alt,
}) => {
  return (
    <div className="w-72 min-h-[320px] bg-white shadow-lg flex flex-col  border border-gray-100 rounded-lg ">
      <div className="w-full h-[160px] ">
        <img src={src} alt={alt} className="w-full h-full rounded-t-lg" />
      </div>
      <div className="flex flex-col space-y-4 w-full mt-4 px-4">
        <div className="text-lg font-bold text-center">{title}</div>
        <text className="text-sm font-normal whitespace-pre-line">
          {description}
        </text>
      </div>
    </div>
  );
};

export default LibraryCard;
