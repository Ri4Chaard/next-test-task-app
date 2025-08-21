import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "../ui/avatar";

interface Props {
  className?: string;
}

export const ProfileTab: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Avatar>
        <AvatarFallback></AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-black">User R.</span>
        <span className="text-[10px] text-smoky">test-mail@email.com</span>
      </div>
    </div>
  );
};
