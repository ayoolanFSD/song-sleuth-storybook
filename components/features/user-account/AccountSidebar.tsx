// components/AccountSidebar.tsx
'use client';

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import UserAvatar from "./UserAvatar";
import SidebarMenu from "./SidebarMenu";
import { useIsDesktop } from "@/hooks/useIsDesktop";

import { 
  FaUser, 
  FaLock, 
  FaBell, 
  FaShieldAlt, 
  FaLink, 
  FaPencilAlt,
  FaBars
} from "react-icons/fa";

const menuItems = [
  { key: "overview", label: "Account overview", icon: <FaUser /> },
  { key: "edit-profile", label: "Edit profile", icon: <FaPencilAlt /> },
  { key: "change-password", label: "Change password", icon: <FaLock /> },
  { key: "notification-settings", label: "Notification settings", icon: <FaBell /> },
  { key: "privacy-settings", label: "Privacy settings", icon: <FaShieldAlt /> },
  { key: "linked-accounts", label: "Linked accounts", icon: <FaLink /> },
];

type AccountSidebarProps = {    
  user: { imageUrl?: string; name?: string };
  activeKey?: string;
  onSelect?: (key: string) => void; // Make it optional
};

export default function AccountSidebar({ user, activeKey }: AccountSidebarProps) {
    const isDesktop = useIsDesktop();
    const [expanded, setExpanded] = useState(isDesktop);
    const pathname = usePathname();
    
    const computedActiveKey = pathname.split('/').filter(Boolean).pop() || 'overview';
    const currentActiveKey = activeKey || computedActiveKey;

    useEffect(() => {
        setExpanded(isDesktop);
    }, [isDesktop]);

    return (
        <aside className="md:w-64 bg-gray-900 text-white h-full flex flex-col md:pb-6 md:pt-10">
            <div
                className="flex items-center p-5 md:hidden"
                onClick={() => !isDesktop && setExpanded((v) => !v)}
            >
                <FaBars className="mr-3" />
                Account menu
            </div>
            <div className="hidden md:flex flex-col items-center mb-10">
                <UserAvatar imageUrl={user.imageUrl} name={user.name} size={64} />
            </div>

            {(isDesktop || expanded) && (
                <>
                    <SidebarMenu 
                        items={menuItems} 
                        activeKey={currentActiveKey} 
                        // onSelect={onSelect} // It's okay to pass undefined here
                    />
                </>
            )}
        </aside>
    );
}