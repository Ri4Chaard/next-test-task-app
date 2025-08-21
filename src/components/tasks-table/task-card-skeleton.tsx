import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const TaskCardSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "rounded-xl w-full min-h-[216px] border border-dashed border-[#AAAAAA]",
        className
      )}
    ></div>
  );
};
