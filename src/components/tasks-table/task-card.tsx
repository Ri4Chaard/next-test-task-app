import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { parseDate } from "@/utils/parse-date";
import { TaskStatusType } from "@/types/tasks-types";
import { TimeIcon } from "./icons/time-icon";

interface Props {
  className?: string;
  title: string;
  description: string;
  status: TaskStatusType;
  createdAt: Date;
}

export const TaskCard: React.FC<Props> = ({
  className,
  title,
  description,
  status,
  createdAt,
}) => {
  const date = parseDate(createdAt);
  return (
    <div
      className={cn(
        "w-full min-h-[216px] flex flex-col justify-between px-4 py-6 bg-white rounded-xl ",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          <Button
            variant="ghost"
            className="w-6 h-6 flex items-center gap-[3.5px] cursor-pointer"
            size="icon"
          >
            {[...Array(3)].map((_, index) => (
              <div key={index} className="w-1 h-1 rounded-full bg-[#AAAAAA]" />
            ))}
          </Button>
        </div>
        <div className="mt-[22px]">
          <p className="text-sm text-smoky">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button
          className="cursor-auto"
          disabled={status === "completed"}
          variant={status === "completed" ? "disabled" : "default"}
        >
          <TimeIcon />
          {date.date + " " + date.month}{" "}
        </Button>
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
          <Avatar>
            <AvatarFallback />
          </Avatar>
          <Avatar>
            <AvatarFallback />
          </Avatar>
          <Avatar>
            <AvatarFallback />
          </Avatar>
        </div>
      </div>
    </div>
  );
};
