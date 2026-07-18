// components/UserAvatar.tsx
import React from "react";
import Image from "next/image";
import { FaUserCircle } from 'react-icons/fa';

type UserAvatarProps = {
  imageUrl?: string;
  name?: string;
  size?: number; // px
};

export default function UserAvatar({ imageUrl, name, size = 56 }: UserAvatarProps) {
  return (
    <div
      className="rounded-full bg-gray-700 flex items-center justify-center overflow-hidden"
      style={{ width: size, height: size }}
      aria-label={name}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name || "User avatar"}
          className="object-cover w-full h-full"
            width={size}
            height={size}
        />
      ) : (
        <FaUserCircle size={size * 0.8} className="text-gray-400" />
      )}
    </div>
  );
}
