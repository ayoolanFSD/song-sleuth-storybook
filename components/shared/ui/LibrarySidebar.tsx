import React, { useState, useEffect } from "react";
import LibrarySidebarItem from "./LibrarySidebarItem";
import { LibraryIcon } from "@/components/shared/ui/Icons";
import Input from "./Input";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Button from "./Button";
import { useIsDesktop } from "@/hooks/useIsDesktop";

type LibraryItem = {
  id: string;
  title: string;
  type: "playlist";
  name: string;
  image: string;
};

type LibrarySidebarProps = {
  items: LibraryItem[];
  onSelect?: (id: string) => void;
  activeId?: string;
  loading?: boolean;
};

export default function LibrarySidebar({
  items,
  onSelect,
  activeId,
  loading = false,
}: LibrarySidebarProps) {
  const isDesktop = useIsDesktop();
  // On desktop: always expanded. On mobile: can expand/collapse.
  const [expanded, setExpanded] = useState(isDesktop);

  useEffect(() => {
    setExpanded(isDesktop);
  }, [isDesktop]);

  // Limit items to 3 on mobile when expanded
  const mobileLimitedItems = items.slice(0, 3);

  return (
    <aside
      className={`
        bg-gray-900 text-white h-full flex flex-col transition-all duration-300 ease-in-out relative
        w-full md:w-80 md:py-4 md:px-2
        ${isDesktop ? "py-4 px-2" : expanded ? "h-auto" : "h-14 justify-center"}
      `}
      style={{
        minWidth: isDesktop ? 256 : undefined,
      }}
    >
      {/* Header */}
      <div
        className={`
          flex items-center justify-between w-full h-14 md:h-6 px-4 md:px-0
          ${isDesktop ? "mb-4 cursor-default" : "cursor-pointer"}
          select-none
        `}
        // Only allow toggle on mobile
        onClick={() => !isDesktop && setExpanded((v) => !v)}
      >
        <div className="flex items-center gap-3">
          <LibraryIcon />
          <span className="font-bold text-lg">Your Library</span>
        </div>
        {/* Chevron only on mobile */}
        {!isDesktop && (
          <span>
            {expanded ? (
              <FaChevronUp className="w-5 h-5" />
            ) : (
              <FaChevronDown className="w-5 h-5" />
            )}
          </span>
        )}
      </div>

      {/* Expanded content */}
      {(isDesktop || expanded) && (
        <>
          {/* Filter Input */}
          <div className="mb-2 ">
            <Input
              placeholder="Filter playlists"
              rounded="md"
              className="bg-gray-800 border-none text-white placeholder:text-gray-400 text-xs"
              icon={<FaSearch size={14} />}
              onChange={value => {
                // router.push(`/playlist/${id}`)
              }}
            />
          </div>

          {/* Playlist/Album List */}
          <ul
            className={`
              space-y-1
              ${isDesktop ? "overflow-visible" : "overflow-y-auto custom-scrollbar max-h-[15rem]"}
            `}
          >
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <li key={i} className="animate-pulse h-14 bg-gray-700 rounded" />
                ))
              : items.map((item) => (
                  <li key={item.id}>
                    <LibrarySidebarItem
                      image={item.image}
                      title={item.title}
                      type={item.type}
                      name={item.name}
                      active={item.id === activeId}
                      onClick={() => onSelect?.(item.id)}
                    />
                  </li>
                ))}
          </ul>

          <div className="my-2 px-2">
            <Button
              variant="secondary"
              fullWidth
              className="flex justify-center items-center text-sm mt-11"
            >
              Load more
            </Button>
          </div>
        </>
      )}
    </aside>
  );
}
