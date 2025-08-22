"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { DashboardIcon } from "./icons/dashboard-icon";
import Link from "next/link";
import { SettingsIcon } from "./icons/settings-icon";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className={cn("mt-10 flex flex-col gap-3", className)}>
      <Link
        href={"/"}
        className={cn(
          "flex gap-[10px] hover:text-emerald transition-colors duration-200",
          pathname === "/" ? "text-emerald" : "text-smoky"
        )}
      >
        <DashboardIcon />
        <span>Dashboard</span>
      </Link>
      <Link
        href={"/profile"}
        className={cn(
          "flex gap-[10px] hover:text-emerald transition-colors duration-200",
          pathname === "/profile" ? "text-emerald" : "text-smoky"
        )}
      >
        <SettingsIcon />
        <span>Setting</span>
      </Link>
    </nav>
  );
};
