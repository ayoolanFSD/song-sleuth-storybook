import React from "react";
import { FaSearch } from "react-icons/fa";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  rounded?: "full" | "md";
};

export default function Input({
  icon,
  rightIcon,
  rounded = "md",
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="relative w-full">
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400">
          {icon}
        </span>
      )}
      <input
        className={`
          block w-full
          ${icon ? "pl-10" : "pl-4"}
          ${rightIcon ? "pr-10" : "pr-4"}
          py-2
          border
          ${rounded === "full" ? "rounded-full" : "rounded-md"}
          text-black dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition
          ${className}
        `}
        {...props}
      />
      {rightIcon && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          {rightIcon}
        </span>
      )}
    </div>
  );
}