import React, { useMemo } from "react";
import { ITask } from "@/interfaces/tasks-interfaces";
import { TaskCard } from "./task-card";
import { TaskCardSkeleton } from "./task-card-skeleton";

interface Props {
  tasks: ITask[];
  header: string;
}

export const TasksColumn: React.FC<Props> = ({ tasks, header }) => {
  const items = useMemo(() => {
    const result = [...tasks] as (ITask | null)[];

    while (result.length < 3) {
      result.push(null);
    }

    return result;
  }, [tasks]);

  return (
    <div>
      <h3 className="font-medium">
        {header} ({tasks.length})
      </h3>
      <div className="grid grid-cols-1 gap-y-6 mt-4">
        {items.map((task, index) =>
          task ? (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              status={task.status}
              createdAt={task.createdAt}
            />
          ) : (
            <TaskCardSkeleton key={index + Date.now()} />
          )
        )}
      </div>
    </div>
  );
};
