import React, { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaChevronUp } from "react-icons/fa";
import NavLink from '@/components/shared/ui/NavLink';

// Standalone UI showcase: the real app wires this to NextAuth's `signOut`.
// Here it's a no-op so the component renders without an auth backend.
const signOut = (_opts?: { callbackUrl?: string }) => {};

type ProfileDropdownItem = {
  id: string;
  slug: string;
  name: string;
};

type ProfileDropdownProps = {
  items: ProfileDropdownItem[];
  iconColor?: string; // new optional prop for icon color
};

export default function ProfileDropdown({ items, iconColor = "currentColor" }: ProfileDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="w-full flex justify-end">
      <div className="relative" ref={ref}>
        {/* Trigger */}
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white hover:bg-gray-100 transition"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="true"
          aria-expanded={open}
        >
          <FaUserCircle size={24} color={iconColor} />
          <span className="font-medium">Profile</span>
          <FaChevronUp
            size={18}
            color={iconColor}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-50 top-16">
            {/* Triangle pointer */}
            <div className="absolute -top-3.5 right-3 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[14px] border-b-white"></div>
            <div className="flex flex-col py-2">
              {items.map((item) => (
                <NavLink
                  key={item.id}
                  href={item.slug}
                  className="text-left px-4 py-4 hover:bg-gray-100"
                >
                  {item.name}
                </NavLink>
              ))}

              <button
                className="text-left px-4 py-4 hover:bg-gray-100"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Log out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
