import React from "react";

type InfoIconProps = {
  size?: number;
  color?: string;
} & React.SVGProps<SVGSVGElement>;

export default function InfoIcon({ size = 38, color = "#FF3B30", ...props }: InfoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M19.0003 25.3332V18.9998M19.0003 12.6665H19.0162M34.8337 18.9998C34.8337 27.7443 27.7448 34.8332 19.0003 34.8332C10.2558 34.8332 3.16699 27.7443 3.16699 18.9998C3.16699 10.2553 10.2558 3.1665 19.0003 3.1665C27.7448 3.1665 34.8337 10.2553 34.8337 18.9998Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
