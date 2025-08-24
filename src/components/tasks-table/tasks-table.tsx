"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TasksColumn } from "./tasks-column";
import { TASK_STATUS } from "@/constants";
import { useParsedTasks } from "@/hooks/use-parsed-tasks";
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

  const todoTasks = parsedData.filter(
    (data) => data.status === TASK_STATUS.TODO
  );
  const inProgressTasks = parsedData.filter(
    (data) => data.status === TASK_STATUS.IN_PROGRESS
  );
  const reviewTasks = parsedData.filter(
    (data) => data.status === TASK_STATUS.REVIEW
  );
  const completedTasks = parsedData.filter(
    (data) => data.status === TASK_STATUS.COMPLETED
  );

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8",
        className
      )}
    >
      <TasksColumn tasks={todoTasks} header={"To do"} />
      <TasksColumn tasks={inProgressTasks} header={"In progress"} />
      <TasksColumn tasks={reviewTasks} header={"Review"} />
      <TasksColumn tasks={completedTasks} header={"Completed"} />
    </div>
  );
};
