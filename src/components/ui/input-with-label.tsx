import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputLabel: string;
}

export const InputWithLabel: React.FC<Props> = ({
  className,
  inputLabel,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label className="text-xs font-semibold text-[#666666]" htmlFor={props.id}>
        {inputLabel}
      </label>
      <Input {...props} />
    </div>
  );
};
