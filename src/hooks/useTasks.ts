import { ITask } from "@/interfaces/tasks-interfaces";
import api from "@/utils/axios";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

interface IFetchedTasks {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
}

const fetchTasks = async (): Promise<IFetchedTasks[] | null> => {
  const { data } = await api.get("/tasks");
  if (data) {
    return data;
  }
  return null;
};

const tasksOptions = queryOptions({
  queryKey: ["tasks"],
  queryFn: fetchTasks,
});

const useTasks = () => {
  return useSuspenseQuery(tasksOptions);
};

export { useTasks, tasksOptions, fetchTasks };
