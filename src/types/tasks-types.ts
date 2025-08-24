export type TaskStatusType = "to-do" | "in-progress" | "review" | "completed";

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: TaskStatusType;
  createdAt: Date;
}
