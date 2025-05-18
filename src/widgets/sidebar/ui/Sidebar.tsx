// src/widgets/sidebar/ui/Sidebar.tsx
"use client";
import Link from "next/link";
import { HomeIcon, BookIcon, HeartIcon } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    label: "About",
    href: "/about",
    icon: <BookIcon />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <HeartIcon />,
  },
];

export const Sidebar = () => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-64 min-w-64 flex-shrink-0 flex flex-col whitespace-nowrap ${"bg-[#120540]"} text-white`}
    >
      <h1 className="text-xl font-bold border-b border-gray-700 p-4">
        <Link href="/">Маленький принц</Link>
      </h1>

      <div className="w-full flex flex-col flex-1 p-4 space-y-2 text-sm overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-2"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};
