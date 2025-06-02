"use client";

import { SidebarWithHeader } from "@/components/organisms/Sidebar";
import { links } from "@/app/dashboard/deliver/links";
import { useServiceQuery } from "@/hooks/useServiceQuery";
import { CardGrid } from "@/components/molecules/CardGrid";
import { OrderService } from "@/services/OrderService";
import { Order } from "@/entities/Order";
import { FormDialog } from "@/components/molecules/FormDialog";
import { useState } from "react";
import { FormField } from "@/components/molecules/Form";
import {useServiceMutation} from "@/hooks/useServiceMutation";
import {useQueryClient} from "@tanstack/react-query";

const ClientOrders = () => {
  const [isOpen, setIsOpen] = useState<{ open: boolean }>({ open: false });
  const [orderId, setOrderId] = useState<number>(0);

  const queryClient = useQueryClient();

  const { data: orders } = useServiceQuery<Order[]>(OrderService.getAll, [
    "getAllOrders",
  ]);

  const cards = orders?.map((order) => ({
    title: String(order.status),
    description: `Deliver user id: ${order.deliverUserId}`,
    onUpdate: () => {
      setOrderId(order.id);
      setIsOpen({ open: true });
    },
  }));

  const {
    mutateAsync: update,
    // eslint-disable-next-line
  } = useServiceMutation(async (variables: any) => {
    const response = await OrderService.update(orderId, {
      ...variables
    });

    await queryClient.invalidateQueries();
    return response;
  });

  const fields: FormField[] = [
    {
      name: "status",
      label: "Status",
      type: "select",
      options: [
        { label: "Preparing", value: "Preparing" },
        { label: "Sent", value: "Sent" },
        { label: "Received", value: "Received" },
      ],
    },
    {name: 'deliverUserId', label: "Deliver user", type: "number"}
  ];

  return (
    <SidebarWithHeader links={links}>
      <CardGrid items={cards || []} />

      <FormDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"Change status"}
        onSubmit={async (variables) => {
          await update(variables);

          setIsOpen({open: false});
        }}
        fields={fields}
      />
    </SidebarWithHeader>
  );
};

export default ClientOrders;
