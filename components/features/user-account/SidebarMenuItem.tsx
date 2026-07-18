// components/SidebarMenuItem.tsx
import React from "react";
import Link from "next/link";

type SidebarMenuItemProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
};

export default function SidebarMenuItem({
  icon,
  label,
  href,
  active = false,
}: SidebarMenuItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center w-full px-6 py-4 rounded transition-colors border-b border-gray-700
        ${active ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`}
      aria-current={active ? "page" : undefined}
    >
      <span className="mr-3">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
