import React from "react";
import { cn } from "@/lib/utils";
import { ProfileProgress } from "./profile-progress";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const ProfileInfo: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("h-full flex flex-col justify-between", className)}>
      <div>
        <div className="mt-10 flex flex-col gap-1">
          <h2 className="text-xl font-medium">My Profile</h2>
          <span className="text-emerald text-sm">
            75% completed your profile
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <ProfileProgress />
          <div className="w-full flex flex-col gap-[10px]">
            <span className="font-medium text-center">User R.</span>
            <span className="text-sm text-center text-smoky">
              Developer at White Digital
            </span>
            <span className="w-full h-[1px] bg-[#F5F6FA]" />
          </div>
        </div>
      </div>
      <Button variant="destructive">
        <span className="text-xs font-bold">Logout</span>
      </Button>
    </div>
  );
};
