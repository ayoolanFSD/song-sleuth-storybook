import React from "react";

type LibrarySidebarItemProps = {
  image: string;
  title: string;
  type: "playlist";
  name: string;
  active?: boolean;
  onClick?: () => void;
};

export default function LibrarySidebarItem({
  image,
  title,
  type,
  name,
  active = false,
  onClick,
}: LibrarySidebarItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group flex items-center w-full px-2 py-1 rounded-lg transition
        ${active ? "bg-gray-800 font-bold text-white" : "hover:bg-gray-700 text-gray-200"}
        focus:outline-none focus:ring-2 focus:ring-blue-500 w-full
      `}
      style={{ minHeight: 44 }}
    >
      <img
        src={image}
        alt={title}
        className="w-10 h-10 rounded-md object-cover flex-shrink-0 mr-3 border border-gray-700"
      />
      <div className="flex flex-col w-full">
        <span className={`truncate text-left text-sm ${active ? "text-white" : "text-gray-200"}`}>
          {title}
        </span>
        <span className="text-xs text-gray-400 text-left truncate">
          {type} &#8226; {name}
        </span>
      </div>
    </button>
  );
}