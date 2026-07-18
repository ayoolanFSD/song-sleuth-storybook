import React from "react";

type CardProps = {
  image: string;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  viewLabel?: string;
  className?: string; // Add this line
};

export default function Card({
  image,
  title,
  subtitle,
  onClick,
  viewLabel = "View",
  className = "",      // Add default value here
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-900 mb-1 truncate">{title}</h3>
          {subtitle && <p className="text-gray-500 text-sm mb-2 truncate">{subtitle}</p>}
        </div>
        <button
          className="mt-1 text-black-600 font-medium text-sm hover:underline self-start"
        >
          {viewLabel} &rsaquo;
        </button>
      </div>
    </div>
  );
}
