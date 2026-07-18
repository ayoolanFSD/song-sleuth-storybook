import React from "react";

type SongTitleCellProps = {
  coverUrl: string;
  title: string;
  artist: string;
};

export default function SongTitleCell({ coverUrl, title, artist }: SongTitleCellProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={coverUrl}
        alt={title}
        className="w-12 h-12 rounded shadow object-cover hidden md:table-cell"
      />
      <div>
        <div className="font-semibold text-sm md:text-base">{title}</div>
        <div className="text-xs text-gray-500">{artist}</div>
      </div>
    </div>
  );
}
