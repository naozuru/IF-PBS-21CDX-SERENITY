"use client"; // Tambahkan ini di baris pertama

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";

type SideNavProps = {
  items: {
    name: string;
    path: string;
    icon?: string;
  }[];
};

const SideNav: React.FC<SideNavProps> = ({ items }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`min-h-screen ${
        isExpanded ? "w-64" : "w-20"
      } bg-gray-800 text-white transition-width duration-300`}
    >
      <div className="flex items-center justify-between p-4 mx-2">
        <h1 className={`${isExpanded ? "block" : "hidden"} text-lg font-bold`}>
          Identitas Laut
        </h1>
        <button onClick={toggleSidebar} className="focus:outline-none">
          <Icon icon={isExpanded ? "mdi:menu-open" : "mdi:menu"} width="24" />
        </button>
      </div>

      <nav className="mt-4 mx-6">
        {items.map((item, index) => (
          <Link key={index} href={item.path} className="flex py-1">
            {item.icon && <Icon icon={item.icon} width="24" />}
            <span
              className={`${
                isExpanded ? "ml-4" : "hidden"
              } transition-all duration-300`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;
