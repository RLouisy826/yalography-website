import { StatCard } from "./stat-card";
import { getOrders } from "@/lib/admin-data";
import { Title } from "@aomdev/ui";
import { Skeleton } from "@/components/shared";

export async function StatCardContainer() {
  const orders = await getOrders();
  return <StatCard orders={orders} />;
}

export function StatCardLoading() {
  return (
    <div className=" mt-16">
      <div className="flex justify-between items-center mb-8">
        <Title order={2} className="font-heading font-medium">
          Overview
        </Title>
        <Skeleton className="h-10 w-[150px]" radius={"sm"} />
      </div>
      <div className="mt-6 grid grid-cols-4 gap-10">
        <div className="  border-t border-gray-200 dark:border-neutral-700 pt-6">
          <Skeleton radius={"full"} className="h-12 w-12 mb-4" />
          <Skeleton className="mb-4 h-3 w-32" />
        </div>
        <div className="  border-t border-gray-200 dark:border-neutral-700 pt-6">
          <Skeleton radius={"full"} className="h-12 w-12 mb-4" />
          <Skeleton className="mb-4 h-3 w-32" />
        </div>
        <div className="  border-t border-gray-200 dark:border-neutral-700 pt-6">
          <Skeleton radius={"full"} className="h-12 w-12 mb-4" />
          <Skeleton className="mb-4 h-3 w-32" />
        </div>
        <div className="  border-t border-gray-200 dark:border-neutral-700 pt-6">
          <Skeleton radius={"full"} className="h-12 w-12 mb-4" />
          <Skeleton className="mb-4 h-3 w-32" />
        </div>
      </div>
    </div>
  );
}