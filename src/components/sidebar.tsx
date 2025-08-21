import React from "react";
import { cn } from "@/lib/utils";
import { Navbar } from "./navbar/navbar";
import { ProfileTab } from "./navbar/profile-tab";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "max-w-[220px] w-full flex flex-col justify-between px-7 bg-white",
        className
      )}
    >
      <div>
        <div className="mt-[55px] flex gap-3 items-center">
          <Avatar>
            <AvatarFallback className="bg-[#FF9F24] text-white">
              C
            </AvatarFallback>
          </Avatar>
          <h1 className="text-[20px] font-semibold">TESTAPP</h1>
        </div>
        <Navbar />
      </div>
      <ProfileTab className="mb-[37px]" />
    </div>
  );
};
