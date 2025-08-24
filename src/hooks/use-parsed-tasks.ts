import { ITask, TaskStatusType } from "@/types/tasks-types";
import { useTasks } from "./use-tasks";

export const useParsedTasks = () => {
  const { data, isLoading, isError } = useTasks();
  let parsedData: ITask[] | null = null;
  if (data) {
    parsedData = data.map((task) => {
      return {
        title: task.title,
        description: task.description,
        id: Number(task.id),
        status: task.status as TaskStatusType,
        createdAt: new Date(task.createdAt),
      };
    });
  }
  return { parsedData, isLoading, isError };
};
