import { HomePageHeader } from "@/components/home-page-header";
import { TasksTable } from "@/components/tasks-table/tasks-table";
import { tasksOptions, useTasks } from "@/hooks/useTasks";
import { getQueryClient } from "@/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default function Home() {
  const queyClient = getQueryClient();
  void queyClient.prefetchQuery(tasksOptions);

  return (
    <div className="px-8 py-10">
      <HomePageHeader />
      <HydrationBoundary state={dehydrate(queyClient)}>
        <TasksTable className="mt-7 " />
      </HydrationBoundary>
    </div>
  );
}
