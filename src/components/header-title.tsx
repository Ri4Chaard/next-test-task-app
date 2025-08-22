import React from "react";
import { cn } from "@/lib/utils";
import { parseDate } from "@/utils/parseDate";

interface Props {
  className?: string;
  title: string;
}

export const HeaderTitle: React.FC<Props> = ({ className, title }) => {
  return (
    <div className={cn("", className)}>
      <h2 className="text-[20px] font-medium">{title}</h2>
      <p className="text-smoky text-sm mt-1">
        <span className="text-emerald">{parseDate(new Date()).day}, </span>
        {parseDate(new Date()).date +
          " " +
          parseDate(new Date()).month +
          " " +
          parseDate(new Date()).year}
      </p>
    </div>
  );
};
