import React from "react";
import { cn } from "@/lib/utils";
import { DashboardIcon } from "./icons/dashboard-icon";
import Link from "next/link";
import { SettingsIcon } from "./icons/settings-icon";

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <nav className={cn("mt-10 flex flex-col gap-3", className)}>
      <Link
        href={"/"}
        className="flex gap-[10px] text-smoky hover:text-emerald transition-colors duration-200"
      >
        <DashboardIcon />
        <span>Dashboard</span>
      </Link>
      <Link
        href={"/profile"}
        className="flex gap-[10px] text-smoky hover:text-emerald transition-colors duration-200"
      >
        <SettingsIcon />
        <span>Setting</span>
      </Link>
    </nav>
  );
};
