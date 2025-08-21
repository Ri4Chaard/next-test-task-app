import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const ProfileTab: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {icon}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium">User R.</span>
        <span className="text-[10px] text-smoky">test-mail@email.com</span>
      </div>
    </div>
  );
};

const icon = <div className="w-8 h-8 rounded-full bg-[#C4C4C4]"></div>;
