"use client";

import React from "react";
import SideNav from "../components/sidenav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navItems = [
    { name: "Dashboard", path: "/admin", icon: "mdi:home" },
    { name: "Creature", path: "/admin/creature", icon: "mdi:home" },
    { name: "Plant", path: "/admin/plant", icon: "mdi:account" },
    { name: "Settings", path: "/settings", icon: "mdi:cog" },
    // Tambahkan item navigasi lainnya di sini
  ];

  return (
    <div className="flex">
      <SideNav items={navItems} />
      <main className="flex-grow p-4">{children}</main>
    </div>
  );
};

export default Layout;
