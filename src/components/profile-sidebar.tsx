import React from "react";
import { cn } from "@/lib/utils";
import { ProfileInfo } from "./profile/profile-info";

interface Props {
  className?: string;
}

export const ProfileSidebar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "hidden lg:block max-w-[312px] w-full px-7 pb-[26px] bg-white",
        className
      )}
    >
      <ProfileInfo />
    </div>
  );
};
