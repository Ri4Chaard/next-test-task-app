import React from "react";
import { parseDate } from "@/utils/parse-date";

interface Props {
  className?: string;
  title: string;
}

export const HeaderTitle: React.FC<Props> = ({ className, title }) => {
  const currentDate = parseDate(new Date());
  return (
    <div className={className}>
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-smoky text-sm mt-1">
        <span className="text-emerald">{parseDate(new Date()).day}, </span>
        {currentDate.date + " " + currentDate.month + " " + currentDate.year}
      </p>
    </div>
  );
};
