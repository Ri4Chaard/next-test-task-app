import React from "react";
import { cn } from "@/lib/utils";
import { TasksColumn } from "./tasks-column";
import { mockData, TASK_STATUS } from "@/constants";
import { TaskStatusType } from "@/types/tasks-types";

interface Props {
  className?: string;
}

export const TasksTable: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-4 gap-x-8", className)}>
      <TasksColumn
        tasks={mockData
          .filter((data) => data.status === TASK_STATUS.TODO)
          .map((data) => {
            return {
              title: data.title,
              description: data.description,
              id: Number(data.id),
              status: data.status as TaskStatusType,
              createdAt: new Date(data.createdAt),
            };
          })}
        header={"To do"}
      />
      <TasksColumn
        tasks={mockData
          .filter((data) => data.status === TASK_STATUS.IN_PROGRESS)
          .map((data) => {
            return {
              title: data.title,
              description: data.description,
              id: Number(data.id),
              status: data.status as TaskStatusType,
              createdAt: new Date(data.createdAt),
            };
          })}
        header={"In progress"}
      />
      <TasksColumn
        tasks={mockData
          .filter((data) => data.status === TASK_STATUS.REVIEW)
          .map((data) => {
            return {
              title: data.title,
              description: data.description,
              id: Number(data.id),
              status: data.status as TaskStatusType,
              createdAt: new Date(data.createdAt),
            };
          })}
        header={"Review"}
      />
      <TasksColumn
        tasks={mockData
          .filter((data) => data.status === TASK_STATUS.COMPLETED)
          .map((data) => {
            return {
              title: data.title,
              description: data.description,
              id: Number(data.id),
              status: data.status as TaskStatusType,
              createdAt: new Date(data.createdAt),
            };
          })}
        header={"Completed"}
      />
    </div>
  );
};
