"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "../ui/avatar";

interface Props {
  className?: string;
}

export const ProfileProgress: React.FC<Props> = ({ className }) => {
  const [progress] = useState<number>(75);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-[100px] h-[100px]",
        className
      )}
    >
      <div
        className="absolute inset-0 rounded-full -rotate-30"
        style={{
          background: `conic-gradient(#64C882 ${progress}%, #FFFFFF ${progress}% 100%)`,
        }}
      />

      <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
          <Avatar className="w-20 h-20">
            <AvatarFallback />
          </Avatar>
        </div>
      </div>
    </div>
  );
};
