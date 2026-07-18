import Link from "next/link";
import React from "react";
import Image from "next/image";
import Input from "@/components/shared/ui/Input";
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import UserNav from "../layout/Header/UserMenu";
import { IconColorProvider } from '@/contexts/IconColorContext';
import NavLink from "@/components/shared/ui/NavLink";

type User = {
  name: string;
  avatarUrl: string;
};

type PlaylistHeaderProps = {
  name: string;
  playlistImageUrl: string;
  user: User;
  songCount: number;
  duration: string;
  filter: string;
  onFilterChange: (value: string) => void;
};

export default function PlaylistHeader({
  name,
  playlistImageUrl,
  user,
  songCount,
  duration,
  filter,
  onFilterChange
}: PlaylistHeaderProps) {
  const iconColor = '#000'; // or any color you want to provide
  return (
    <IconColorProvider value={iconColor}>
      <div className="w-full bg-gradient-to-b from-[#E16B6B] to-white pb-8">
        {/* Header Bar: Back link and UserNav, full width, spaced apart */}
        <div className="flex justify-between items-center px-8 pt-8">
          <NavLink
            href="/library"
            className="inline-flex items-center text-sm text-white font-semibold hover:underline"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
          >
            <FaChevronLeft className="mr-2" />
            Back to Library
          </NavLink>
          <UserNav />
        </div>

        {/* Main Playlist Content Row */}
        <div className="flex flex-col xl:flex-row xl:items-end px-8 pt-8 gap-4">
          {/* Image and title/info side by side */}
          <div className="flex items-end gap-8 flex-1">
            <div className="aspect-square overflow-hidden flex-shrink-0">
              <Image
                src={playlistImageUrl}
                alt={name}
                width={112}
                height={112}
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white drop-shadow-lg">{name}</h1>
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={user.avatarUrl}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full border border-yellow-400"
                    unoptimized
                  />
                  <span className="font-bold text-black">{user.name}</span>
                </div>
                <span className="text-gray-700 font-normal lg:before:content-['•_'] lg:before:mr-1">
                  {songCount} songs • {duration}
                </span>
              </div>
            </div>
          </div>

          {/* Filter input, below on mobile, inline on xl+ */}
          <div className="w-full xl:max-w-[350px]">
            <Input
              icon={<FaSearch size={18} />}
              placeholder="Filter songs"
              rounded="full"
              className="border-slate-400"
              value={filter}
              onChange={e => onFilterChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </IconColorProvider>
  );
}
