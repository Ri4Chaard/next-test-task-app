"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TasksColumn } from "./tasks-column";
import { TASK_STATUS } from "@/constants";
import { useParsedTasks } from "@/hooks/useParsedTasks";
import { Loader2 } from "lucide-react";

interface Props {
  className?: string;
}

export const TasksTable: React.FC<Props> = ({ className }) => {
  const { parsedData, isLoading, isError } = useParsedTasks();

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (isError || !parsedData) {
    return <div className="flex justify-center">Error fetching data</div>;
  }

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8", className)}>
      <TasksColumn
        tasks={parsedData.filter((data) => data.status === TASK_STATUS.TODO)}
        header={"To do"}
      />
      <TasksColumn
        tasks={parsedData.filter(
          (data) => data.status === TASK_STATUS.IN_PROGRESS
        )}
        header={"In progress"}
      />
      <TasksColumn
        tasks={parsedData.filter((data) => data.status === TASK_STATUS.REVIEW)}
        header={"Review"}
      />
      <TasksColumn
        tasks={parsedData.filter(
          (data) => data.status === TASK_STATUS.COMPLETED
        )}
        header={"Completed"}
      />
    </div>
  );
};
