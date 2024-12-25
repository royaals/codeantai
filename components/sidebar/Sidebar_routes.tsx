"use client";

import { useState } from "react";
import {
  BookText,
  Cloud,
  CodeXml,
  Home,
  LogOut,
  Phone,
  Settings,
} from "lucide-react";
import { signOut } from "next-auth/react"; 
import SidebarItem from "./sidebar-item";

export const routes = [
  {
    icon: Home,
    label: "Repositories",
    href: "/",
  },
  {
    icon: CodeXml,
    label: "AI Code Review",
    href: "/on-progress",
  },
  {
    icon: Cloud,
    label: "Cloud Security",
    href: "/on-progress",
  },
  {
    icon: BookText,
    label: "How to Use",
    href: "/on-progress",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/on-progress",
  },
];

export const bottomRoutes = [
  {
    icon: Phone,
    label: "Support",
    href: "#",
  },
  {
    icon: LogOut,
    label: "Logout",
    href: "/login",
    onClick: () => signOut(), // Add onClick handler to logout
  },
];

export default function SidebarRoutes() {
  const [active, setActive] = useState<string>("Repositories");

  return (
    <div className="flex flex-col justify-between h-full w-full px-4">
      <div className="flex flex-col gap-1">
        {routes.map((route, index) => (
          <SidebarItem
            key={index}
            active={active}
            setActive={setActive}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}
      </div>

      <div className="flex flex-col gap-1">
        {bottomRoutes.map((route, index) => (
          <SidebarItem
            key={index}
            active={active}
            setActive={setActive}
            label={route.label}
            icon={route.icon}
            href={route.href}
            onClick={route.onClick} // Pass the onClick function to SidebarItem
          />
        ))}
      </div>
    </div>
  );
}
