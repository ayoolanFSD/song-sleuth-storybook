import React from "react";
import Image from "next/image";
import { FaUserCircle } from 'react-icons/fa';

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number;
};

export default function Avatar({ src, alt = "User avatar", size = 40 }: AvatarProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full object-cover border"
        style={{ width: size, height: size }}
        // Optionally, you can set priority or quality
        // priority
        // quality={80}
      />
    );
  }
  // Placeholder icon if no src provided
  return (
    <div
      className="flex items-center justify-center bg-gray-200 rounded-full border"
      style={{ width: size, height: size }}
    >
      <FaUserCircle size={size * 0.8} className="text-gray-400" />
    </div>
  );
}
