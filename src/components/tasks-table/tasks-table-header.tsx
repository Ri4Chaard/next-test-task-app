import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const TasksTableHeader: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-4 gap-x-8 font-medium", className)}>
      <div>To do (3)</div>
      <div>In progress (2)</div>
      <div>Review (1)</div>
      <div>Completed (1)</div>
    </div>
  );
};
