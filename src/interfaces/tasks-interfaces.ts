import { TaskStatusType } from "@/types/tasks-types";

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: TaskStatusType;
  createdAt: Date;
}
