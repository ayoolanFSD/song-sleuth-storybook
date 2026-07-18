'use client';
import React from "react";
import { FaAmazon, FaApple } from "react-icons/fa";
import BeatportIcon from "./Icons/BeatportIcon";
import DiscogsIcon from './Icons/DiscogsIcon';

type SongLinkIconProps = {
  variant: "discogs" | "amazon" | "beatport" | "apple";
  url: string;
};

const ICONS = {
  discogs: <DiscogsIcon size={24} />,
  amazon: <FaAmazon className="text-orange-600" />,
  beatport: <BeatportIcon className="text-green-600" />,
  apple: <FaApple className="text-gray-700" />,
};

const LABELS = {
  discogs: "Discogs",
  amazon: "Amazon",
  beatport: "Beatport",
  apple: "Apple Music",
};

function getAppleHref(url: string): string {
  const isWindows = typeof navigator !== 'undefined' && 
    /windows/i.test(navigator.userAgent);
  const protocol = isWindows ? 'itms://' : 'music://';
  return url.replace('https://', protocol) + '&app=itunes';
}

export default function SongLinkIcon({ variant, url }: SongLinkIconProps) {
  const href = variant === 'apple' ? getAppleHref(url) : url;
  return (
    <a
      href={href}
      target={variant === 'apple' ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className="relative group mx-1"
      aria-label={LABELS[variant]}
    >
      <span className="text-xl flex">{ICONS[variant]}</span>
      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap text-center">
        {LABELS[variant]}
        <br />
      </span>
    </a>
  );
}
