import { HomePageHeader } from "@/components/home-page-header";
import { TasksTable } from "@/components/tasks-table/tasks-table";

export default function Home() {
  return (
    <div className="px-8 py-10">
      <HomePageHeader />
      <TasksTable className="mt-7 " />
    </div>
  );
}
