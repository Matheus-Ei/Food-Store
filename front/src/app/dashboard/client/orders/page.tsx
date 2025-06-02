"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/client/links";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { CardGrid } from "@/components/molecules/CardGrid";
import { OrderService } from "@/services/OrderService";
import { Order } from "@/entities/Order";

const ClientOrders = () => {
  const { data: orders } = useServiceQuery<Order[]>(OrderService.getAll, [
    "getAllOrders",
  ]);

  const cards = orders?.map((order) => ({
    value: String(order.status),
    description: `${new Date(order?.createdAt).getDate()}/${new Date(order?.createdAt).getMonth()}/${new Date(order?.createdAt).getFullYear()}`,
  }));

  return (
    <SidebarWithHeader links={links}>
      <CardGrid items={cards || []} />
    </SidebarWithHeader>
  );
};

export default ClientOrders;
