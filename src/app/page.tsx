import { HeaderTitle } from "@/components/header-title";
import { TasksTable } from "@/components/tasks-table/tasks-table";
import { tasksOptions } from "@/hooks/use-tasks";
import { getQueryClient } from "@/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default function Home() {
  const queyClient = getQueryClient();
  void queyClient.prefetchQuery(tasksOptions);

  return (
    <div className="w-full h-full px-8 py-10 bg-[#F7F9FD] overflow-y-auto">
      <HeaderTitle title="My Tasks" />
      <HydrationBoundary state={dehydrate(queyClient)}>
        <TasksTable className="mt-7 " />
      </HydrationBoundary>
    </div>
  );
}
