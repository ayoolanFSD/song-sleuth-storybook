// components/SidebarMenu.tsx
'use client';

import React from "react";
import { usePathname } from "next/navigation";
import SidebarMenuItem from "./SidebarMenuItem";

type MenuItem = {
  key: string;
  label: string;
  icon: React.ReactNode;
};

type SidebarMenuProps = {
  items: MenuItem[];
};

export default function SidebarMenu({ items }: SidebarMenuProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Account menu" className="flex flex-col">
      {items.map((item) => {
        const href = `/account/${item.key}`;
        const active = pathname === href || pathname.endsWith(`/${item.key}`);

        return (
          <SidebarMenuItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            href={href}
            active={active}
          />
        );
      })}
    </nav>
  );
}
